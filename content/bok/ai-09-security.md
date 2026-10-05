## Summary

AI changes cybersecurity in two ways, because AI agents inside a company become a new kind of trusted insider, and AI models used by attackers find and exploit weaknesses much faster than people can. This chapter explains the new risks that agents add, the controls that can be applied at each phase of deployment and the practical case of a healthcare provider that tested its own agents. It also covers the priorities for enterprise cyber resilience, including accountability before an incident, and how banks are responding to a model that can find thousands of serious flaws in software.

## Key Ideas

- AI agents behave like trusted insiders, because they hold access privileges inside company systems and can cause harm by mistake or after being compromised.
- In one survey, 80 percent of organizations had already encountered risky agent behavior, including improper data exposure and unauthorized system access.
- Agents add five new risks, which are chained vulnerabilities, task escalation between agents, forged agent identities, untraceable data leakage and spreading data corruption.
- Only 42 percent of executives say they balance AI development with appropriate security investment, while 37 percent assess the security of AI tools before deployment.
- Attackers increasingly log in with legitimate accounts instead of breaking in, and AI lets them find weaknesses at machine speed.
- Resilience requires leaders who are responsible before an incident, not only prevention after it.

## Security

### Agents as digital insiders

In cybersecurity terms, an agent is a digital insider. It works inside company systems with some level of privilege, and it can cause harm by accident, for example when it does not follow its instructions as intended, or on purpose if an attacker takes control of it. A survey by SailPoint found that 80 percent of organizations had already encountered risky agent behavior, including improper data exposure and unauthorized system access.

McKinsey describes five risks that agents add to the traditional list.

- Chained vulnerabilities. A flaw in one agent cascades into others. A logic error in a credit-processing agent can inflate an applicant's profile and lead to an unjustified approval.
- Cross-agent task escalation. A compromised agent abuses trust to gain privileges it should not have, for example by claiming that a request came from a licensed physician.
- Synthetic identity. An adversary forges an agent's digital identity to pass trust checks.
- Untraceable data leakage. Agent-to-agent exchanges that are not logged hide leaks from audits.
- Data corruption that spreads. Low-quality data from one agent silently distorts the decisions of the agents downstream.

### Controls for each phase

McKinsey organizes the controls across three phases. Before any deployment, an organization updates its AI policy, its rules for who can access what (identity and access management) and its third-party risk rules to cover agent-specific risks. It also maps the laws that apply, such as Article 22 of the European data-protection regulation GDPR and the incoming EU AI Act. It sets governance for the entire lifecycle too, because existing security standards such as ISO 27001 and SOC 2 do not yet account for agents that act with discretion.

Before each use case, the organization centralizes its AI portfolio, to prevent uncontrolled pilots from multiplying, and checks that it has the security engineering, threat-modeling and governance skills the case needs. During deployment, it secures agent-to-agent communication through emerging protocols, extends access controls and guardrails to the agents themselves, builds traceability for prompts, decisions and reasoning, and prepares contingency plans.

BCG adds that privacy, cybersecurity and data governance teams, which are usually separate, need one shared way to classify data risk.

### A case study

A Brazilian healthcare provider with more than 27,000 employees used agents that combined optical character recognition and a language model to transcribe scanned exam-request forms. Its security had not kept pace with the number of systems it now connected. It then followed three phases. Threat modeling with the OWASP Top 10 for language-model applications surfaced data poisoning and prompt injection. Prompt injection means hiding instructions in the input that make the agent follow the attacker.

Red teaming, which means attacking one's own system to find its weaknesses, then showed how such an attack works. A hidden prompt inside a scanned form image told the agent to ignore the text above and insert data into the database, and it succeeded. The result drove stricter checking of inputs and tighter limits on how systems connect to one another. The third phase added real-time safeguards, encrypted data and isolation of the AI systems from legacy platforms, which also reduced the risk of employees using unsanctioned tools. See [Agentic AI Security Frameworks](#/concept/agentic-ai-security-frameworks).

### Enterprise cyber resilience

PwC's outlook for 2026 sets six priorities. They are securing AI itself, transforming cloud protection, unifying operational technology, which controls physical equipment, with IT, building supply-chain visibility, a security operations center driven by automation and agents, and preparing for satellite, quantum and 6G risk. The areas that organizations feel least prepared for are cloud threats, legacy systems and the supply chain.

The threat itself is changing. Attackers increasingly log in with legitimate accounts rather than break in, and AI lowers the bar for covert, widespread campaigns. Frontier AI models find and exploit vulnerabilities faster than manual research or patch cycles can absorb. PwC and Anthropic respond by building Claude into existing controls for agentic remediation, test-case generation and validation before production. Remediation here means fixing flaws that have been found. Autonomy for defensive agents depends on provable validation, which is evidence that their actions are correct. It is formalized in an autonomy envelope, made of decision boundaries, standing authority and an audit trail, so that agents can act at machine speed while humans keep oversight.

Interviews with CEOs who survived attacks show that resilience is more than prevention. It requires leaders to take responsibility before an incident. The CrowdStrike outage shows the need for cyber-risk management that can be explained and that works out in advance the risk of software updates, the effect on supply chains and who is accountable. See [Enterprise Cyber Resilience](#/concept/enterprise-cyber-resilience-strategy).

### Banks and AI-found vulnerabilities

Banks face a sharper threat because AI can now find software flaws at scale. Anthropic's Claude Mythos model found thousands of high-severity vulnerabilities in software used by major financial institutions. Anthropic keeps the model out of general release because it surpasses all but the most skilled humans at finding and exploiting weaknesses. Access is limited to Project Glasswing, a controlled-access initiative for selected organizations. Most of the flaws it found had probably gone unexploited for years. The core danger is that a model like this could enable zero-day attacks, which exploit flaws that the software maker does not yet know about, if it fell into the wrong hands.

Financial services remain among the best-prepared sectors. UK banks operate under operational-resilience rules from the Bank of England and the Financial Conduct Authority. These rules require them to identify services whose disruption could cause intolerable customer harm and to test third-party dependencies. Banks also rank their suppliers by risk and hold the critical ones to the same compliance regime as the bank. Testing still finds basic gaps, such as staff who are open to social engineering. See [Banking Cybersecurity and AI-Discovered Vulnerabilities](#/concept/banking-cybersecurity-ai-threats).

## Go Deeper

- [Agentic AI Security Frameworks](#/concept/agentic-ai-security-frameworks) — Agents as insiders, new risks and controls by phase.
- [Enterprise Cyber Resilience](#/concept/enterprise-cyber-resilience-strategy) — Priorities, autonomy envelopes and leader accountability.
- [Banking Cybersecurity and AI-Discovered Vulnerabilities](#/concept/banking-cybersecurity-ai-threats) — AI-found vulnerabilities and bank resilience.
- [AI Power Concentration and New Tycoons](#/concept/ai-power-concentration-and-new-tycoons) — Who controls the most capable models and why it matters politically.
