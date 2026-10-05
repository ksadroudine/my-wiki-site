## Summary

Data is only useful when it is accurate, understood in the same way by everyone and protected from harm. This chapter explains why most organizations get stuck correcting data errors after the fact, how preventing errors at the source works instead and how HelloFresh made that change. It also covers the questions managers should ask about the data behind an AI model, the shared business meaning that AI agents need in order to reason correctly and the five kinds of data risk that no single executive sees whole.

## Key Ideas

- Most organizations are stuck in one of two modes. Either each department fixes errors on its own, or a central team cleans up after the fact, and neither mode prevents the errors.
- The breakthrough is prevention, in which people see themselves as both creators and customers of data and stop errors at the source.
- Managers can challenge AI developers about data by asking whether the data is the right data, and a test on a holdout sample of the training data does not prove that a model will work on future data.
- AI agents stall when the same business term has different definitions in different systems, a problem called semantic debt.
- Data risk covers quality, protection, loss, compliance and exposure, and it is hidden because each senior executive sees only a slice.

## Data Quality, Meaning and Risk

### Two ways to get stuck

Research from MIT Sloan Management Review finds that most organizations fall into one of two modes. In the first, called unmanaged, data moves like a daisy chain. Each department uses data for its own job and creates new data for the next group. People see themselves through functional roles, such as salesperson or market researcher, and not as participants in a shared system. Errors are corrected individually, with difficulty, or missed and then compounded downstream.

The second mode is organized cleanup. A central team with tools finds and fixes errors faster and more cheaply. The gains are modest, because fixing errors correctly needs business context that a central team lacks, and so the organization stays stuck in endless reactive repair.

The breakthrough is proactive prevention. It is a change of mindset in which people see themselves as both data creators and data customers. Customers clarify their requirements, and both sides measure the data against them. Creators run improvement projects and add controls that stop errors at the source. At scale this needs a core team that coordinates the program, trains creators and customers, maintains shared dashboards and informs senior management. It also needs connector roles that go by titles such as embedded data manager, data product manager, data ambassador or quality champion.

### How HelloFresh made the change

HelloFresh's journey was neither quick nor straight. As a fast-growing startup it stayed in the unmanaged mode too long. It then moved to cleanup under a central engineering team that did not understand how teams used the data. The international operations business intelligence team, whose weekly global report to senior executives suffered from inconsistent data, broke through first. It built a quality framework around data contracts, which are agreements that set quality standards, and local teams took on the creator's responsibility. The gains, however, stayed inside that team.

A companywide survey in 2020 then made the scale visible. In it, 61 percent of respondents reported unreliable data, 53 percent reported incorrect data and nearly 84 percent relied on manual workarounds. The chief executive stepped in. The company formed a data quality working group to define creator and customer roles and standard processes, launched a data literacy program and moved to a data mesh architecture, in which the teams that create data are responsible for its quality. It hired its first vice president of data and later placed data product owners and engineers inside business domains. Its self-service platform now loads data in minutes and not months, with quality, governance and monitoring built in.

The lesson is that better tools or a dedicated team were not enough. The change was organizational. It centered on the relationship between creators and customers, and accountability for quality moved into the business. See [Enterprise Data Strategy and Governance](#/concept/enterprise-data-strategy-and-governance).

### The right data for AI models

The same prevention logic applies to the data behind AI models. The authors Hoerl and Redman observe that data-science training concentrates on the mechanics of machine learning, and not on its limitations. Data scientists, like model builders, tend to fall in love with their models, while the data gets little attention. Senior managers decide whether and how widely to deploy a model, so closing this gap is a management responsibility, even though most managers lack technical backgrounds.

Their Right Data framework has five elements. The first is the problem and the population of interest, which are defined clearly before any data work begins. The second is the right data, which is a concept and not a dataset. It is judged against six criteria.

- It is relevant and complete.
- It is comprehensive and adequately represents the population.
- It is free of bias.
- It is timely.
- Its terms and units are clearly defined.
- It excludes what should be excluded for legal, regulatory, ethical or intellectual-property reasons.

The other three elements are the training data actually used, the resulting model and the future data that the model will meet after deployment. Future data often differs from the training data and erodes performance. A large gap between the right data and the actual data at any of these stages signals risk.

Managers can walk developers through six questions across three phases. At problem definition, they ask how and where the model will be used and how the developers will obtain data that meets the criteria. During development, they ask what gaps exist between the training data and the criteria and how future data will be checked. Around deployment, they ask what controls will detect drift in the data or the model, and what the three most likely failure modes are, with plans to reduce them.

The authors criticize the common practice of validating a model on a holdout set cut from the same training data, as on the Kaggle platform. A holdout set resembles the training data in every way that matters, so it is no substitute for testing on real future data. Amazon's facial recognition system, trained on data from one area but deployed far more widely, is the standard example of the poor calibration that results.

### Giving data a shared meaning

AI agents often fail to scale. The cause is less a lack of model intelligence than a lack of shared meaning in enterprise data. The same term, such as customer or revenue, can have valid but different definitions in different systems. BCG Platinion calls this semantic debt. MIT CISR found that only 21 percent of 349 surveyed executives rated their data curation practices as well developed, and those with more developed practices were three times more likely to report effective AI initiatives that create value.

The remedy is a semantic layer that machines can read. It has three levels. The first is standard definitions, with each entity defined once and reused everywhere. The second is ontologies, which model how entities relate, such as customers to products. The third is knowledge graphs, which store those relationships so that agents can reason across them. Retrieval-augmented generation alone does not solve the problem, because documents do not carry business logic, and two agents that retrieve different pieces can reach contradictory answers.

Healthcare IQ shows the approach in practice. It built a semantic layer from data dictionaries, taxonomies and ontologies for nearly 6 million medical products from more than 25,000 manufacturers. Data must also arrive fresh. An agent that reacts to a network fault reported 30 minutes ago is already too slow, so the layer needs real-time data streaming, process monitoring and governance beneath it. See [Semantic Layer for Agentic AI](#/concept/semantic-layer-for-agentic-ai).

### Data risk

PwC likens the usual view of an organization's data to looking at the night sky through a straw, which shows one piece at a time and never a complete picture. The fragmentation is structural, because each senior executive has a different legitimate concern.

- The chief data officer focuses on governance and quality.
- The chief financial officer focuses on how reliable data is for planning.
- The chief risk officer focuses on the integrity of data for risk reporting.
- The chief information security officer focuses on classification, encryption and loss prevention.
- The chief compliance officer focuses on privacy and on coordinating compliance across departments.

None of these views gives enterprise-wide visibility. Data therefore ends up at a dead end between functions, which can quietly undermine migrations of old systems, slow the adoption of AI and erode the trust of regulators and consumers. In a 2025 PwC survey, 48 percent of executives said they would put data protection and trust ahead of technology modernization in the coming year, yet many still treat data risk as an IT problem.

PwC proposes five steps to turn this into an enterprise discipline.

1. **Define data risk.** Data risk covers quality, protection, loss, compliance and exposure.
2. **Seek overall visibility.** This means a record of the data across its entire life cycle, because each function keeps its own tools and logs and reads them differently.
3. **Work together.** Privacy, data, security, risk and technology teams identify, document and measure risk jointly, with training and external validation.
4. **Ask role-specific questions.** For example, the chief financial officer asks whether data used in financial decisions is reliable and how its quality is measured. The security chief asks whether the location and sensitivity of data are known across on-premises and cloud environments.
5. **Treat risk as part of innovation.** Discovery, cataloging and tracing the origin of data are prerequisites for meeting deletion obligations and for handling unstructured data. This requires accountability across departments, extended to third parties. See [Enterprise Data Strategy and Governance](#/concept/enterprise-data-strategy-and-governance).

## Go Deeper

- [Enterprise Data Strategy and Governance](#/concept/enterprise-data-strategy-and-governance) — Data quality modes, HelloFresh, the Right Data framework and PwC's data risk steps.
- [Semantic Layer for Agentic AI](#/concept/semantic-layer-for-agentic-ai) — Semantic debt, ontologies, knowledge graphs and real-time data foundations for agents.
