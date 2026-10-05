## Summary

Companies can earn money from their data by selling it, by building it into products or by combining it with partners' data to improve AI. This chapter explains how to monetize data, starting with existing customers and partners, and how to choose between charging directly and building data into existing offerings. It also covers why marketing should join the enterprise data strategy, how Caterpillar showed what chief executive ownership looks like and how federated learning lets organizations train a shared AI model without handing over raw data.

## Key Ideas

- The most successful data monetization starts with existing partners, suppliers and customers, not with data brokers, because they understand the business context that makes the data valuable.
- Data can be sold directly, or it can be built into existing offerings at no extra charge, and it can be packaged as raw data, as insight services or as ready-to-use products.
- Poor-quality data reliably backfires when monetized, so quality is a prerequisite.
- Marketing should take part in the enterprise data strategy and not pursue a marketing-only agenda, and collecting more data does not mean gaining more insight.
- Chief executive ownership made Caterpillar's data platform work, and a solid data foundation then allowed AI to build on it.
- Federated learning trains a shared model by sending the algorithm to the data, so organizations, including competitors, can cooperate without disclosing their records.

## Sharing and Monetizing Data

### Turning data into revenue

Monetization means turning proprietary data into revenue. It is gaining momentum as AI makes analysis easier. Amazon's advertising business, built on customer-interest data, brought in $56 billion in a year. Walmart's online advertising business earns roughly $4 billion. Mastercard and Visa sell insights from transaction data through their advisory divisions.

A Harvard Business Review study of more than 30 organizations and 12 senior executives found that most companies struggle to choose an approach. They often spend a year or two building infrastructure before they decide what to build or who would buy it. The most successful strategies start close to home, with existing partners, suppliers and customers. These groups understand the business context that makes the data valuable, they can buy a new offering as an add-on that scales quickly and they avoid the privacy risk of selling to unaffiliated data brokers. Quick deals with brokers look simple but create less value, and they expose customers and suppliers to the risk of leaks without their involvement.

Privacy, regulatory, reputational and security risk must be managed from the first day. Benchmark data should be aggregated and anonymized, and legal and risk teams should be involved before launch. Monetizing data that is poorly organized, low in quality or incomplete reliably backfires.

### Two choices

The first choice is how to charge. Direct monetization charges customers or partners for data or data-based offerings, usually by subscription. Dunnhumby, which grew out of the retailer Tesco's point-of-sale data, became a standalone analytics business. Indirect monetization builds data into existing offerings at no extra charge. It suits high-margin businesses where differentiation matters more than a new price. Sony Interactive Entertainment, for example, gives PlayStation game creators rich gameplay and marketing data free, so that better-informed creators build better games, which raises engagement on the platform. Indirect monetization lacks a clear profit-and-loss figure, but it can raise the return on data investment. One technology provider found its highest customer retention among customers who used its data offerings.

The second choice is packaging, in three tiers of rising pricing power and required investment.

- **Raw data** is the simplest for the seller, but it leaves the work of extracting value to the buyer. It suits buyers with strong analytics skills, such as data brokers and technology companies.
- **Insight services** provide custom analysis that spares the customer the work. They also protect privacy, because the sensitive raw detail never leaves the seller. Mastercard Advisors' insights from anonymized transaction data are an example.
- **Commercially ready solutions** package dashboards, workflows, machine-learning models and insights as standalone products or inside existing products. They command the highest prices because they demand least of the buyer. FordDirect's dealer analytics platform combined dealer websites, customer-management and back-office data into one view of the customer journey, and it drove a 40 percent sales increase for dealers in targeted segments.

See [Enterprise Data Strategy and Governance](#/concept/enterprise-data-strategy-and-governance).

### Marketing and first-party data

Marketing shows both the temptation and the danger of a data strategy owned by a single function. Four forces are restricting third-party data, which is data collected by outside parties. They are tightening privacy laws, restrictions in browsers and operating systems, consumers' use of privacy tools and walled gardens such as Amazon, Facebook and Google. As a result, 76 percent of surveyed marketing executives in consumer businesses are trying to collect more first-party data, which a company gathers directly from its own customers.

Acquiring more data does not produce better targeting or insight. Companies already hold large amounts of customer data, yet it stays fragmented, and useful data sits unused in silos. Hoarding is also a standing risk, because cheap cloud storage has removed the old incentive to keep the footprint small. T-Mobile's 2021 breach showed this. The company was found to have needlessly retained sensitive information on more than 40 million prospective and former customers, which led to a $500 million class-action settlement.

Forrester's prescription is that chief marketing officers should hold a formal seat in the enterprise data strategy and not pursue a marketing-only agenda that would deepen silos. They should work with the chief data officer, the chief information officer and finance. PepsiCo took this approach over seven months. Marketing then has four responsibilities. It surfaces customer insights that reach beyond marketing's own uses. It turns the strategy into market actions with measurable value. It bridges strategy and in-market execution and feeds the results back. And it aligns marketing's data needs with privacy policy. Only 15 percent of privacy decision-makers report that their privacy team collaborates with marketing.

### Caterpillar: chief executive ownership

Caterpillar shows what ownership at the top looks like. In 2017, chief executive Jim Umpleby set out to grow services and parts revenue through digital offerings. He found customer data too siloed and incomplete to support the strategy. He did not hand the fix to IT. He committed three years to an enterprise data platform called Helios, set a public target of $28 billion in services revenue for 2026 and made data ownership a senior business responsibility.

Roughly a dozen vice presidents took ownership of 14 enterprise data domains and were evaluated monthly on the quality of their domain's data. A new data product owner role tracked the reuse and payoff of data products. The platform replaced eight legacy systems and about 200 dealer interfaces. Caterpillar estimates that it cut data-management complexity by a factor of 30, and services revenue grew from $14 billion in 2016 to $24 billion in 2024. A Dealer Digital Council gave dealers quarterly input to the roadmap, and an internal Demand Review Board ranked business-unit proposals against it, so that silos did not return.

Once the foundation matured, Caterpillar layered AI on top of it and did not launch a separate initiative. Machine-learning models correct data-entry errors, such as mistyped serial numbers, as the data arrives. A genuine data foundation is what lets AI investments build on each other and not stall on poor inputs.

### Federated learning: sharing without handing over data

Federated learning lets several organizations train a shared AI model on their combined data without any of them giving up raw data. The training algorithm travels to each organization's data, and the data does not travel to a central location. Combined with specialized encryption, it preserves the privacy of the people and organizations behind the data.

Zurich Insurance used a commercial platform to improve a prediction model with data from the telecom company Orange, and Orange never released any of its data. Zurich reported a 30 percent improvement in its predictions and a significant revenue increase, and Orange gained a private way to monetize its data. Cooperation works even between competitors. Pathology departments at competing private hospitals train a shared diagnostic algorithm on their combined tissue images, and ownership shares of the resulting algorithm follow each hospital's data contribution. Banks use federated learning with a form of encryption that allows calculations on scrambled data to check whether a competing bank has flagged a prospective client as unreliable, without either bank disclosing its client list. That reduces the cost of know-your-customer compliance, which runs to roughly 3 percent of banks' operating costs worldwide.

The type of data an organization holds shows what kind of partner would help. Two measures decide the type. One is the number of samples, and the other is the number of features recorded for each sample.

- **Poor data** has few samples and few features.
- **Horizontal data** has many features per sample but too few samples. The organization should look for partners within its own industry, even direct competitors, because more samples of the same variables are what it needs.
- **Vertical data** has many samples but too few features per sample. The organization should look for partners in other industries who record different things about the same population, such as a telecom company and an insurer that serve overlapping customers.
- **Rich data** is sufficient on both measures. Such organizations can still benefit by contributing the data to train other organizations' AI systems while keeping full ownership.

Federated learning also has an underused internal application. Barriers to sharing data between legal entities, countries or business units, often imposed for compliance or ethics reasons, can block one group from data that another group already owns. Federated learning lets the organization use that data across these barriers while respecting the rules that created them.

Six factors guide the choice of partners.

1. The state of the organization's own data.
2. What that implies about the kind of partner to seek.
3. A logical starting point, with one algorithm and one trusted partner before scaling.
4. The potential for data monetization.
5. The likely technical challenges, such as converting unstructured data into machine-readable form and agreeing on labeling conventions across organizations.
6. Employee buy-in, since resistance to working with outside organizations, especially competitors, is the single most critical obstacle.

See [Federated Machine Learning](#/concept/federated-machine-learning).

## Go Deeper

- [Enterprise Data Strategy and Governance](#/concept/enterprise-data-strategy-and-governance) — Monetization models, marketing's role and the Caterpillar case in depth.
- [Federated Machine Learning](#/concept/federated-machine-learning) — Federated learning, data types and partner selection in depth.
