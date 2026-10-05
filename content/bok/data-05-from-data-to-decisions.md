## Summary

Data only creates value when it changes a decision. This chapter explains what data mining is, the four kinds of tasks it handles and the standard project process called CRISP-DM. It covers the choices that decide what a learning algorithm can find, how to avoid overfitting, why removing names does not make data anonymous and how business analytics differs from business intelligence. It then shows, through Google's experience, why even a sound model fails to move executives unless it is built around how they decide, using a four-layer framework of data, analytics, decision and narrative.

## Key Ideas

- Data mining finds patterns that are meaningful because they predict accurately on new data, and machine learning provides the techniques.
- Most data mining tasks fall into four types, which are classification, association, clustering and numeric prediction.
- A data mining project follows six phases, and later findings often send the team back to an earlier phase, most often to reconsider the business objective.
- Removing obvious identifiers does not make data anonymous. More than 85 percent of Americans can be identified from only a ZIP code, a birthdate and sex.
- Analytics differs from business intelligence because it aims at decisions about what to do next, and every program should start from a specific business objective.
- Models gain traction with executives when they are built around how decisions are made, with consistent definitions, explainable drivers, real-world limits and a narrative that leads with the decision.

## From Data to Decisions

### What data mining is

Data mining is the process of finding patterns in data. A pattern counts as meaningful if it predicts accurately on new data. The search is automatic or partly automatic, and machine learning supplies the techniques.

A pattern can be expressed in two ways. A black box is accurate but cannot be interpreted. A structural description, such as a decision tree or a set of rules, can be examined and used directly to inform decisions. In most practical applications, the insight gained from a structural description is as valuable as the accuracy of the predictions. See [Data Mining Fundamentals](#/concept/data-mining-fundamentals).

### Four kinds of task

Four kinds of learning task cover most applications.

- **Classification** predicts a known category from labeled examples, such as whether a transaction is fraudulent.
- **Association** finds strong relationships among attributes, which are the recorded characteristics of each example, and not only those that predict one chosen category.
- **Clustering** groups examples that naturally belong together, with no predefined labels.
- **Numeric prediction** predicts a continuous quantity, such as a sales figure, and not a category.

### The project process

The CRISP-DM process, short for Cross-Industry Standard Process for Data Mining, structures a project in six phases. They are business understanding, data understanding, data preparation, modeling, evaluation and deployment. Insights gained in a later phase routinely send the team back to an earlier one. The most common return is to reconsider the business objective itself, once the real limits of the available data become clear.

### The choices behind every algorithm

Any machine learning system rests on three kinds of deliberate constraint, called biases. Here the word means a built-in preference and does not mean unfairness. These constraints make an otherwise endless search among possible descriptions manageable.

- **Language bias** is the choice of the language used to describe patterns, and whether it is universal or constrained.
- **Search bias** is the order in which possible descriptions are searched, for example from general to specific or the reverse.
- **Overfitting-avoidance bias** is the choice of when a description is complex enough and pruning, which means cutting a description back, should stop.

Overfitting occurs when a model fits its training data more closely than it fits new data. It can be controlled in two ways. Forward pruning stops the search before a description becomes too complex. Backward pruning first finds a complex, well-fitting description and then simplifies it.

### Anonymization is largely an illusion

Removing obvious identifiers from a dataset does not make it anonymous. More than 85 percent of Americans can be uniquely identified from only a five-digit ZIP code, a birthdate and sex. Removing enough information to guarantee anonymity usually leaves a dataset with little analytical value.

### Analytics and business intelligence

Business intelligence describes what has happened. Analytics is oriented toward decisions about what to do next. A data mining or analytics program should always be scoped against a specific business objective before any technical work begins. Without one, the same technique tends to surface patterns that are spurious or cannot be acted on.

### Why sound models fail with executives

A Google team that supports small and medium business customers built a sophisticated model to forecast staffing needs in more than 100 countries. It handled seasonality, geography and customer prioritization. Senior stakeholders showed little enthusiasm, and the business decision stalled, because the presentation lacked practical business framing. The lesson is that analytics must be built for how decisions are made, and not only for how data is analyzed.

The team developed a four-layer framework of data, analytics, decision and narrative. It works as a pyramid in which each layer builds on the one below, and each layer targets a specific source of executive disengagement. Storytelling is not treated as a communication problem to fix at the end.

1. **Data.** Inconsistent definitions silently corrupt analysis. Different teams counted a customer meeting so differently, from a brief email to an all-day conference, that reported meeting counts varied by more than a factor of two across regions. The team agreed and enforced a single cross-functional definition.
2. **Analytics.** Executives value explainability and practical relevance more than technical sophistication. The team built an interactive model with transparent, adjustable key drivers, such as meeting frequency, meeting length and available representative time. It recalculated staffing needs in real time and showed which drivers caused a result to change.
3. **Decision.** Outputs must respect real-world constraints, such as country-specific labor laws that require native-speaker representatives. The team did not build every legal and operational limit into the model. It labeled which levers were actually feasible, which moved the discussion from questioning the model to optimizing within known boundaries.
4. **Narrative.** Storytelling was built into the structure of the analysis from the start. Presentations opened with the business context and the decision at stake, such as the effect of a 10 percent efficiency gain, before moving to the supporting technical detail. This reverses the usual order.

The framework has since been applied to sales strategy, business planning and executive decision support at Google, and cross-functional teams in the company's finance and marketing organizations have adopted it. See [Analytics Storytelling for Executive Decisions](#/concept/analytics-storytelling-for-executive-decisions).

## Go Deeper

- [Data Mining Fundamentals](#/concept/data-mining-fundamentals) — Learning tasks, CRISP-DM, biases, overfitting and anonymization in depth.
- [Analytics Storytelling for Executive Decisions](#/concept/analytics-storytelling-for-executive-decisions) — Google's four-layer framework for making analytics persuasive.
- [Matching AI Type to Decision Type](#/concept/matching-ai-type-to-decision-type) — Choosing between analytical and generative AI for a decision.
