# Karim's Knowledge Database site

Static site for the Obsidian wiki: the Book of Knowledge (BOK) and the concepts. Plain HTML, CSS and JavaScript, no build tools needed to view it.

Update the content after the vault changes:

    python3 build.py
    git add -A && git commit -m "Update wiki" && git push

`build.py` reads `02 WIKI/Concepts/` and `02 WIKI/BOK/` from the vault and rewrites `data/` and `content/`.
