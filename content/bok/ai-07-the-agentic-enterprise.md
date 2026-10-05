## Summary

An AI agent is software that pursues a goal on its own by planning, using tools and adjusting to feedback, instead of only answering questions. This chapter explains what agents are, why most enterprises still see little earnings impact from them and how value appears when processes are rebuilt around agents. It also covers the platform an enterprise needs to run many agents, the shared business meaning that agents need in order to reason correctly and the new market for software that automates work between systems. Finally, it looks at how agents change the contest between startups and established firms, how they change decisions and the new questions they raise for the web.

## Key Ideas

- An agent differs from a chatbot because it makes decisions and acts toward a goal, following a loop of goal, plan, action and feedback.
- More than 78 percent of companies use generative AI in at least one function, yet more than 80 percent report no material earnings contribution.
- Value comes from reinventing end-to-end processes around agents, not from attaching them to old steps.
- Enterprises need a platform of interchangeable parts, open protocols and a control layer, so that agents can scale without building up a new technology legacy.
- Agents fail to scale when company data lacks shared meaning, a problem BCG Platinion calls semantic debt.
- Bain estimates that agents could take over work worth about $100 billion a year in US spending, much of it moving information between business systems.
- Startups can now be built faster and cheaper, while incumbents keep advantages in trust, compliance and ownership of the system of record.

## The Agentic Enterprise

### What an agent is

A chatbot answers a prompt. An agent works toward a goal. Agentic systems make decisions, act to reach a stated goal and can carry out long sequences of steps. They follow a four-step loop. The user gives the system a goal. The system plans, breaking the goal into subtasks that it gives to specialized sub-agents. The agents carry out the subtasks with tools. Finally, they adjust based on feedback.

Because agents are built on foundation models and not on hand-written rules, they can handle situations that their designers did not anticipate, and people can direct them in natural language. The sources describe five types, from copilots that help a single user, through platforms that orchestrate existing multi-step processes, to domain solutions built for a purpose. A spring 2025 survey by MIT Sloan and BCG found that 35 percent of respondents had adopted agents and another 44 percent planned to. Success depends less on the model than on clear goals, the right team and someone accountable for what the agent does. See [Agentic AI Fundamentals](#/concept/agentic-ai-fundamentals).

### The paradox of wide adoption and small results

McKinsey calls the gap between use and results the generative AI paradox. More than 78 percent of companies use generative AI in at least one function, but more than 80 percent report no material earnings contribution. The reason is that copilots, which assist an individual, scale quickly but spread their gains thinly. Fewer than 10 percent of use cases built for a specific business function move beyond the pilot stage. Six factors hold these use cases back. They include scattered bottom-up projects, CEO sponsorship at fewer than 30 percent of companies and siloed centers of excellence.

The call-center example shows the difference. Assistance gives gains of 5 to 10 percent. Adding agents to individual steps saves 20 to 40 percent of time. Redesigning the process with humans supervising the agents allows up to 80 percent of cases to be resolved autonomously. Early implementations report 40 to 50 percent faster IT modernization at more than 40 percent lower cost. At one bank, an agent factory of 100 agents supervised by five people cut time and labor costs by more than half.

The main barriers are organizational. They include trust in high-stakes uses, readiness for change, coordination across vendors and agent sprawl. Walmart, for example, consolidated dozens of agents into four super agents. See [Agentic AI Enterprise Transformation](#/concept/agentic-ai-enterprise-transformation).

### The platform

Agents differ from earlier automation because they complete complex, multi-step work from start to finish, and most current architectures cannot yet support thousands of them. The sources converge on a platform made of interchangeable parts that can be swapped without a redesign. McKinsey QuantumBlack calls this approach composable, because the platform is assembled from modular building blocks. It also recommends a rule for sourcing. A company buys where mature products exist, partners where a capability will soon become a commodity, and builds only where it needs differentiation or control.

Two open protocols lead. MCP, the Model Context Protocol, gives agents secure access to tools and data. A2A, the Agent2Agent protocol, lets agents from different vendors coordinate. More than 20 protocols compete, and there is no consensus on which will dominate. Fewer than 10 percent of organizations experimenting with agents are scaling them, usually because production needs were an afterthought. The remedy is to build four capabilities from the start. They are evaluation of agents, marketplaces of reusable components, structured memory and continuous feedback. Around all this sits a control layer of rules, audit trails, context and quality checks. See [Agentic AI Platform Architecture](#/concept/agentic-ai-platform-architecture).

### Shared meaning for data

BCG Platinion explains why agents stall after the pilot. The cause is rarely a lack of models. The same term, such as customer or revenue, has several valid but conflicting definitions across systems. The firm calls this semantic debt. MIT CISR found that only 21 percent of 349 surveyed executives rated their data curation practices as well developed.

The remedy is a semantic layer that machines can read. It has three levels. The first is standard definitions, with each entity defined once and reused everywhere. The second is ontologies, which model how entities relate, such as customers to products. The third is knowledge graphs. Retrieval-augmented generation alone is not enough, because documents do not encode business logic, and two agents that retrieve different pieces can produce contradictory results. See [Semantic Layer for Agentic AI](#/concept/semantic-layer-for-agentic-ai).

### Automating work between business systems

Much office work consists of moving information between business systems. For example, an employee pulls figures from an enterprise resource planning (ERP) system, checks them against a spreadsheet, reads a free-text reply and decides when to escalate a problem. Bain estimates that agents could take over work worth about $100 billion a year in US spending.

Six factors decide how much of a workflow can be automated. The first is how easily the output can be verified. The others are how severe the consequences of failure are, how much of the knowledge is digitized, how complex the integration is, how variable the process is and how much depends on the physical world. The automatable share ranges from 40 to 60 percent in customer support and R&D down to 20 to 30 percent in legal work, where errors have severe consequences.

Agents that operate a computer like a person already run in production on narrow, rule-following tasks, such as entering data into supplier portals. The venture firm a16z estimates that an agent hour costs about $6 to $8, which is close to the cost of offshore outsourcing at about $10 an hour. Because companies will pay software vendors for work that people now do, agents open a new market for those vendors and do not only threaten their existing products. Advantage will come less from the model than from knowledge of how work flows across systems, the ability to check that output is correct and the tools that handle errors and escalation. See [Agentic Workflow Automation Opportunity](#/concept/agentic-workflow-automation-opportunity).

### Startups and incumbents

Agentic AI cuts the cost and time needed to build a company. HBR describes a second great compression of entrepreneurship, meaning that starting a company now takes far less money and time. It names five forces behind this, including instant iteration and radical capital efficiency. One venture studio's AI-native startups reached a Series A funding round on 80 percent less capital and 20 to 40 percent less time than its earlier companies. Established companies are slowed by organizational structures, data and workflows built for stability. If their data is siloed and their workflows undocumented, agents reproduce existing flaws faster.

Incumbents keep real advantages in customer trust, compliance, specialized talent and ownership of the system of record. The venture firm a16z argues that the customer's job is bigger than any one system's record. That leaves room for specialized startups to rebuild a product around the full job across systems. See [Agentic AI Startups vs Incumbents](#/concept/agentic-ai-startups-vs-incumbents).

### Decisions and decision rights

Intelligent choice architectures are AI systems that produce and refine a set of decision options for people, instead of a single answer. The idea extends choice architecture from behavioral economics, which means deliberately organizing the context in which people decide. Organizations that generate sets of options achieve better outcomes than those that rely on one recommendation. As these systems become semi-autonomous, a dilemma appears. The system's demonstrated ability can exceed the formal decision rights it holds. Leaders then have to redesign decision rights and accountability, and the question changes from who should decide to who designs and governs the systems that generate choices. See [Intelligent Choice Architectures](#/concept/intelligent-choice-architectures).

### Agents and the open web

Agents also raise a question for the open web. Perplexity argues that an assistant fetches a page only when a user asks for it, while a crawler visits pages systematically whether or not anyone asked. If infrastructure providers cannot tell a helpful assistant from a malicious scraper, the result could be a two-tiered internet controlled by a few companies. See [AI Agents vs Web Crawlers](#/concept/ai-agents-vs-crawlers).

## Go Deeper

- [Agentic AI Fundamentals](#/concept/agentic-ai-fundamentals) — Definitions, agent types and the four-step loop.
- [Agentic AI Enterprise Transformation](#/concept/agentic-ai-enterprise-transformation) — The gen AI paradox and how to reinvent processes.
- [Agentic AI Platform Architecture](#/concept/agentic-ai-platform-architecture) — Composable architecture, protocols and control layers.
- [Semantic Layer for Agentic AI](#/concept/semantic-layer-for-agentic-ai) — Semantic debt and the layers of shared meaning.
- [Agentic Workflow Automation Opportunity](#/concept/agentic-workflow-automation-opportunity) — The market for coordination work between systems.
- [Agentic AI Startups vs Incumbents](#/concept/agentic-ai-startups-vs-incumbents) — How agents change competition between new and established firms.
- [Intelligent Choice Architectures](#/concept/intelligent-choice-architectures) — AI-generated options and decision rights.
- [AI Agents vs Web Crawlers](#/concept/ai-agents-vs-crawlers) — User-driven assistants versus web crawlers.
