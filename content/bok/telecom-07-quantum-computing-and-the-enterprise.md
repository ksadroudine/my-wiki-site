## Summary

Quantum computing is a general-purpose enabling technology whose business value is likely to emerge gradually, through co-invention between vendors and users. This chapter explains why enterprises are better served by early, low-stakes experimentation than by waiting for the technology to look ready. It covers where commercial promise concentrates, which is chemistry and materials simulation, some optimization and fraud detection, and the security risk of Q-Day, the point at which quantum machines can break current public-key encryption. It also reports the early telecom uses, in radio network optimization and quantum-safe networking, and the technical limits and skeptics that temper the enthusiasm.

## Key Ideas

- Quantum computing is a general-purpose technology like electricity or classical computing, and its value emerges gradually, through repeated cycles of co-invention between vendors and users.
- Waiting until the technology is clearly ready is a trap, because uncertainty discourages experiments, which deprive vendors of the demand signals that would reduce the uncertainty.
- Exponential speed-ups are known for only two kinds of task, which are breaking common encryption and simulating quantum systems.
- Q-Day is the point at which quantum computers can break the encryption behind most digital security, and adversaries already collect encrypted data to decrypt later.
- Serious obstacles remain, including error-prone machines and an estimated need for at least 1,000 logical qubits.
- In telecom, operators pursue two separate tracks, which are optimization of radio networks and quantum-safe networking.

## Quantum Computing and the Enterprise

### Why early engagement

Quantum computing is described as a general-purpose technology in the tradition of electricity and classical computing. Its economic value is therefore not expected to arrive suddenly once a certain number of qubits or an error rate is reached. It emerges gradually, through cycles of co-invention between vendors and business users. The value of electricity depended on later innovations in motors and in the layout of factories, and the value of computing depended on complementary software and organizational processes. See [Quantum Computing Enterprise Strategy](#/concept/quantum-computing-enterprise-strategy).

This creates a catch-22 for managers. Companies want proof that the technology works before they invest in experiments, yet the proof usually exists only because companies experimented. Waiting sustains the uncertainty that makes waiting seem sensible, because vendors lack the demand signals needed to know what to improve.

Two examples show engagement whose value came from learning.

- In 2011, Lockheed Martin moved from a year of passive evaluation to a multiyear agreement of about $10 million for a D-Wave One quantum annealer. It paired the machine with a university research center for sustained, iterative learning.
- In 2016, IBM released a 5-qubit processor in the cloud. It had no commercial use on its own, and yet it attracted 7,000 registered users in a week and many more over time. This showed how broad, low-stakes access can accelerate an enabling technology.

The recommended actions for leaders are of three kinds. They should develop internal boundary spanners who translate progress in quantum computing into questions specific to the company. They should anchor learning in near-term opportunities where even modest quantum-inspired improvements justify experiments, such as Fujitsu's Digital Annealer for logistics routing and portfolio optimization, which runs on classical hardware. And they should create organizational space for longer-term redesign of processes, insulated from short-term financial measures. The contrast is between Walmart, which invested persistently at the level of processes in e-commerce, and Sears, which treated the internet as a peripheral channel bolted onto unchanged stores. The biggest winners from an enabling technology redesign their processes around what it newly makes possible.

### The race and the hype

The timing question matters because of the state of the industry. Google, IBM and Microsoft, with its Majorana 2 chip, target commercially useful machines around 2029 to 2030. Quantinuum, backed by Honeywell, held a Nasdaq initial public offering that valued it above $15 billion. IonQ's share price has risen more than 700 percent since September 2024. Venture investment passed $4 billion in 2026 by late September, almost as much as in all of 2025. McKinsey counted $12.6 billion invested in quantum startups in 2025, a six-fold rise, and the US government said that it would take $2 billion of equity in nine companies. Even so, the sector is what one investor calls a perpetual five-year technology, in which each advance reveals new constraints.

### Where the value will appear

Where value will appear is contested. Quantum machines are powerful but narrow. Superposition and entanglement let qubits represent exponentially many states, but reading out the answer collapses the superposition, so only problems with exploitable mathematical structure benefit. Exponential speed-ups are known for only two kinds of task, which are breaking common encryption and simulating quantum systems. Scott Aaronson estimates that quantum computers offer no advantage for about 90 percent of tasks. IonQ's chief executive argues that most near-term value will come from quadratic speed-ups, such as finishing a 24-hour bank task in 17 minutes. Nvidia's Jensen Huang has said that many optimization problems can already be solved with classical methods. A 2025 Fraunhofer study found that classical methods usually beat the Quantum Approximate Optimization Algorithm on real financial data, although hardware limits constrained the test.

Simulation of chemistry and materials is the strongest case. The standard classical method, density-functional theory, sometimes fails badly, as with the band gap of silicon. A hybrid simulation of a light-activated cancer drug, by Algorithmiq, the Cleveland Clinic and IBM, won a $2 million prize from the Wellcome organization. Backers predict profit-sharing deals with pharmaceutical and chemical companies worth hundreds of billions of dollars over a decade.

Partnerships and fraud detection are the most concrete near-term applications. Google has worked with Boehringer Ingelheim on drug discovery, Bosch on materials science, Mercedes-Benz on battery technology and Volkswagen on traffic optimization. This reflects a consensus that the near-term promise lies where quantum mechanics itself models the phenomenon. In financial services, an experimental fraud-detection system from Mastercard and Oxford Quantum Circuits produced fewer false positives than existing techniques, and research at Unisys achieved zero false negatives in testing. This addresses a weakness of conventional AI in fraud, where rare cases and shifting tactics leave too little training data.

Large companies are also hedging across hardware. Google has started a neutral-atom program and IBM bought a company that works on spin in silicon. The routes of superconducting circuits at Google and IBM, trapped ions at Quantinuum and IonQ, neutral atoms, photons and spin remain unsettled. IBM targets a fault-tolerant chip with 200 logical qubits by 2029, and DARPA's benchmarking initiative seeks to identify by 2033 which approaches can yield an industrially useful machine.

### Q-Day

The main security risk is Q-Day. It is the anticipated point at which quantum computers can break the cryptography that relies on the difficulty of factoring large prime numbers, which most digital security uses. Shor's algorithm of 1994 remains the template. Advances in error correction have reduced the estimated hardware needs. Work by Oratomic in March 2026 suggests that attacks might need only tens of thousands of physical qubits and not hundreds of thousands. Google outlined breaking cryptocurrency codes in minutes with 1,200 logical qubits. It published a zero-knowledge proof and not its method. Google is migrating internally to post-quantum cryptography by 2029, against a recommendation of 2035 from a US standards agency.

The threat already shapes behavior. In harvest-now-decrypt-later collection, adversaries steal encrypted data today in order to decrypt it later. A global effort on standards is under way. A long tail of systems cannot easily be upgraded, such as hospital equipment, cash machines, toll roads and sewage plants.

### The limits

Technical limits temper the enthusiasm. Current machines are highly error-prone because of noise from environmental disturbance. A working general-purpose quantum computer is estimated to need at least 1,000 logical qubits, and Oxford Quantum Circuits' Genesis system has 16 qubits. Credentialed skeptics argue that current approaches to error correction may never scale to the robustness required. Early claims of quantum advantage have not yet become commercial practice. These cautions refine the strategic argument and do not contradict it, because uncertainty is exactly what makes experimentation useful.

### Quantum computing in telecom

Telecom operators show the pattern in one industry, on two largely separate tracks.

- **Performance.** In a 2025 proof of concept, SoftBank used an Ising machine, a quantum architecture suited to combinatorial optimization, to tune the settings of radio base stations. It produced a 10 percent increase in 5G downlink speed and up to 50 percent more data capacity through carrier aggregation. SoftBank intends to extend the approach to wider network architecture and operational efficiency. Vodafone, BT Group, SK Telecom and Verizon are exploring their own network uses, with less public detail. Adoption accelerated in 2025, a shift that was not widely anticipated when attention was on AI and agentic AI.
- **Security.** Operators are investing in quantum-safe networking. It spans quantum key distribution, which uses quantum mechanical properties to detect eavesdropping on an exchange of keys, and post-quantum cryptography, which is classical algorithms designed to resist quantum attack. An industry survey reported by TelecomTV found that seven of the top ten organizations leading in this area are European, and that most operators surveyed intend to implement quantum-safe measures within four years. The effort is therefore treated as a near-term operating priority and not a distant concern.

## Go Deeper

- [Quantum Computing Enterprise Strategy](#/concept/quantum-computing-enterprise-strategy) — The case for early engagement, the industry landscape, Q-Day, technical limits and telecom uses in depth.
- [Enterprise Cyber Resilience](#/concept/enterprise-cyber-resilience-strategy) — Priorities for cyber resilience as AI and quantum change the threat.
