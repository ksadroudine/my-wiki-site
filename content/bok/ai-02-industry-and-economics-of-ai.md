## Summary

The AI industry is spending far more on infrastructure than it earns, and the central question is whether that gap will close. This chapter explains the arguments for and against calling the spending a bubble, why vendors price AI below its cost, and how forecasts of AI's economic effect differ. It also covers the concentration of power in a few companies and leaders, the rise of Chinese and sovereign AI, the pressure on software-as-a-service businesses and the new problem of managing the cost of AI inside a company.

## Key Ideas

- Spending on AI infrastructure is roughly six times AI revenue, and the chips involved lose value within a few years.
- Whether this is a bubble depends on how the spending is financed, how fast revenue grows and whether losses could reach the banking system.
- Vendors charge less than AI costs to run, and the models themselves are becoming commodities, which makes pricing the core business problem.
- Forecasts of AI's economic effect differ because they measure different things, such as spending on technology or gains in national output.
- Power is concentrated in Nvidia and a few frontier labs, and governments are responding with sovereignty policies and regulation.
- Inside companies, AI costs are variable and easy to underestimate, so they need to be measured task by task.

## Industry and Economics of AI

### The spending gap

Technology companies are building AI infrastructure at a pace without precedent. In 2025 they were on track to spend $300 to $400 billion, while AI revenue was about $60 billion by a conservative estimate. That is a gap of roughly six to one.

The chips make this spending unusual. Railroads and fiber-optic cable keep their value for decades, even if they sit unused for a while. Graphics processors lose value within about three years, so much of the spending must be repeated. About half of the data center budget goes to these chips.

### Is it a bubble?

The sources give three answers. One side points to how the spending is financed. Companies increasingly move data centers into separate legal structures funded by private credit, which keeps the debt off their own balance sheets. That reduces transparency, and opaque funding was the trigger in about half of 18 historical bubbles. Nvidia adds to the concern, because its guarantees and financing for customers could oblige it to pay more than $300 billion, so a downturn could concentrate losses in one company.

The other side applies a strict test. By this test a bubble needs a market fall of 40 to 50 percent that lasts for years, and a similar fall in the investment behind the boom. Neither has happened. Generative AI also has real users, unlike many dot-com sites, and ChatGPT was projected to reach about $10 billion in annual revenue faster than Facebook or TikTok did. Nvidia funds its commitments from cash and operating profit rather than debt, which makes it different from Cisco in the dot-com years.

A third view in the Harvard Business Review changes the question. It asks how a bust could hurt the economy, through spending stopping, falling stock wealth or a credit crunch. It finds the boom smaller than headlines suggest, about 1 percent of national output, and concludes that systemic damage is unlikely while losses stay outside the banking system.

The buildout is also limited by physical supply, not only by money. Memory chips are sold out through 2026, advanced packaging is fully booked, gas turbines have backlogs to 2030 and grid connections can take four to seven years. Local opposition blocked or delayed at least 75 projects in the first quarter of 2026 alone. This is the opposite of the dot-com fiber glut, when capacity sat idle until demand arrived. See [AI Investment Bubble and Capital Rotation](#/concept/ai-investment-bubble).

### Why vendors cannot price AI profitably

Every prompt costs real computing power, so AI has high variable costs. Revenue per user is low. Andy Wu of Harvard Business School calls a bubble a time when everyone can see the value being created but no one is thinking about how to capture it. Flat monthly subscriptions are in practice capped usage plans, and the usual $20 price does not cover the cost of heavy users.

Models are also becoming commodities. Weak intellectual property protection lets new entrants such as DeepSeek approach the leaders with far less investment, which limits how far any vendor can raise prices. Some investors argue that prices are too low for the value delivered. The venture firm a16z advises pricing at the highest layer of value that can be measured, such as credits for recognizable units of work or outcomes, instead of per token. See [AI Vendor Pricing and Profitability](#/concept/ai-vendor-pricing-and-profitability).

### Competing forecasts of AI's economic effect

Estimates differ because they measure different things. Bain projects that spending on AI hardware and software will reach $780 to $990 billion by 2027. Economist Daron Acemoglu estimates that AI will raise US output by only about 1 percent over a decade, because only a small share of tasks across the economy can be done profitably by AI today. Neither is wrong. One measures how much money is spent on the technology, and the other measures the gain in output.

Labor economists add a geographic point. Even a modest overall effect could help some US cities and hurt others, especially midsize metropolitan areas. See [The AI Economic Impact Gap](#/concept/ai-economic-impact-gap). A related argument is that the direction of AI matters. Automation tends to favor owners of capital, while AI that creates new tasks raises the value of human expertise. See [Pro-Worker AI and Labor Displacement](#/concept/pro-worker-ai-and-labor-displacement).

### Power and geopolitics

The Economist compared AI's best-known leaders with the industrial tycoons of 11 earlier technology waves. The people closest to AI models rank lower than might be expected, because model-making needs few employees and none of them holds the kind of corporate control that Henry Ford or the Vanderbilts once had. Nvidia's Jensen Huang has gathered a different kind of influence, through his supply-chain position, his popularity in Taiwan and his offers of sovereign AI to governments.

The Economist treats April 7, 2026 as a turning point. On that day Anthropic announced that it would withhold its Mythos model from general release because of its ability to find software vulnerabilities, and political pressure for regulation increased. See [AI Power Concentration and New Tycoons](#/concept/ai-power-concentration-and-new-tycoons).

China shows a second path. DeepSeek's R1 model in January 2025 matched leading US chatbots at a fraction of the reported training cost and was released as open source. The Harvard Business Review reads this as classic disruption, in which a cheaper product that is good enough moves up the market. It advises companies to decide deliberately which model providers to use. See [DeepSeek and China's AI Ecosystem](#/concept/deepseek-and-chinas-ai-ecosystem).

Sovereign AI means AI capability under national or organizational control. McKinsey estimates that sovereignty requirements could influence 30 to 40 percent of global AI spending, a market of $500 to $600 billion by 2030. Sovereign offerings cost 10 to 30 percent more, and most initiatives stall because sovereignty is treated as a checklist. Most organizations agree that full sovereignty is unrealistic and aim for resilient interdependence instead, which means reducing dependence on any one provider without cutting ties. See [Sovereign AI Ecosystems](#/concept/sovereign-ai-ecosystems).

### Pressure on software businesses

Software-as-a-service companies, which rent software over the internet, usually charge per user. AI agents cost the supplier more as they are used, and they replace the human users who pay the fees. The Economist names four threats, which are large AI labs, AI-native startups, companies building their own software and the incumbents' own AI products. Share prices show the uneven effect, with cybersecurity firms rising and seat-based software sellers such as Salesforce falling in the same period.

McKinsey recommends moving to pricing based on the AI work performed. It also notes that AI software was still less than 1 percent of software application spending. See [AI Disruption of SaaS Business Models](#/concept/ai-disruption-of-saas-business-models).

### The cost of AI inside a company

For a firm that uses AI, the bill is variable and easy to underestimate. A customer service chat that cost $0.04 two years ago can cost $1.20 now, once the agent plans, retrieves information and calls other agents. Model prices fall roughly tenfold per generation, but the cost of completing a task stays flat, because people move to the newest model, each task uses more tokens and usage grows.

Companies are already rationing. Uber used its annual AI budget by March, and only about 18 percent of the money spent on AI coding tokens turns into shipped products, according to one study of 2,000 companies. The recommended response is a discipline called Agent FinOps, which tracks the full cost of each task, chooses the smallest adequate model and measures return. AT&T cut costs by 90 percent by routing work to smaller models. See [Enterprise AI Token Cost Management](#/concept/enterprise-ai-token-cost-management).

## Go Deeper

- [AI Investment Bubble and Capital Rotation](#/concept/ai-investment-bubble) — Financing, physical limits and the rotation of capital toward hardware.
- [AI Vendor Pricing and Profitability](#/concept/ai-vendor-pricing-and-profitability) — Why generative AI vendors price below cost and how to price at the layer of value.
- [The AI Economic Impact Gap](#/concept/ai-economic-impact-gap) — Why forecasts of AI's economic effect differ.
- [Pro-Worker AI and Labor Displacement](#/concept/pro-worker-ai-and-labor-displacement) — Design choices that decide whether AI helps workers.
- [AI Power Concentration and New Tycoons](#/concept/ai-power-concentration-and-new-tycoons) — AI leaders compared with historical tycoons.
- [DeepSeek and China's AI Ecosystem](#/concept/deepseek-and-chinas-ai-ecosystem) — DeepSeek, disruption theory and sourcing strategy.
- [Sovereign AI Ecosystems](#/concept/sovereign-ai-ecosystems) — Sovereign AI as an ecosystem effort.
- [AI Disruption of SaaS Business Models](#/concept/ai-disruption-of-saas-business-models) — Seat-based pricing under pressure.
- [Enterprise AI Token Cost Management](#/concept/enterprise-ai-token-cost-management) — Measuring and controlling the cost of AI inside a company.
