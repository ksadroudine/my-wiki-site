## Summary

A cloud strategy decides where each workload belongs, what moving it will cost and how it will be migrated. This chapter follows that journey from the unplanned, department-driven start of cloud adoption through a five-stage planning process, the economics of capital versus operating spending and the hidden costs of hybrid environments. It then covers the seven migration strategies, from rehosting to retaining, and the program-level traps that decide whether a transformation succeeds. A recurring finding is that careless lift-and-shift migration often raises costs, while rightsizing and workload-by-workload choices lower them.

## Key Ideas

- Cloud adoption usually began without a plan, when frustrated developers bypassed slow internal IT, and the resulting costs and security gaps are what forced a deliberate strategy.
- A strategy is a staged journey owned jointly by business and technology leaders, and it must be revisited as the market changes.
- Each workload should be placed according to its own nature, not by one company-wide rule.
- Moving a few workloads out of a data center rarely saves money in proportion, because fixed costs do not shrink.
- The seven migration strategies are rehost, relocate, replatform, refactor, repurchase, retire and retain, and the right one depends on each application.
- Shrinking an overprovisioned workload before migration can cut costs by 30 to 60 percent, while moving it unchanged can raise them by 10 to 15 percent.

## Cloud Strategy and Migration

### How adoption began

Cloud adoption in most organizations did not start as a strategy. Developers in business departments were frustrated by slow internal procurement, so they turned to inexpensive, self-service public cloud resources. That solved the local problem and created a company-wide one. Small bills added up to large uncontrolled spending, and nobody tracked the full footprint, so security and governance went unmanaged.

IT departments often reacted by treating the trend as a threat. What forced a deliberate strategy was competition. A generation of companies built around the cloud from the start had no lead time for physical infrastructure, and adoption stopped being optional for established firms in competitive markets.

Legacy applications resist a simple move. A monolithic application is a single large program with many dependencies. Moving it wholesale consumes computing and storage and delivers no strategic advantage, and the code stays equally hard to adapt afterward. The benefit comes from modernizing first, by removing dependencies and redesigning the application as modular, reusable services.

Transformation also does not require becoming a digital native overnight. In one example, a century-old furniture retailer faced online competitors and built a hybrid model. It added online ordering, in-store pickup and personalization on top of its existing strengths in design advice and local reputation.

### Five stages of planning

A deliberate strategy is a journey in five stages, not a single decision.

1. **Assess.** A joint task force of business and IT leaders reviews the current estate. The question is whether it is a well-orchestrated, flexible system or a collection of disconnected silos. The task force must also record where business-critical data lives.
2. **Imagine.** The team pictures where the business and its competitors will be in six months and in three years. This is not a one-time exercise, because a plan built on one snapshot goes stale as fast as the market changes.
3. **Explore.** The team studies options directly, through benchmarking against peers and hands-on use of free trials and open-source tools. Direct experience produces better questions, even if a service provider later helps with execution.
4. **Create.** Business and IT write the hybrid plan together, organized around microservices instead of monolithic applications. The plan weighs latency, cost, reliability and regulation, including data-residency laws, when deciding where each workload should run.
5. **Implement.** The rollout happens in stages. It starts by bringing already adopted public cloud workloads under management and negotiating better terms with vendors. Then the company picks a few visible, well-suited early projects.

### Placing each workload

Placement should follow the nature of the workload, and not one blanket policy. A workload with stringent security needs suits a private cloud, or a public cloud with a specific security guarantee. A purely temporary need for extra capacity suits commodity public cloud.

Cost-benefit analysis also resists a universal formula. A SaaS application can cost more in annual fees than the hardware and upkeep it replaces and still be the right choice, because of the productivity and responsiveness it enables. A company whose core business is itself a set of cloud-like services may find in-house capability cheaper than any vendor, once it has the scale to buy inputs more cheaply than an intermediary does.

### The economics

Costs are harder to judge than they first appear. Initial costs for a narrow use, such as testing one application, are often low, so management can be unprepared when costs rise sharply as usage grows. That rise is usually a logical result of the workload and not vendor overcharging.

The cloud delivers a clear economic benefit in three situations. The first is temporary or bursty demand, where permanent infrastructure for a short spike would be wasteful. The second is replacing inconsistent in-house tools with SaaS, particularly when teams run different versions of the same tool and the inconsistency itself costs accuracy or sales. The third is large-scale but simple applications such as email, where a vendor's standardization and scale are hard for any single data center to match. Workloads with unusual data-sovereignty or governance constraints, aging monoliths with deep dependencies and specialized tools used rarely by a small group are often better left in place.

A basic distinction is between capital expenditure and operating expense. Capital expenditure is investment in owned or leased assets such as servers, property and licenses, which is depreciated over time. Operating expense is the ongoing cost of running the business, and it covers most cloud services. Organizations are usually more constrained in capital than in operating spending. Shifting cost from one to the other frees capital and improves agility, since an underperforming initiative can be cut or a promising one expanded far more easily when the spending is not sunk.

Most organizations lack an accurate picture of what an application costs to run on their own premises. A full account includes servers and storage, network, backup, archive and disaster recovery, data center overhead such as electricity and cooling, and software maintenance and operations staff. Most of these costs resist attribution to a single application. This also explains why moving a handful of workloads rarely saves money in proportion. Fixed costs do not shrink until enough workloads leave to reduce floor space, cooling or staffing. A data center running at 40 percent utilization will not become much cheaper by moving a small slice to the cloud.

A hybrid deployment adds costs that a capital-versus-operating comparison misses. These are the overhead of managing several environments, fees for moving data in the first migration and afterward, customization to fit the hybrid setup, integration with everything the application depends on and extra compliance auditing. Vendor calculators are useful for rough orientation but should be treated skeptically, because many are marketing tools built to reach a cloud-positive conclusion. The recommended response is a documented internal policy, agreed in advance, on which categories of workload and data must stay in a traditional data center or private cloud and why. See [Cloud Strategy and Migration](#/concept/cloud-strategy-and-migration).

### Seven ways to migrate

The 7 Rs framework offers a menu of migration strategies, on the premise that different workloads warrant different approaches depending on complexity, business criticality and tolerance for cost, risk and disruption. It grew in stages. Gartner introduced five strategies early in the cloud era. AWS added Retire, so that planning starts by asking whether an application still delivers value at all. AWS later added Retain, a legitimate way to keep a system on premises as a deliberate choice.

The strategies run from minimal to maximal change.

- **Rehost**, also called lift and shift, redeploys an application and its dependencies onto infrastructure as a service as they are. It is the easiest and lowest-risk option, but it limits access to features such as automatic scaling.
- **Relocate** moves an entire group of servers from an on-premises platform to a managed cloud equivalent without rewriting code. It is the fastest strategy, but it caps scalability.
- **Replatform** makes targeted platform-level improvements and leaves the core code and architecture alone. It saves time and cost compared with a full rebuild.
- **Refactor**, also called re-architect, rebuilds a workload for the cloud, often splitting a monolith into microservices. It is the most future-proof and usually lowers operating costs the most, but it needs the largest investment and training, and it is not advisable for many applications at once.
- **Repurchase** replaces an internally managed system with a third-party service, typically SaaS. It converts fixed cost into subscription cost and delivers cloud capability quickly, though it can be expensive for rarely used applications.
- **Retire** shuts down or downsizes applications that no longer deliver value.
- **Retain** keeps a system where it is, because it cannot or should not move.

Rightsizing shows the cost of getting this wrong. Moving an overprovisioned workload unchanged can cost 10 to 15 percent more in the cloud than leaving it in place. Rightsizing before migration can cut costs by 30 to 60 percent. In one analysis, a company with 105,000 server instances faced a 22 percent increase from rehosting but a 36 percent reduction from rightsizing.

### Why transformation programs fail

BCG identifies five traps that derail cloud transformations. A company can treat the cloud as a data center. It can fail to manage volatile costs. It can neglect the timing of its exit from legacy systems. It can lose control to partners chosen on cost. And it can let programs multiply across uncoordinated vendors.

BCG also estimates that committing about 3 percent of the program budget to proactive assurance, tested at three checkpoints, can save more than 30 times its cost in avoided rescue effort. Practical guidance includes planning for cloud-native architecture and an inexpensive way to take data out from the start, avoiding reliance on a single vendor, not committing to bulk licenses before usage is confirmed and not letting the existing data center decay.

## Go Deeper

- [Cloud Strategy and Migration](#/concept/cloud-strategy-and-migration) — The five-stage journey, workload placement, economics and the 7 Rs in depth.
- [Cloud Value Realization and Maturity](#/concept/cloud-value-realization-and-maturity) — Why programs stall and how to turn them around.
