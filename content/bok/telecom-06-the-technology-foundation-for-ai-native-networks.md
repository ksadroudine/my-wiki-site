## Summary

AI-native telecom networks need a different technology foundation from the batch analytics that operators have used for years. This chapter explains the two prerequisites, which are clean multi-vendor data and a cloud-native, programmable network, and the changes needed in computing, networking and storage. It describes teams of specialized agents that act on network, customer and billing data in real time, and the privacy, security, compliance and critical-infrastructure risks that their autonomy creates. It also covers the workload-by-workload choice of where AI runs, with training and sensitive data increasingly kept under operator control, inference at the edge and customer-facing agents in the public cloud with on-premises fallback.

## Key Ideas

- An AI-native network needs constant, real-time understanding of the state of the network, which earlier uses of AI such as predictive maintenance did not demand.
- Two prerequisites come first. Data from many vendors must be collected, normalized and cleaned, and the network must be cloud-native so that AI can act on it.
- Computing, networking and storage all need to change, with graphics processors, very fast low-latency networking and high-performance flash storage.
- Agents are attractive partly because about 60 percent of the fiber technician workforce is on track to retire, and agents can capture tacit knowledge.
- Agents bring four risks, which are data privacy exposure, hijacking of autonomous decisions, cross-border compliance and cascading effects on critical infrastructure.
- Where each AI workload runs is decided one workload at a time, according to its needs for delay, sovereignty and control.

## The Technology Foundation for AI-Native Networks

### A different ambition

Operators have used AI for years in predictive maintenance and customer analytics. The ambition behind AI-native networks is qualitatively different. It requires processing large amounts of real-time network data fast and precisely enough to allow dynamic optimization, automation and eventually autonomous operation, instead of periodic batch analysis. The central claim of the roadmap is that this cannot be achieved by adding new tools to an unchanged architecture, because AI has to be built into the operational foundation of the network, supported by new data, infrastructure and expertise. See [Telecom AI Technology and Infrastructure](#/concept/telecom-ai-technology).

### Two prerequisites

Two prerequisites come before any specific capability.

1. **Data handling.** Data from several vendors must be collected, normalized and cleaned. This is difficult in telecom, because equipment and software from many suppliers use inconsistent formats and conventions, and unreliable inputs produce unreliable outputs however sophisticated the model is.
2. **A cloud-native architecture.** This means open interfaces, APIs and technologies that virtualize and softwarize the network, including Network Functions Virtualization, Software-Defined Networking and Open RAN. Automation needs programmable network functions to act on. Without that layer, an AI system might diagnose a problem correctly and still have no standard way to fix it.

### Rethinking computing, networking and storage

Three infrastructure domains need to be rethought.

- **Computing** should add graphics processors for AI and machine-learning work. Training is compute-intensive and tolerant of delay, so it belongs in private clouds. Inference must respond to live conditions, so it belongs at the edge of the network.
- **Networking** should add SmartNICs, which are network cards that take over data processing, high-bandwidth Ethernet at 100 or 400 gigabits, and low-latency interconnects such as InfiniBand or RDMA over Converged Ethernet, because AI traffic can overwhelm conventional networks.
- **Storage** should move to high-performance flash with object-storage capabilities that work coherently across hybrid and multicloud environments.

The roadmap also names organizational prerequisites. Operators need internal data literacy and AI expertise to manage proprietary datasets, because infrastructure alone does not produce working AI-native operations. They are advised to develop smaller proprietary models for their own network conditions and not to depend entirely on general-purpose models from third parties. This keeps control over where data is stored, how it is processed and how models are trained. Any AI solution from a vendor should be tested and tuned on the operator's own production data before it is trusted, because vendors' performance claims often fail independent scrutiny. The roadmap expects these changes to take significant time and sustained effort before they deliver measurable savings. It treats them as a multi-layer strategic transformation and not as a technology upgrade.

### Teams of agents

On top of this foundation, operators are adopting agentic AI, which is coordinated teams of specialized agents and not a single large model. Their purpose is to handle the volume and speed of the data that networks generate, including telemetry, billing records, customer interaction logs and service feedback. One described architecture has these parts.

- A **data aggregation agent** continuously takes in network measurements, customer data, billing records and signals of experience.
- A **master orchestrator agent** correlates insights across the agents and resolves conflicts between them.
- A **network optimization agent** tunes performance, capacity and availability.
- A **customer experience agent** uses behavioral and service signals to personalize interactions and reduce churn.
- A **fraud detection agent** watches billing and use for anomalies that indicate revenue leakage.
- **Analytics and reporting agents** produce insight for the business.

A service optimization layer aligns network behavior, customer outcomes and business goals. The intended result is a shift from reactive, manual workflows to autonomous operation in real time. This is what the source means by telecom becoming AI-native, as opposed to simply using AI tools.

Agents are also attractive because of a talent problem. An estimated 60 percent of the fiber technician workforce is on track to retire, and much of the tacit knowledge that keeps networks running lives only in experienced employees' heads. Examples are undocumented processes and expertise with niche tools. Traditional automation scripts need clean, pre-structured data. Agents are built to reason over structured data from systems and unstructured field reports, transcripts and documents together, so they can capture and spread institutional knowledge. In one field example, a multimodal agent helps a technician diagnose an outage caused by a storm. It interprets visual data on site while querying back-end systems, proposes a resolution consistent with best practice and coordinates with other operators when infrastructure is shared. The technician stays in the loop. The same flexibility has a limit. Agents are only as effective as the environment they enter, and without clean data, documented processes and governance they spread errors faster instead of fixing operations. A Gartner finding points the same way. It found that 63 percent of organizations lack confidence in their data practices for AI readiness, and it predicted that 60 percent of AI projects would be abandoned by 2026 for lack of data that is ready for AI.

### Four risks and their mitigation

Agentic AI in telecom carries four categories of risk. The first is exposure of private data. The second is vulnerability to hijacking of autonomous decisions. The third is the complexity of complying with rules in several countries. The fourth is cascading effects on critical infrastructure.

Hallucination by language models also remains an unresolved concern for agents that rely on the output of models. The proposed mitigations are layered security and patching, embedded compliance checks with audit logs, human oversight with manual escalation, decisions that can be explained, and fail-safe designs that revert to baseline operation.

### Where AI workloads run

Hybrid cloud has become essential for operators, because AI workloads differ in their needs for latency, sovereignty and control. The choice is made one workload at a time.

- **Sensitive model training and data lakes** are moving back toward on-premises or hybrid placement, using federated learning.
- **Real-time network functions**, such as optimizing the radio network and detecting fraud, need inference at the edge. The virtualized radio network and the user-plane function stay on premises, with AI inference running on top.
- **Systems for operations and business support, and customer experience** move to generative AI agents in the public cloud, with on-premises fallback.

Hyperscalers are answering with cloud services built to telecom standards, such as metro zones with low latency and performance guarantees backed by service-level agreements. This narrows the traditional case for keeping workloads on premises.

## Go Deeper

- [Telecom AI Technology and Infrastructure](#/concept/telecom-ai-technology) — The infrastructure roadmap, multi-agent architecture, risks and workload placement in depth.
- [Agentic AI Platform Architecture](#/concept/agentic-ai-platform-architecture) — A platform of interchangeable parts for running many agents.
- [Agentic AI Security Frameworks](#/concept/agentic-ai-security-frameworks) — Security controls for agents that act as insiders.
