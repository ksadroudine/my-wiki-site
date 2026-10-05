## Summary

Generative AI already produces measurable value in a few business functions, and the results differ by function. This chapter walks through software development, customer service, sales, marketing, finance, supply chain and procurement, and research and development. For each one it explains what AI does well today, where human judgment still matters and what slows companies down. The common lesson is that gains come from redesigning the work end to end and not from adding a tool to the existing steps.

## Key Ideas

- Bain finds that most realized value from generative AI sits in five areas, which are software and product development, customer support, sales and marketing, new products and features, and back-office work.
- Companies that capture the most value diagnose the business first, set targets, redesign processes and only then deploy AI tools.
- Software teams write code much faster, but the bottleneck moves to review, testing and approval.
- AI beats human managers at tactical finance tasks, but strategy under uncertainty still needs human judgment.
- Marketing and customer service are changing because AI agents now act for consumers and for companies.
- Research and development is a large untapped area, where AI can generate, test and interpret designs faster.

## Applications by Function

### Where the value appears first

Bain reports that early adopters can already realize gains of up to 20 percent of earnings within 18 to 36 months. The number of large companies investing more than $100 million in AI more than doubled in a single year. Most of the realized value sits in five areas. These are software and product development, customer support, sales and marketing, new products and features, and back-office work.

Bain also finds a pattern among the leaders. They diagnose the business, set targets, redesign processes and only then deploy tools. They also treat AI as a priority set by the chief executive. A 2026 update reports that enterprises that run AI as an executive-sponsored transformation see 10 to 25 percent growth in earnings before interest, taxes, depreciation and amortization (EBITDA). The main limit now is how fast an enterprise can absorb AI. See [AI Value by Business Function](#/concept/ai-value-by-business-function).

### Software development

Some developer organizations save 15 to 40 percent on code generation and documentation, and 30 to 50 percent or more on refactoring, testing and debugging. Yet coding speed alone does not speed up delivery. In one study, AI tools raised GitHub developers' coding activity by up to 180 percent, but produced only 50 percent more projects and 30 percent more releases. Gains fade at each later human step of commit, review, merge and release. Developers finish about 21 percent more tasks, while review time rises roughly 91 percent.

The leaders redesign the end-to-end system. Top teams shrink squads from about ten people to seven, split roles into people who define the work and people who build it, and write specifications precise enough for an agent to act on and a test suite to check. Teams that embedded AI and redesigned roles became top accelerators 40 percent of the time, against 27 percent for teams that only adopted tools. See [Agentic Software and Technology Delivery](#/concept/agentic-software-and-technology-delivery).

Vibe coding goes a step further. The term means building software through plain-language conversation with an AI, without writing the code by hand. Anthropic's Claude Code reached $1 billion in revenue within six months of launch. Small companies already build custom customer-management systems with it, such as one water-treatment company that built its own for $15,000 to $20,000. Analysts see this as an indirect threat to large software vendors, because no complex multinational will drop an entrenched system soon, but a wave of new AI-powered vendors could give customers more bargaining power and pressure established pricing. See [Vibe Coding and AI-Led Development](#/concept/vibe-coding-and-ai-led-development).

### Customer service

AI agents are replacing traditional customer-service software and call centers. Bret Taylor, co-founder of Sierra, argues that every company will need an AI agent, in the way every company needed a website in 1995. Sierra charges only when an agent resolves a customer's problem. This outcome-based pricing replaces the usual software license.

The models are imperfect and do not always give the same answer twice, yet the sources argue that agents can be more consistent than human staff, whose error rates are also high. Risk is managed with defense in depth, a layered approach borrowed from cybersecurity. Supervisor models watch the main agent's decisions in real time for errors and rule violations. A second, more thorough model then reviews the interaction. See [AI Customer Service Agents](#/concept/ai-customer-service-agents).

### Sales

Predictive AI improves the internal management of sales, including territories, quotas, incentives and forecasting. Generative AI helps representatives research a customer before each conversation. Both support a shift from high-volume generic outreach to engagement tailored to the customer. This matters because business buyers increasingly avoid new suppliers. McKinsey found that the share of business buyers wanting in-person contact with new suppliers fell from 50 percent to 35 percent over five years.

A 2023 survey found that 94 percent of executives want AI in their sales programs, but 87 percent have neither tried it nor know how to proceed. The sources name the culture of selling as the main obstacle, because many leaders treat selling as purely relationship-driven. See [AI in Sales](#/concept/ai-in-sales).

### Marketing, personalization and trust

BCG's 2026 survey of about 300 chief marketing officers finds that 96 percent say AI is transforming marketing from end to end. Yet 42 percent still use generative AI only as a task assistant, and few have agents that run entire workflows. The research describes a marketing stack in four layers. These are data, a layer that encodes brand rules and trusted sources, a layer that orchestrates agents and a single interface for marketers. A major shift is discoverability. AI agents now research and compare products for consumers, so a brand is judged on observable facts such as price and availability, and not on its messaging alone. See [Agentic Marketing Transformation](#/concept/agentic-marketing-transformation).

In market research, generative AI shortens work from months to days. It builds synthetic consumer personas, called digital twins, runs AI-moderated interviews at scale and analyzes open-ended answers quickly. In a double-blind study, EY found that synthetic personas reproduced its real brand-survey results closely. The limits are real. Models inherit biases from training data, synthetic answers can lack variation and it is now cheap to produce credible-looking but weak research. See [Generative AI Market Research](#/concept/generative-ai-market-research).

Personalization shows the same pattern. The book Personalized frames it as an advantage that compounds, with value that grows with the number of interactions a company learns from and with the square of its speed of learning. It organizes the work into five promises to the customer, which are to empower, to know, to reach, to show and to delight. Roughly 70 percent of the effort goes to people and organization. Two-thirds of consumers report a recent personalized recommendation that felt inappropriate, inaccurate or invasive. See [Customer Personalization Strategy and Execution](#/concept/customer-personalization-strategy).

Trust is the fragile part. In a panel of AI experts, 84 percent agreed that companies should be required to disclose their use of AI to customers. The disclosure matters most when customers interact directly with an AI system and when AI contributes to consequential decisions in health care, finance or hiring. Research also names five psychological pitfalls that turn an AI failure into outsized brand damage. People blame the AI first, and one failure colors their view of all AI. See [Brand Trust Strategy in the AI Era](#/concept/brand-trust-strategy-in-the-ai-era).

### Finance

A management simulation compared AI with experienced managers on budgeting for a car-parts manufacturer. The AI consistently did better at tactical allocation, because it learned from past performance data. But it optimized narrowly for the indicators it was given. When participants chose indicators poorly aligned with strategy, the AI pursued those flawed targets. Uber's finance function shows the split in practice. AI platforms adjust budgets across more than 600 cities, and local teams override the predictions when they hold market knowledge the model lacks.

Most finance functions remain at the pilot stage. The cause is mainly culture. Finance is built around avoiding surprise and defending numbers, so it resists experiments. Redesigning an entire process such as order-to-cash shows far larger gains than automating its existing steps. See [AI in Corporate Finance](#/concept/ai-in-corporate-finance).

### Supply chain and procurement

Two functions are being automated together. The first is planning. Microsoft uses a language model that lets planners ask plain questions about server supply across more than 300 data centers. The model turns each question into a small change to the existing mathematical model, which is then solved again. Language models therefore work alongside the optimization models instead of replacing them.

The second is supplier negotiation, which companies adopt in three stages. At the assisted stage, AI flags risks and drafts terms while a human sends everything. At the semi-autonomous stage, AI can accept pre-approved clauses. At the third stage, it negotiates fully on its own for routine, low-margin items, as Walmart does. In one case a car maker used a language model to read thousands of supplier contracts and found price reductions worth millions of dollars that its team had overlooked. See [GenAI in Supply Chain and Procurement](#/concept/genai-supply-chain-and-procurement).

### Research and development

R&D productivity has fallen for decades. Sustaining Moore's Law required 18 times more inflation-adjusted research spending in 2014 than in 1971, and drug approvals per dollar are down roughly 80-fold since 1950. McKinsey sees three ways AI can reverse the trend. AI can generate far more design candidates. It can evaluate them faster, using surrogate models, which are neural networks trained to predict the results of slow physics simulations. And it can speed up the interpretation of results.

McKinsey estimates the combined potential at $360 to $560 billion a year. The gains depend on the industry. Industries without physical prototypes, such as software and gaming, could roughly double their research output. The technology alone does not deliver this. Companies also need to move beyond pilots, rewire their organizations and build skills. See [AI-Accelerated R&D](#/concept/ai-accelerated-rd).

## Go Deeper

- [AI Value by Business Function](#/concept/ai-value-by-business-function) — Bain's evidence on where generative AI value concentrates.
- [Agentic Software and Technology Delivery](#/concept/agentic-software-and-technology-delivery) — Why code speed does not equal delivery speed.
- [Vibe Coding and AI-Led Development](#/concept/vibe-coding-and-ai-led-development) — Building software through conversation with an AI.
- [AI Customer Service Agents](#/concept/ai-customer-service-agents) — Agents, outcome-based pricing and layered defenses.
- [AI in Sales](#/concept/ai-in-sales) — Predictive and generative AI in selling.
- [Agentic Marketing Transformation](#/concept/agentic-marketing-transformation) — The marketing stack and discoverability by AI agents.
- [Generative AI Market Research](#/concept/generative-ai-market-research) — Synthetic personas and AI-moderated interviews.
- [Customer Personalization Strategy and Execution](#/concept/customer-personalization-strategy) — The five promises of personalization.
- [Brand Trust Strategy in the AI Era](#/concept/brand-trust-strategy-in-the-ai-era) — Disclosure and the psychology of AI failure.
- [AI in Corporate Finance](#/concept/ai-in-corporate-finance) — Tactical strength and strategic limits of AI in finance.
- [GenAI in Supply Chain and Procurement](#/concept/genai-supply-chain-and-procurement) — Planning and negotiation maturity.
- [AI-Accelerated R&D](#/concept/ai-accelerated-rd) — Faster design, evaluation and interpretation.
