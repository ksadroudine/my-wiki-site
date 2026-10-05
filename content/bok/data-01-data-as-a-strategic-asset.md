## Summary

Enterprise data strategy treats data as an asset that must be managed with the same discipline as any other valuable resource. This chapter explains why accountability for a dataset should be separated from ownership, why simply collecting more data is not a strategy and how companies can place a value on data even when accountants do not. It also covers how to start a data strategy small, around the most critical business needs, and how organizations typically progress from scattered efforts to a coordinated program led by senior executives.

## Key Ideas

- Data deserves the discipline applied to other significant assets, and investment in it should be justified against a business need.
- Preparing data for analysis takes 50 to 80 percent of an analyst's time, so careful stewardship is usually the larger part of analytics work.
- Accountability for a dataset's quality and use should be separated from ownership, which belongs at the enterprise level and not with the department that happens to generate the data.
- Collecting and hoarding raw data is not a strategy. The best data organizations are distinguished by getting governance right and treating information as an asset in practice.
- Data is rarely valued on the balance sheet, but an internal value, such as a data balance sheet, supports accountability and justifies spending.
- A strategy should start with a small number of domains that serve critical needs, under an executive who understands data.

## Data as a Strategic Asset

### Treating data like an asset

Data usually accumulates as a by-product of business processes. The book Modern Data Strategy argues that it deserves the discipline applied to any other significant asset, such as a fleet of trucks or a real-estate portfolio. A company would weigh a new physical asset against a specific business need, and investment in data should be justified the same way.

This takes dedicated roles and formal practices. The most visible role is the Chief Data Officer, whose seniority gives real authority across departments and not only within IT. The practices are called management domains. They are data quality, governance, architecture, warehousing, master data management, interoperability, privacy and security. Each is treated as a discipline with its own standards and certifications.

The work is mostly unglamorous. Preparing data for analysis, often called wrangling or munging, commonly takes 50 to 80 percent of an analyst's time. See [Enterprise Data Strategy and Governance](#/concept/enterprise-data-strategy-and-governance).

### Accountability and ownership

A common failure appeared when business units behaved as though they owned the data in their own systems. That was rational for each unit's efficiency and competitive position, but it fragmented and duplicated data across the enterprise and made enterprise-wide management hard.

The remedy is to separate two ideas. Data accountability means who answers for a dataset's quality, security and appropriate use. Ownership of the data, in contrast, should sit at the enterprise level and not with whichever department generates or first uses it. A data steward is accountable for a data domain across its entire life cycle and across business processes, and not for a single application. The steward is the go-to person for questions about the data and escalates issues to a governance council.

### Why more data is not a strategy

Big data is defined by three features. Volume is the amount of data. Variety is the mix of structured and unstructured formats. Velocity is the speed at which data changes. When all three are severe, conventional data management cannot cope.

This pressure moved the design of data pipelines from ETL to ELT. In ETL, data is transformed to fit its target before it is loaded. In ELT, raw data is loaded first and transformed only when an analysis needs it. Organizations wanted to keep as much raw data as possible, to preserve the option of using it later.

Hoarding raw data is not a strategy, though. A frequently cited reason for failure in large-scale data projects is not a shortage of new data but an inability to manage the data already held. Research on elite data organizations found that their two most consistent practices were getting governance genuinely right and treating information as a valuable asset in practice, and not only in mission statements.

### Putting a value on data

Whether data should be valued and carried on the balance sheet remains unresolved. Most organizations do not estimate data value with the cost, market-value or revenue approaches used for other intangible assets. Part of the reason is financial. Treating data costs as an expense and not as a capitalized asset keeps data off the balance sheet, which has tax implications.

The book still sees practical reasons to value data internally. A value gives greater accountability for quality and use, a basis for measuring how well IT performs and a stronger case for spending on information systems. It proposes starting with an internal data balance sheet, which tracks the value of data assets without settling the formal accounting question. The candidate approaches include cost, for example the price of third-party data, fair market value, future revenue and indirect measures such as the cost of poor quality, of regulatory non-compliance or of failing to adapt to demand.

Inventory management offers a useful analogy. Fleckenstein and Fellows map it onto data management along four dimensions.

- **Cost.** Ordering and holding costs correspond to the cost of obtaining, loading, licensing and administering data. Losses from poor quality correspond to wastage.
- **Types.** Raw data resembles raw material, cleansed data resembles finished goods and partially cleansed data resembles work in progress. Profiling, cleansing and metadata resemble spare parts.
- **Stewardship.** A data steward manages a domain as an inventory manager manages stock.
- **Obsolescence.** Moving data among online storage, near-line storage and archives, so that searching and reporting stay efficient, corresponds to reclaiming warehouse space.

The analogy does not give data an explicit value. It approximates the value through the resources needed to manage the data.

### Starting a data strategy

Execution follows a maturity path. Organizations usually progress through grassroots and IT-led efforts until business and IT must collaborate under an overarching data strategy. The strategy advances data maturity, coordinates existing projects and supports business goals. Ideally, an executive who understands data drives it, supported by a team that includes data specialists as well as people who know the processes and the technology.

Implementation should begin with a small, coordinated set of domains that serve the most critical business needs, and it should use the existing infrastructure. Informal initiatives, such as stewardship, can be formalized. An all-inclusive strategy is costly, hard to focus and prone to failure compared with an incremental one.

## Go Deeper

- [Enterprise Data Strategy and Governance](#/concept/enterprise-data-strategy-and-governance) — The asset view of data, accountability, valuation, quality, monetization and data risk in depth.
