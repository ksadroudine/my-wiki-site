#!/usr/bin/env python3
"""Build the static wiki site data from the Obsidian vault.

Reads 02 WIKI/Concepts/*.md and 02 WIKI/BOK/*.md and writes:
  data/index.json      metadata for every concept (title, summary, tags, dates)
  data/bok.json        metadata for every Book of Knowledge page (section, chapter, ...)
  data/search.json     slug -> plain text (BOK pages are keyed "bok/<slug>")
  content/<slug>.md    the concept body with wikilinks rewritten for the site
  content/bok/<slug>.md  the BOK page body

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
OUT_BOK = os.path.join(OUT_CONTENT, "bok")
BOK = os.path.join(VAULT, "02 WIKI", "BOK")
TITLES = {}

WIKILINK = re.compile(r"\[\[([^\]|]+)(?:\|([^\]]*))?\]\]")


def rewrite_links(body):
    """Concept links become site links; RAW links become plain source labels."""

    def repl(m):
        target = m.group(1).strip()
        alias = (m.group(2) or "").strip()
        if target.startswith("Concepts/"):
            slug = target[len("Concepts/"):]
            label = alias or TITLES.get(slug) or slug.replace("-", " ")
            return "[%s](#/concept/%s)" % (label, slug)
        if target.startswith("BOK/"):
            slug = target[len("BOK/"):]
            return "[%s](#/bok/%s)" % (alias or slug.replace("-", " "), slug)
        label = alias or os.path.basename(target)
        if label.lower().endswith(".md"):
            label = label[:-3]
        return '<span class="src">%s</span>' % label

    return WIKILINK.sub(repl, body)


def plain_text(body):
    text = WIKILINK.sub(lambda m: (m.group(2) or os.path.basename(m.group(1))), body)
    text = re.sub(r"[#*_`>\[\]()-]+", " ", text)
    return re.sub(r"\s+", " ", text).strip().lower()


def read_pages(folder):
    pages = []
    for name in sorted(os.listdir(folder)):
        if not name.endswith(".md") or name.startswith("_"):
            continue
        raw = open(os.path.join(folder, name), encoding="utf8").read()
        m = re.match(r"---\n(.*?)\n---\n", raw, re.S)
        if not m:
            print("skip (no frontmatter):", name)
            continue
        pages.append((name[:-3], yaml.safe_load(m.group(1)) or {}, raw[m.end():]))
    return pages


def clear(folder):
    os.makedirs(folder, exist_ok=True)
    for f in os.listdir(folder):
        if f.endswith(".md"):
            os.remove(os.path.join(folder, f))


def main():
    for d in (CONCEPTS, BOK):
        if not os.path.isdir(d):
            sys.exit("Folder not found: " + d)
    os.makedirs(OUT_DATA, exist_ok=True)
    clear(OUT_CONTENT)
    clear(OUT_BOK)

    concepts = read_pages(CONCEPTS)
    for slug, meta, _ in concepts:
        TITLES[slug] = meta.get("title", slug)

    index, search = [], {}
    for slug, meta, body in concepts:
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

    bok = []
    for slug, meta, body in read_pages(BOK):
        chapter = meta.get("chapter", "reference")
        bok.append(
            {
                "slug": slug,
                "title": meta.get("title", slug),
                "section": str(meta.get("section", "")),
                "chapter": chapter if isinstance(chapter, int) else str(chapter),
                "summary": str(meta.get("summary", "")),
                "tags": meta.get("tags") or [],
                "status": str(meta.get("status", "")),
                "published": str(meta.get("published", "")),
                "modified": str(meta.get("modified", "")),
            }
        )
        search["bok/" + slug] = plain_text(body)
        with open(os.path.join(OUT_BOK, slug + ".md"), "w", encoding="utf8") as fh:
            fh.write(rewrite_links(body))

    index.sort(key=lambda c: c["title"].lower())
    # book order: by section, numbered chapters first, then reference pages by title
    bok.sort(key=lambda b: (b["section"], 0 if isinstance(b["chapter"], int) else 1,
                            b["chapter"] if isinstance(b["chapter"], int) else 0, b["title"].lower()))
    with open(os.path.join(OUT_DATA, "index.json"), "w", encoding="utf8") as fh:
        json.dump(index, fh, ensure_ascii=False)
    with open(os.path.join(OUT_DATA, "bok.json"), "w", encoding="utf8") as fh:
        json.dump(bok, fh, ensure_ascii=False)
    with open(os.path.join(OUT_DATA, "search.json"), "w", encoding="utf8") as fh:
        json.dump(search, fh, ensure_ascii=False)
    print("Built %d concepts and %d BOK pages." % (len(index), len(bok)))


if __name__ == "__main__":
    main()
