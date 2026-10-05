#!/usr/bin/env python3
"""Build the static wiki site data from the Obsidian vault.

Reads 02 WIKI/Concepts/*.md and writes:
  data/index.json      metadata for every concept (title, summary, tags, dates)
  data/search.json     slug -> plain text, loaded lazily for full-text search
  content/<slug>.md    the concept body with wikilinks rewritten for the site

Run:  python3 build.py
Needs PyYAML (pip3 install pyyaml) if it is not already installed.
"""
import json
import os
import re
import sys

import yaml

VAULT = os.environ.get(
    "WIKI_VAULT",
    "/Users/ksadroudine/Library/Mobile Documents/iCloud~md~obsidian/Documents/Wiki",
)
CONCEPTS = os.path.join(VAULT, "02 WIKI", "Concepts")
HERE = os.path.dirname(os.path.abspath(__file__))
OUT_DATA = os.path.join(HERE, "data")
OUT_CONTENT = os.path.join(HERE, "content")

WIKILINK = re.compile(r"\[\[([^\]|]+)(?:\|([^\]]*))?\]\]")


def rewrite_links(body):
    """Concept links become site links; RAW links become plain source labels."""

    def repl(m):
        target = m.group(1).strip()
        alias = (m.group(2) or "").strip()
        if target.startswith("Concepts/"):
            slug = target[len("Concepts/"):]
            label = alias or slug.replace("-", " ")
            return "[%s](#/concept/%s)" % (label, slug)
        label = alias or os.path.basename(target)
        if label.lower().endswith(".md"):
            label = label[:-3]
        return '<span class="src">%s</span>' % label

    return WIKILINK.sub(repl, body)


def plain_text(body):
    text = WIKILINK.sub(lambda m: (m.group(2) or os.path.basename(m.group(1))), body)
    text = re.sub(r"[#*_`>\[\]()-]+", " ", text)
    return re.sub(r"\s+", " ", text).strip().lower()


def main():
    if not os.path.isdir(CONCEPTS):
        sys.exit("Concepts folder not found: " + CONCEPTS)
    os.makedirs(OUT_DATA, exist_ok=True)
    os.makedirs(OUT_CONTENT, exist_ok=True)
    for f in os.listdir(OUT_CONTENT):
        if f.endswith(".md"):
            os.remove(os.path.join(OUT_CONTENT, f))

    index, search = [], {}
    for name in sorted(os.listdir(CONCEPTS)):
        if not name.endswith(".md"):
            continue
        slug = name[:-3]
        raw = open(os.path.join(CONCEPTS, name), encoding="utf8").read()
        m = re.match(r"---\n(.*?)\n---\n", raw, re.S)
        if not m:
            print("skip (no frontmatter):", name)
            continue
        meta = yaml.safe_load(m.group(1)) or {}
        body = raw[m.end():]
        index.append(
            {
                "slug": slug,
                "title": meta.get("title", slug),
                "summary": str(meta.get("summary", "")),
                "tags": meta.get("tags") or [],
                "published": str(meta.get("published", "")),
                "modified": str(meta.get("modified", "")),
            }
        )
        search[slug] = plain_text(body)
        with open(os.path.join(OUT_CONTENT, slug + ".md"), "w", encoding="utf8") as fh:
            fh.write(rewrite_links(body))

    index.sort(key=lambda c: c["title"].lower())
    with open(os.path.join(OUT_DATA, "index.json"), "w", encoding="utf8") as fh:
        json.dump(index, fh, ensure_ascii=False)
    with open(os.path.join(OUT_DATA, "search.json"), "w", encoding="utf8") as fh:
        json.dump(search, fh, ensure_ascii=False)
    print("Built %d concepts." % len(index))


if __name__ == "__main__":
    main()
