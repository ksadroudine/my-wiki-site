## Summary

Running cloud environments well means managing three linked things at once. These are daily operations across hybrid and multicloud estates, the storage and integration of data, and the security and governance duties that come with shared infrastructure. This chapter explains how to manage the different kinds of cloud resources, how to choose service levels, which workloads suit the cloud and how data should be tiered and controlled. It also covers the risks created by sharing infrastructure with other customers and why governance fails unless business and IT own it together.

## Key Ideas

- Operating a hybrid or multicloud estate means managing five categories of resource, each with different owners.
- Shadow IT, which is the use of tools without IT's knowledge, is best handled by offering a vetted catalog of approved tools and not by blocking it.
- Each additional nine of availability is a large step, so a service level should match how critical the workload is.
- Some workloads are poor fits for the cloud, including badly designed legacy applications and those that need extremely low latency.
- Data should be sorted into three tiers by how often it is used and how critical it is, and the tier guides where it should live.
- Sharing infrastructure creates risks with no equivalent in a company's own data center, and the company remains legally responsible for its data.
- Cloud governance is IT governance that extends across organizational boundaries, and it fails unless business and IT own it jointly.

## Operating the Cloud

### Managing a mixed estate

Users and applications no longer distinguish between a workload in the company data center and one in a public cloud. They expect everything to work predictably. IT therefore carries responsibility for five categories of resource, and each has different owners and challenges.

1. Software as a service applications, which the vendors largely manage, although IT still owns the customer relationship and the user experience.
2. External public cloud resources, such as virtual machines, storage and databases that development teams use directly.
3. Internal cloud resources, delivered through private or hybrid clouds to employees and partners.
4. Internal services.
5. External services that the company delivers to customers in other companies.

Cloud makes it easy for any employee to sign up for a new tool, which produces shadow IT. Business units adopt applications without IT's awareness, sometimes to work around legitimate constraints such as email attachment limits. The recommended answer is to act before it spreads. IT researches and approves a catalog of vetted tools that meet security and reliability standards, publishes the catalog where it is easy to find and invites employees to report unmet needs. The combined usage also gives IT bargaining power on price and support.

Users hold IT accountable for outages even when the cause lies entirely inside the vendor's systems, so IT needs contingency and failover plans for third-party outages. Cloud access management, a cloud-specific form of identity management, defines who can reach which applications and with which rights.

Development teams lead the process for external resources. They identify requirements, research providers, test candidates, formalize the relationship, document the approved resource and review it again periodically, for example once a year. The aim, as with SaaS, is a curated self-service catalog, so that the easy choice is also the right one.

### Service levels and monitoring

Every cloud resource comes with a service level agreement, or SLA. Uptime targets compound in a way that is easy to underestimate. A target of 99 percent allows 3.65 days of downtime a year. A target of 99.999 percent allows about five minutes. Providers charge more for each extra nine, so the target is a trade-off between cost and how critical the workload is. It should not default to the highest number.

Monitoring works best in layers, rolled up into dashboards built for each audience. Support staff need enough context to solve a caller's problem at once. Developers need data on performance and usage. Product managers need data on which features customers use. Executives need high-level status and business impact. For resources taken from the public cloud, the most accurate check is to instrument the application so that it records the performance it delivers.

### Which workloads suit the cloud

The cloud is not a single answer. Software-as-a-service workloads need elastic scaling for unpredictable numbers of users. Batch workloads run asynchronously and benefit from economies of scale. Transactional workloads such as billing and order processing need heavy computing and storage, and they have moved from on-premises systems to private and even public clouds as cloud security matured. Analytics workloads on extremely large data sets need heavy real-time computing and specialized hardware.

Some workloads are poor fits. Applications that were never redesigned for cloud scaling should be rebuilt first, instead of moved as they are. Workloads that need extremely fast storage or extremely low latency cannot count on the public internet to deliver it. Applications in regulated areas that require storage to be physically auditable in person usually cannot use public cloud data centers.

Moving workloads between providers is limited because interfaces are not standardized across vendors. For example, one provider's security rules cannot be moved unchanged to another provider's networking service. The recommended interim fix is an internal portability layer that hides vendor-specific differences. Applications then talk only to that layer, and only the layer must be replaced when real standards mature. Companies pursue portability for reasons beyond avoiding dependence on one vendor. They want the best technology for each workload, tools their developers already know, compliance with rules that pin data to certain places and the freedom to leave a provider that begins to compete with them.

### Data in the cloud

Cloud data falls into three tiers by how often it is accessed and how critical it is. Tier 1 is data that is used often or is mission-critical, such as current bank account data, and it sits on the fastest storage. Tier 2 is rarely used data that is backed up periodically. Tier 3 is almost never used but kept for compliance, for example brokerage records that must be retained for years. The tiers guide placement. Tier 1 data that is sensitive to delay may not belong in the cloud if the network cannot meet the application's needs, while large volumes of Tier 3 data are the best candidates for cheap, elastic storage.

Data integration falls into three recurring scenarios. The most common is linking on-premises systems to the cloud, such as synchronizing an ERP system with a cloud customer-management application. The second is connecting several clouds, for example bursting from a private cloud into public capacity to test how a service scales. The third is keeping SaaS applications consistent with each other. Whatever the method, one authoritative master version of the data is a non-negotiable requirement. One approach, data virtualization, moves the query to the data instead of moving sensitive data between environments.

Managing data in the cloud is a problem of trust and control. Providers must have proper controls, but the company stays legally responsible for its data wherever it is stored or processed. The Cloud Security Alliance organizes control around three goals, which are confidentiality, integrity and availability. It translates them into seven types of control. These are input validation, output reconciliation, processing controls, access controls, re-identification controls, change management controls and data destruction controls. See [Cloud Operations, Data and Security](#/concept/cloud-operations-data-and-security).

### Security as a shared responsibility

Cloud security is a shared responsibility, because even the best technical controls fail if end users do not understand their own role. Several risks have no equivalent in a company's own data center.

- **Neighbors.** The company's applications share servers with other companies, so a breach or an attack aimed at one customer can spill over and degrade another customer's service.
- **Insiders.** Close to half of breaches involve insiders, so using a cloud adds the provider's employees to the insider-risk surface. A provider may also subcontract capacity without saying so, so due diligence must cover the entire chain.
- **Limited visibility.** The customer usually cannot investigate incidents on the provider's servers, and some providers will not disclose an incident until it is confirmed.

Encryption of everything is not automatically the right answer. It has a performance cost, key management becomes a risk of its own and it does not protect data before or after encryption. The 2008 breach at Hannaford Supermarkets showed this. Anonymization, tokenization and database access controls should complement it.

### Governance

Cloud governance is IT governance extended across organizational boundaries. It fails unless business and IT own it together, through a governance board that covers audit and compliance, security, performance, interoperability, contract terms, billing and intellectual property.

## Go Deeper

- [Cloud Operations, Data and Security](#/concept/cloud-operations-data-and-security) — Operations, workloads, data tiers, integration, security and governance in depth.
