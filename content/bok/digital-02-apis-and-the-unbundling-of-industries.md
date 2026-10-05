## Summary

An API, or application programming interface, is a contract between a provider and the developers who build on it. This chapter explains why most of the business value of APIs comes from private, internal use, how an API program depends on a chain of five links and what to settle before choosing technology. It then shows how APIs let companies embed specialized outside services directly into their own workflows. That creates specialist providers and orchestrators, new sales channels and ways to earn from idle assets, and it also turns partners into competitors and creates risks that companies must plan for.

## Key Ideas

- An API is a contract. The provider commits to certain functions, to advance notice of changes and often to usage limits, so any change affects every application built on it.
- Private APIs usually create about ten times more value than public ones, because the biggest gain for most companies is faster internal development.
- An API program works only if all five links of its value chain hold, and programs usually fail through a weak business link and not through a technical flaw.
- Strategy comes before technology. A program needs an answer on audience, assets and developer motivation, an internal business sponsor and a developer evangelist.
- APIs let a company embed specialized outside services in its own operations in real time, which differs from traditional outsourcing.
- Partners can become competitors, and a failed provider can cut off many customers at once, so unbundling needs a deliberate plan.

## APIs and the Unbundling of Industries

### What an API is

An API is a contract between a provider and the developers who build applications on it. The provider commits to specific functions and to advance notice of changes that would break existing uses. It often also sets technical and business limits, such as how many requests are allowed and what the usage terms are. The contract gives developers the confidence to build on the API. It is also why changing it can ripple across every application that relies on it.

The words private and public describe the formality of the business arrangement. They say who may use the API and on what terms. They do not describe a technical property of the API. Companies often move in either direction. Some start private and open the API later, once outside demand is clear. Others launch publicly and then find that more value comes from internal use. See [API Strategy and Digital Value Chain Unbundling](#/concept/api-and-digital-value-chain-strategy).

### Where the value is

The most surprising claim in the book on APIs by Jacobson, Brail and Woods is that private APIs typically create about ten times more value than public ones. The few well-known public successes, such as those of Twitter, Google and Facebook, are the exception. For most companies, the greatest value of an API lies in speeding up their own mobile, web and partner-facing development. Internal and partner teams can build new applications in weeks and not in the months or years of a traditional siloed IT process.

This changes how success should be measured. Instead of outside developer adoption or public traffic, attention should go to internal return on investment. It is the saving in speed and cost when teams subscribe to clean, consistent, self-service interfaces and no longer negotiate a custom connection with each internal system. It is the most important return in practice and the one most often overlooked.

### Five links in the chain

The success of an API program depends on a value chain of five links that must hold from end to end.

1. The **owner** holds the business assets that are exposed.
2. The **provider** designs and operates the API, and is often but not always the same party as the owner.
3. The **developers** use the API.
4. The **applications** are what the developers produce.
5. The **end users** generate the value that the chain exists to capture.

Failed programs almost always show a weak link, and not a technical shortcoming. The most common weakness is a launch without agreement from legal, product, marketing and the owners of the underlying assets. The API is then technically sound but disconnected from what the business needs.

### Ways to earn money

The book describes four commercial models.

- **Free** carries no charge. It is valuable mainly for reach and goodwill.
- **Developer Pays** takes several forms, such as tiered pricing, pay-as-you-go pricing, per-unit pricing and a free version with paid upgrades.
- **Developer Gets Paid** covers revenue shares, such as a split of advertising income, and affiliate payments for each action or click.
- **Indirect** means that the API drives another important measure. A retailer's store-locator API, for example, drives visits to stores.

### Strategy before technology

Before any technology decision, the strategy must answer three questions. Who is the audience, whether internal staff, contracted partners or the public? Which business assets will be exposed, and to whom? And what will motivate developers to build on the API? An API with no compelling reason for developers draws no real use, however good the technology is.

Programs also need an organizational precondition, which is an identifiable internal business sponsor. Without one they struggle to win funding and attention. Behind almost every successful program, public or internal, stands a developer evangelist. This is someone technically credible enough to build real applications with the API. The evangelist takes part in the relevant developer communities and gives fast, practical support and feedback, and does not treat publication as a one-time release.

### From outsourcing to embedding

Antonio Moreno's HBR article shows the effect on entire industries. For four decades, companies have gradually unbundled their activities by outsourcing separate tasks to specialist firms. Digital integration, above all through APIs, has started a different phase. A firm no longer simply hands a task to an outside party. It embeds highly specialized services directly in its own workflows, so that its systems interact with the partner's systems in real time.

Two forces made this possible. First, many businesses had already digitized and integrated their customer-facing workflows. At Domino's, online ordering makes up over 85 percent of US retail sales and automatically triggers the coordination of cooking schedules in the stores. At Target, an order for pickup immediately sends picking instructions to store staff. Extending that infrastructure to outside partners, such as delivery platforms, payment processors and fulfillment networks, became a natural next step. Second, standardized interfaces spread. They now carry most internet traffic, and directories such as Postman list more than 100,000 APIs. Any business can assemble capability from building blocks such as UPS's shipping API, Google Maps' location API, Stripe's payments API and OpenAI's ChatGPT API.

### Two new kinds of firm

**Hyperspecialized providers** perform one narrow task at scale for many clients at once. They capture economies of scale and demand smoothing that no single client could. ShipBob spreads fixed warehouse and transport costs across millions of orders, and it absorbs one partner's demand spike by rebalancing capacity across its network. Kitopi runs cloud kitchens, which are kitchens that prepare food only for delivery, and this frees restaurant brands from operating dine-in locations. This opens up capability that was once reserved for large firms. A would-be chef, a solo creator turning a viral idea into a merchandise brand or a game developer using the Xsolla monetization platform can assemble capability almost instantly with little upfront investment.

**Orchestrators** coordinate the end-to-end workflow of an offering and are the customer's contact, without controlling every underlying capability. Uber Eats controls neither the restaurants nor the drivers, but it manages the process from ordering to delivery. In insurance, Agero dispatches towing and repair on an insurer's behalf, and Tractable assesses damage from photos.

### New channels and idle assets

Orchestrators create new distribution channels by placing a hard-to-sell product inside an existing journey. Examples are travel insurance added with one click during an Expedia booking, and ticket protection during a Ticketmaster purchase. Embedded channels are projected to account for 30 percent of insurance transactions within five years.

Digital integration also lets companies earn from idle assets. Flexe brokers spare warehouse capacity between businesses. Wareclouds turns private homes in several Latin American countries into distribution points. Virtual Dining Concepts matches delivery-only restaurant brands with restaurants' unused kitchen capacity. Walmart applied the same logic at the scale of an established company by opening its logistics infrastructure to outside sellers through Walmart Fulfillment Services.

### Partners can become competitors

The change is not uniformly good for established companies. Partners that orchestrate can become direct competitors. Glovo began by coordinating the delivery of grocery partners' stock across more than 20 countries. It then invested in its own dark stores, which are fulfillment-only facilities, and created end-to-end grocery offers that compete with the chains it had served. Kitopi moved from working with restaurants to launching its own virtual restaurant brands. Industry boundaries also blur as orchestrators become superapps. Rappi grew from courier delivery into groceries, payments and financial products. Amazon, Walmart and Zalando offer logistics and advertising to third parties that do not sell on their own marketplaces.

### A four-step playbook

Moreno proposes four steps for preparing.

1. **Digitize internal processes with outside integration in mind.** Treat operations as modular parts that APIs can address. Target's pickup workflow and Zara's real-time inventory tracking with radio tags are examples.
2. **Catalog the outside specialist services in the industry.** Public API and marketplace directories help, such as Shopify's app store with more than 8,000 apps, the insurance-specific HeraldAPI and the Open Banking Tracker.
3. **Decide deliberately what to unbundle.** Weigh the tasks that gain most from outside scale or expertise against the loss of internal synergies and against the risk of dependence. A restaurant that outsources production to a cloud kitchen but keeps recipe development may lose the ability to improve recipe and process together. The 2024 collapse of Synapse Financial Technologies, which provided back-end banking to many fintech startups, cut their customers off from their accounts.
4. **Decide whether to open the company's own spare capacity or infrastructure to others.** Walmart and Shopify turned internal capability into an outside product.

### The effect of AI

AI and end-to-end ecosystems are expected to speed this trend up. Maersk feeds sensor, location and partner data into AI systems that plan global shipping routes, and it coordinates with port and customs authorities through the same type of digital interface. Shein used a fully digitized, AI-informed supply chain to cut its design-to-market cycle from three weeks to five days, and it now offers that infrastructure to outside brands as a service.

The most speculative claim concerns agentic AI. Today's API connections are mostly triggered by human decisions. Agentic systems embedded across workflows could learn, adapt and make sourcing, production and logistics decisions on their own in response to real-time conditions. FedEx is already applying this to route planning.

## Go Deeper

- [API Strategy and Digital Value Chain Unbundling](#/concept/api-and-digital-value-chain-strategy) — The API value chain, commercial models, strategy questions and the digital unbundling playbook in depth.
