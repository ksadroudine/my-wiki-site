## Summary

A pattern for using an LLM to compile, maintain, query, and lint a personal markdown wiki from raw source material, viewed in Obsidian.

## Highlights

- The pattern indexes raw source documents (articles, papers, repos, datasets, images) into a `raw/` directory, then has an LLM incrementally "compile" a separate wiki of linked, categorized markdown articles from that raw material. <span class="src">LLM Knowledge Bases</span>
- Obsidian is used purely as a viewing and editing frontend for both the raw data and the compiled wiki; the LLM writes and maintains the wiki's content, and the human rarely edits it directly. <span class="src">LLM Knowledge Bases</span>
- Once the wiki reaches sufficient scale (the source author cites roughly 100 articles and 400K words on one topic), an LLM agent can answer complex questions against it without needing a dedicated retrieval-augmented-generation (RAG) system, because the LLM can maintain its own index files and summaries and read the relevant documents directly. <span class="src">LLM Knowledge Bases</span>
- Query answers and other outputs are rendered as markdown, slides, or images and can be "filed back" into the wiki, so that querying the knowledge base also grows it. <span class="src">LLM Knowledge Bases</span>
- Periodic LLM-driven "health checks" (linting) can find inconsistent data, fill gaps using web search, and surface candidate topics for new articles, incrementally improving the wiki's integrity over time. <span class="src">LLM Knowledge Bases</span>

## Concept

This is a workflow for building a personal knowledge base in which a large language model, rather than the human, does the writing and maintenance. Source material — articles, papers, repositories, datasets, and images — is first collected into a raw, immutable directory. An LLM then incrementally "compiles" this raw material into a wiki: a directory of markdown files that summarize the source data, categorize it into concepts, write encyclopedia-style articles for those concepts, and link the articles together with backlinks. Obsidian serves only as the human-facing IDE for viewing raw files, the compiled wiki, and any derived visualizations; the wiki's content itself is treated as the LLM's domain, with the human rarely editing it by hand. <span class="src">LLM Knowledge Bases</span>

The approach becomes particularly useful once the wiki reaches a meaningful scale — one described example reached roughly 100 articles and 400,000 words on a research topic. At that scale, an LLM agent can be asked complex questions against the wiki and will research the answer using the wiki's own contents, without requiring a dedicated retrieval-augmented-generation (RAG) pipeline: the LLM has been shown to auto-maintain index files and brief per-document summaries well enough to locate and read the relevant material directly. Query outputs are not limited to plain text — they can be rendered as markdown files, slide decks, or generated images, viewed back in Obsidian — and are often "filed" back into the wiki itself, so that the act of querying the knowledge base also extends it. <span class="src">LLM Knowledge Bases</span>

Maintenance is handled through periodic LLM-run "health checks" (linting) that look for inconsistent data, impute missing data using web search, and surface interesting connections as candidates for new articles, incrementally cleaning up the wiki and improving its overall data integrity. The author also describes building supplementary tooling around the wiki — for example, a lightweight custom search engine — that can be handed to an LLM as a callable tool for larger queries via a command-line interface. Looking further ahead, the pattern suggests a natural extension toward synthetic data generation and fine-tuning, so that an LLM eventually "knows" the wiki's content in its model weights rather than only through its context window at query time. <span class="src">LLM Knowledge Bases</span>

## Related

(No related Concepts yet — this file is the first in the vault to describe knowledge-management tooling directly.)

## Open Questions

- The source does not detail how the described "naive search engine" was built, nor how well the LLM-driven linting scales past the ~100-article, 400K-word range it reports.

## Sources

- <span class="src">LLM Knowledge Bases</span> — Andrej Karpathy's description of using an LLM to compile, query, and maintain a personal markdown wiki in Obsidian from raw source material.
