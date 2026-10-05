## Summary

Most companies can start AI projects, but few can move them from pilot to everyday use and show a financial return. This chapter explains how to choose a first project, how organizations mature from experiments to scaled use, and why messy data and weak knowledge systems hold projects back. It also covers how to measure the value and quality of AI work, how people use generative AI in practice and where it helps or misleads them. Finally, it describes the human and technical obstacles to adoption, including hidden use, low-quality output and technical debt, which is the accumulated cost of software shortcuts.

## Key Ideas

- A pilot is a small trial of an AI idea, and the hard step is turning it into a system that works across the entire company.
- A good first project is small enough to finish in 6 to 12 months, specific to the industry and tied to measurable value.
- Going deep in one domain tends to pay off better than running many shallow pilots, yet only about 4 percent of companies take that path.
- Organizations that reach higher maturity, meaning more advanced and systematic use of AI, tend to earn above-average financial results.
- Technical measures such as accuracy often hide the business effect, so teams should measure the cost of errors and test applications with structured evaluations.
- People gain most from AI inside its area of strength and lose accuracy outside it, so users need to learn where that boundary lies.
- Adoption is mostly a human problem. Workers hide their use, managers lack ways to measure output, and AI can produce polished text with little substance.

## Deployment and Adoption

### From pilot to production

Many companies run a handful of AI pilots and then stall. KPMG describes the cause as a lack of enterprise readiness, not a failure of experiments. Pilots run on carefully prepared data. Production systems face data held in separate silos, many older interfaces and governance duties.

CGI names five conditions for scaling. They are an operating model fit for AI, modernized information technology, a data strategy that lets systems share data, agentic automation and a supportive culture with the right talent. CGI also warns that organizations fail in two ways, by moving too cautiously or too recklessly. See [AI Maturity, Scaling and Project Selection](#/concept/ai-scaling-and-maturity).

### Choosing the first project

Two simple tools help with the first choice. The first is a grid that plots risk against demand. Uses with high demand and low risk, such as marketing copy, learning content and text editing, deserve investment first. High-risk uses such as medical diagnosis and legal advice will be slowed by caution and regulation. Even low-risk output remains a first draft that needs review.

The second tool is Andrew Ng's list of five traits of a strong first pilot. It should deliver a quick win within 6 to 12 months, be the right size, be specific to the industry, involve credible outside partners and create value through lower cost, higher revenue or a new line of business. Running two or three pilots at once raises the odds of success. AI automates single tasks better than entire jobs, so a project should target a task. A cross-functional leader and a team of 5 to 15 people are enough to run one.

After the first win, depth matters more than breadth. Reckitt chose a narrow focus on marketing and achieved 60 percent faster product-concept generation. Only 4 percent of companies take this path, although they earn roughly double the return. Change management accounts for about 70 percent of the challenge.

### Maturity

MIT CISR describes four stages of AI maturity and reports how many companies sit in each. Experiment and Prepare holds 28 percent, Build Pilots and Capabilities holds 34 percent, Industrialize holds 31 percent and AI Future-Ready holds 7 percent. The first two stages perform below the industry average financially, and the last two perform above it.

### Data and knowledge first

Gartner predicted that 30 percent of generative AI initiatives would be abandoned after the proof of concept by the end of 2025. MIT Sloan Management Review traced the main cause to a knowledge-management problem more than to technology. Company data stays fragmented, hard to reach and underused.

The remedy has five groundwork steps. Start with visible pain points, judged on feasibility, viability and desirability. Put data and documents in order first, because AI cannot make up for messy source material. Integrate the technology stack properly, since a demo can run in weeks but a secure, compliant deployment at company scale can take a year or more. Build governance in from the start, instead of treating experimentation as free of compliance duties. Finally, drive adoption through culture, with leadership endorsement, grassroots experimentation and trusted champions.

Used well, generative AI changes how knowledge moves through a firm. McKinsey's Lilli tool, for example, drafts tailored text from more than 100,000 internal documents. HBR adds that augmenting a worker does not avoid automation. It hides automation at a lower level. For example, an assistant that augments the writing of product descriptions is in effect automating the first draft. See [Gen AI Organizational Learning and Knowledge](#/concept/gen-ai-organizational-learning-and-knowledge).

### Measuring value and quality

AI projects often fail to show value because their builders measure the wrong things. Data scientists say business measures such as return on investment matter most, yet they usually report technical ones such as accuracy. Accuracy treats every error as equally costly, which is rarely true. A legitimate payment that is wrongly blocked and a fraud that is missed cost a bank widely different amounts. An IBM study found that average return on enterprise AI was only 5.9 percent in late 2021, which is below the cost of capital.

For applications built on language models, the recommended method is evaluations, known as evals. A team gathers a representative set of test questions, studies the errors by hand and keeps logging real user interactions after launch. These evaluations show whether an application is good enough to ship, whether it keeps working and whether it survives an upgrade of the underlying model. See [Measuring AI Project Value and Quality](#/concept/measuring-ai-project-value-and-quality).

A related pitfall is Goodhart's Law. When a measure becomes a target, people game it until it no longer reflects the goal. Wells Fargo's cross-selling scandal is the standard example. Four ideas from machine learning help in designing indicators. Leaders can reassess metrics against the true objective, add unpredictability such as random audits, match the complexity of a metric to what the organization can oversee, and add constraints that make gaming costlier than performing well. The search for one perfect indicator usually ends with several. See [KPI Design in the AI Era](#/concept/kpi-design-in-the-ai-era).

### How people use generative AI

Research that mined online discussions found that the most common use of generative AI moved from technical help in 2024 to emotional needs in 2025, with therapy and companionship at the top. Usage reports from OpenAI and Anthropic broadly agree that use is concentrated in a few categories, although they disagree about how much is for coding. See [How People Actually Use Gen AI](#/concept/how-people-actually-use-genai).

The results of working with AI depend on where the task sits. Ethan Mollick calls the uneven edge of AI capability the jagged frontier, because AI can generate ideas yet fail to write a poem of exactly 50 words. In a field experiment with 758 BCG consultants, users of GPT-4 completed 12.2 percent more tasks, finished them 25.1 percent faster and produced output of 40 percent higher quality. Outside the frontier the picture reversed. On one such task, unaided consultants were right 84 percent of the time, while consultants using AI were right only 60 to 70 percent of the time.

Mollick describes two working patterns. In the Centaur pattern, the person and the AI divide the work cleanly. In the Cyborg pattern, they interleave their effort within a single task. An MIT review of 106 experiments found that human and AI teams on average beat humans alone, but did not beat the better of human-only or AI-only work. Combinations succeed mainly when each party handles the subtasks it does best. See [Working Effectively with Generative AI](#/concept/working-with-generative-ai).

### The human side of adoption

Workers have reasons to hide productivity gains. They may want credit for the work, or they may fear that a visible gain will lead the manager to conclude the job can be automated. Managers often lack output-based measures. The advice is to measure and reward results, because punishing lower effort for the same results only teaches employees to look busy.

AI also creates workslop, which is polished-looking content with too little substance. In a survey of 1,150 US workers, 40 percent reported receiving it in the previous month. Middle managers carry much of the strain, because they must translate strategy into practice and now need both AI knowledge and change-management skills. Companies also separate horizontal skills, which almost every knowledge worker needs, from vertical skills specific to a domain.

Johnson & Johnson shows a common path. After an open experimentation phase, it found that 85 percent of the value came from 15 percent of its applications, so it moved to a central governance council that vets projects. A four-country survey of executives found that almost three-quarters of businesses use AI, yet 86 percent of executives saw no measurable labor-productivity gain over three years. See [Organizational Readiness for AI Collaboration](#/concept/organizational-readiness-for-ai-collaboration).

### Technical debt

Technical debt is the accumulated cost of software shortcuts. The Consortium for Information and Software Quality puts its cost to the United States at $2.4 trillion a year, yet most organizations spend less than 20 percent of their technology budget on paying it down. AI coding tools add to the problem. GitClear found an eightfold rise in duplicated code blocks between 2020 and 2024, which coincided with the spread of AI assistants.

The risk is highest in older systems and for inexperienced developers, because the AI cannot see how the existing code base works. The aim is to manage debt strategically and not to remove all of it, because some debt is a reasonable investment. Accenture finds that well-prepared companies set aside about 15 percent of the IT budget for it. The PAID framework helps rank remediation by the level of debt and its effect on business value. See [Managing Technical Debt in the AI Era](#/concept/managing-technical-debt-in-the-ai-era).

## Go Deeper

- [AI Maturity, Scaling and Project Selection](#/concept/ai-scaling-and-maturity) — Choosing projects, crossing the pilot-to-production gap and the maturity stages.
- [Gen AI Organizational Learning and Knowledge](#/concept/gen-ai-organizational-learning-and-knowledge) — How generative AI changes knowledge workflows and what groundwork they need.
- [Measuring AI Project Value and Quality](#/concept/measuring-ai-project-value-and-quality) — Why technical metrics mislead and how evals work.
- [KPI Design in the AI Era](#/concept/kpi-design-in-the-ai-era) — Designing indicators that resist gaming.
- [How People Actually Use Gen AI](#/concept/how-people-actually-use-genai) — Evidence on what people use generative AI for.
- [Working Effectively with Generative AI](#/concept/working-with-generative-ai) — The jagged frontier and effective working habits.
- [Organizational Readiness for AI Collaboration](#/concept/organizational-readiness-for-ai-collaboration) — Human and organizational obstacles to adoption.
- [Managing Technical Debt in the AI Era](#/concept/managing-technical-debt-in-the-ai-era) — Software debt and AI-generated code.
