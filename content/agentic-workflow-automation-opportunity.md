## Summary

Bain sizes a new US software market of about $100 billion in converting cross-system coordination labor into software spending, and a16z reports computer-using agents now work in production on narrow back-office tasks. Both argue that durable advantage lies in workflow context, verification and harness design rather than in the model.

## Highlights

- Bain estimates agentic AI can address about $100 billion of US spending (roughly double that with Canada, Europe, Australia and New Zealand) by automating coordination work between systems such as ERP, CRM, billing and support that rules-based automation cannot handle, with vendors capturing only $4-6 billion so far. <span class="src">The $100-Billion SaaS Opportunity Hiding in Cross-System Labor</span>
- Six factors determine how automatable a workflow is — output verifiability, consequence of failure, digitized knowledge availability, integration complexity, process variability and physical-world dependency — and Bain finds undocumented tacit knowledge is almost always the binding constraint. <span class="src">The $100-Billion SaaS Opportunity Hiding in Cross-System Labor</span>
- Automatable share ranges from 40-60% in customer support and R&D to 35-45% in finance and HR, 30-40% in sales and IT, and 20-30% in legal, where error consequences are severe. <span class="src">The $100-Billion SaaS Opportunity Hiding in Cross-System Labor</span>
- The new competitive advantage is cross-workflow decision context rather than system-of-record ownership, and the natural pricing unit shifts from seats to outcomes and usage. <span class="src">The $100-Billion SaaS Opportunity Hiding in Cross-System Labor</span>
- On the OSWorld-Verified desktop benchmark, the best computer-use model scored 85% in June 2026 against about 42% a year earlier and roughly 72% for humans, and a16z reports production deployments on standardized tasks such as portal data entry, ticket processing and self-healing scrapers. <span class="src">Can Agents Use a Computer Yet We've Got the Data</span>
- A16z estimates an agent hour costs about $6-8 (range $3-15), roughly break-even with offshore business-process outsourcing at about $10 per hour and a 70-80% gross margin against US back-office labor at $30-45, though agents remain slower than people (eight to ten minutes for a two-to-three minute task). <span class="src">Can Agents Use a Computer Yet We've Got the Data</span>

## Concept

Bain frames agentic AI as less a threat to software-as-a-service than an expansion of it: the opportunity is in the expensive human labor that connects systems of record, where employees pull budget data from an ERP, check inventory in spreadsheets, interpret free-text replies and decide when to escalate. Agents can interpret scattered inputs, reason about context and act within policy guardrails, which converts labor cost into software spend. Companies can grow either by automating their core workflows (risking seat cannibalization but often earning more by delivering whole jobs) or by automating adjacent workflows that their observational data uniquely enables, as GitHub extended source-control data into Copilot and security scanning. Bain's three-phase playbook is to assess automatable workflows at subprocess level, decide where to play based on data assets, and execute through build-buy-partner choices, organizational change including outcome pricing, and agent-native data models that capture decisions and outcomes. AI-native entrants show the speed of the window, with Cursor moving from $100 million to $2 billion in annual recurring revenue in 14 months. <span class="src">The $100-Billion SaaS Opportunity Hiding in Cross-System Labor</span>

The a16z analysis supplies production-level evidence for the same shift from the builder side. Models crossed from demo to deployable around February 2026, and buyers now evaluate the infrastructure around the model, such as verification, escalation, error handling when a portal's layout changes, permissions and security review, rather than the model itself. Computer-using agents work best on protocol-following tasks with machine-observable evidence of success, such as a CPG data platform running 15-20 million portal interactions a month with agents as a self-healing fallback for hand-coded scrapers (halving its scraper-maintenance team) and a systems integrator running 27 live workflows over 1,500-2,100 IT tickets a day. They fail where outputs cannot be cross-checked (a contract term misread as "net 30" instead of "net 60") or where success signals arrive days later. A common design runs the agent once, caches the workflow as deterministic code, and calls the model back only when something breaks, so per-run cost falls over time. The durable moat is context, meaning runbooks, tribal knowledge, escalation paths and guardrails specific to one company, which a16z expects focused application-layer startups to capture rather than model providers. <span class="src">Can Agents Use a Computer Yet We've Got the Data</span>

## Related

- [ai disruption of saas business models](#/concept/ai-disruption-of-saas-business-models) — the seat-based subscription threat there is the other side of the labor-to-software conversion Bain describes here
- [agentic ai startups vs incumbents](#/concept/agentic-ai-startups-vs-incumbents) — the argument there that a general-purpose agent cannot reconstruct a full cross-system job matches Bain's cross-workflow context thesis
- [ai customer service agents](#/concept/ai-customer-service-agents) — customer support is one of the highest-automation functions in Bain's sizing, and Sierra is cited here as an example
- [semantic layer for agentic ai](#/concept/semantic-layer-for-agentic-ai) — the digitized contextual knowledge both sources call the binding constraint is the problem a semantic layer addresses
- [enterprise ai token cost management](#/concept/enterprise-ai-token-cost-management) — harness design and cache-to-code patterns affect the token economics managed there

## Open Questions

- Bain's $100 billion market size and automation percentages are consulting estimates built from US Census labor data, with no independent validation provided.
- The a16z cost comparison rests on a founder estimate and cross-checked public prices, and the authors present it as an order of magnitude rather than a measured result.
- The a16z report draws on conversations with a limited set of production users and does not report failure rates or total cost of ownership including monitoring and escalation.
- The sources do not reconcile Bain's view that incumbents with deep context can win with a16z's expectation that application-layer startups will.

## Sources

- <span class="src">The $100-Billion SaaS Opportunity Hiding in Cross-System Labor</span> — Bain & Company, 2026-09-29; market sizing, six automatability factors and a three-phase playbook.
- <span class="src">Can Agents Use a Computer Yet We've Got the Data</span> — a16z, 2026-08-10; benchmark progress, production use cases and unit economics of computer-use agents.
