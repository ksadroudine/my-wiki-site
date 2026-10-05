## Summary

Cloud computing is the delivery of computing resources such as servers, storage and software as a shared, standardized and automated service. This chapter explains the three service layers, which are infrastructure, platform and software as a service, and the ways clouds are deployed, including public, private, hybrid and multicloud. It also covers why most organizations end up with a mix of environments, what makes an application cloud-native, and how standards allow different clouds to work together. A recurring point is that how an application is built matters more than where it runs.

## Key Ideas

- A cloud is defined by its behavior. Resources are shared, standardized and provisioned automatically, and without all three it is only remotely hosted infrastructure.
- Multi-tenancy, in which many customers share one running system while their data stays separate, is what makes cloud economics work.
- The three service layers are infrastructure as a service, platform as a service and software as a service, and each one hides more technical detail from the customer.
- A hybrid cloud needs private and public resources that work together. Separate environments that happen to coexist do not count.
- Moving an old application to the cloud unchanged captures almost none of the benefit, because the value comes from rebuilding it as small, independent services.
- Standards decide how easily a company can connect clouds and move between them, and data is harder to move than applications.

## Foundations of Cloud Computing

### What makes something a cloud

A cloud is best defined by what it does. It delivers computing resources as a service, and the delivery has three features. It is shared, standardized and automated. Resources include applications, computing power, storage, networking, development platforms and even business processes.

Standardization gives customers consistent interfaces. Automation provisions and releases resources according to business rules, the resources available and security demands. Without both features, a cloud would be merely infrastructure hosted somewhere else.

Multi-tenancy makes the economics work. Many customers share the same infrastructure and the same software instance, and each customer's data and configuration stay isolated from the others. The provider therefore avoids building dedicated hardware or software for each customer. See [Cloud Computing Foundations](#/concept/cloud-computing-foundations).

### Three service layers

Cloud services are organized in three layers, and each is built on the one below.

- **Infrastructure as a service (IaaS)** supplies a virtual server that is equivalent to a physical one, including its operating system. It comes in a public form, which is pay-as-you-go and self-service, and in a private form, which is governed by company policy.
- **Platform as a service (PaaS)** adds middleware, development tools and deployment services. The operating system is hidden from developers, so they work without operating-system expertise.
- **Software as a service (SaaS)** is a complete multi-tenant business application, such as Salesforce, Google's G Suite or Adobe Creative Cloud. The customer cares only about functions, performance, availability and security.

The platform layer is closely tied to two ways of working. DevOps merges development and operations so that features ship as soon as they are ready, and not in numbered releases. Agile development uses small cross-functional teams that work in sprints of two to four weeks. Platforms come in three variants. A public platform is the fastest route to deployment. A private platform runs inside a company's data center, which suits regulated industries whose auditors need in-person access. An open platform is built on open-source software to avoid dependence on one vendor.

SaaS changes both the architecture and the economics of software. Every customer shares one code base, so customers avoid the capital cost of scaling their own infrastructure, and maintenance and updates are bundled into the subscription. A customer can configure the application's behavior without touching its code, which keeps upgrades simple. Heavy process customization makes upgrades harder.

A single technical fault can affect every customer at once. SaaS vendors therefore have an unusually strong commercial reason to invest in uptime. Salesforce shows how such a business grows. Its "no software" pitch won small businesses first, because there was no capital cost and the monthly commitment made switching low-risk. Large enterprises followed more slowly. Salesforce later opened its platform to independent software vendors, which turned a SaaS product into a platform service. Partners gain faster time to market and access to qualified customers, and in exchange they carry the risk that the vendor changes its interfaces.

### Where clouds run

The deployment models differ mainly in ownership, access and control, and not in technology.

- A **public cloud** is owned and operated by a third party for use by many customers. Some customers pay a premium for dedicated instances when governance rules forbid sharing infrastructure.
- A **private cloud** is owned and operated by or exclusively for one organization, sits behind a firewall and is built around governance, security and compliance. Public vendors now sell appliance versions of their services that can be installed in a customer's own data center, which blurs the line between private and public.
- **Community and government clouds** are variants of public cloud. Open community clouds such as social networks offer low security and no service guarantee. Government clouds are segregated environments with stricter isolation and vetting, because a government data breach can become an international incident.

The terms hybrid and multicloud are often used loosely, but careful usage draws a precise line. A hybrid cloud requires that private and public resources work together toward a shared goal. An example is a public development platform that sends data to a private application. A disconnected public-cloud prototype, or divisions that each chose their own single public cloud, are not hybrid.

Multicloud means the coordinated use of two or more public clouds. Companies pursue it for developer choice, protection against one vendor's pricing or failures, and cost and performance advantages. Its goal of moving running workloads automatically between providers had not yet been reached, because the management tools and application portability were immature. In practice, multicloud often arises by accident, when teams or acquired companies choose different vendors.

Cloud adoption does not remove the data center. Most medium and large companies still run one for core systems such as accounting and inventory. Many turn a virtualized data center, in which software is separated from the hardware it runs on, into a private cloud, which becomes the foundation of a hybrid environment after the move to public cloud. Data sovereignty is a lasting reason for keeping some workloads in-house. It is the principle that stored data is subject to the laws of the country where it physically sits.

### Why hybrid became the default

Bain's 2019 analysis projected worldwide public cloud revenue above $275 billion by 2021, against at most $75 billion for private cloud. Yet the dominance of public cloud reflected trade-offs more than preference. Many enterprises would have preferred a private solution, and they chose public cloud because it was cheaper, richer in features and easier to integrate. Private cloud vendors therefore now compete by stressing integration with public services.

Satisfaction has improved unevenly. Cost is the largest source of dissatisfaction, because expected savings often fail to appear. Dissatisfaction with compliance and regulatory issues rose roughly 50 percent between 2016 and 2018, even as satisfaction with security and reliability improved. The parts of the value proposition mature at different rates.

### Cloud-native applications

Cloud-native architecture builds an application from small, independently deployable microservices. Each one serves a narrow function, is run by a small team and talks to the others only through standard interfaces. Changes become smaller and less risky, each service can scale on its own, and other teams can reuse a tested service without validating it again.

This is why moving an aging monolith to the cloud unchanged captures almost none of the benefit. The monolith keeps the same tangled dependencies it had before, and the gain comes from breaking it apart, not from relocating it.

Containers make microservices practical. A virtual machine imitates a physical server, and each machine runs its own full operating system. A container packages the application code with its dependencies instead, so it runs the same way in different environments and starts much faster. An application may contain hundreds or thousands of containers, so orchestration platforms automate installation, scaling, health checks and updates.

Kubernetes, created at Google and released as open source in 2014, became the dominant orchestration platform. It beat its rivals on functionality, on its ecosystem and on portability, because it runs on any public cloud, private cloud or company-owned hardware, which limits dependence on one vendor. The Cloud Native Computing Foundation defines cloud native by three properties. The application is packaged in containers, managed dynamically and oriented around microservices. The definition makes clear that an application is cloud-native because of how it is built and not because of where it runs.

### Standards

Without standards, a multicloud environment presents a different interface for every equivalent service, which makes integration, moving workloads and negotiating with vendors costly. Standards form in four ways. Multinational bodies such as ISO are legally grounded but slow. Industry consortiums are more streamlined and work even among competitors. Ad hoc groups, often built around open-source projects, move fastest but struggle with contentious decisions. De facto standards have no governing body and win through sheer extent of use.

The goals of standardization are interoperability, portability and security. Kubernetes is the central open-source standard for interoperability, so developers can write a service once and deploy it to any cloud that runs the same stack. Portability is harder for data than for applications, because data takes more varied forms and volumes and because its owner, not a technical specification, governs how it is handled.

## Go Deeper

- [Cloud Computing Foundations](#/concept/cloud-computing-foundations) — Service models, deployment models, cloud-native design and standards in depth.
- [Cloud and SaaS Business Economics](#/concept/cloud-and-saas-business-economics) — How cloud and SaaS change the economics of the technology industry.
