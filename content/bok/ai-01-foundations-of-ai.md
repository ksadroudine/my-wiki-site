## Summary

Modern AI is software that learns patterns from data instead of following rules written by programmers. This chapter explains how that learning works, how it led to foundation models and the language models behind chatbots, and why those models still make mistakes that cannot be fully removed. It also covers what scaling can and cannot be expected to deliver, the new vocabulary of 2025, the state of the debate about artificial general intelligence, and two practical ways of thinking about where AI fits in a business, as cheap prediction and as a choice between analytical and generative tools.

## Key Ideas

- Artificial intelligence, machine learning and deep learning are nested fields, and nearly all current AI is built by letting machines learn from examples.
- Foundation models are trained once on broad data and then adapted to many tasks, and large language models are the foundation models that work with text.
- A language model produces text by predicting the next word fragment, so it can state falsehoods with confidence, and no current technique removes this entirely.
- Better prediction has been the reliable result of scaling, while new abilities have not been predictable, and the supply of high-quality training data is a limit.
- No system has shown human-level general intelligence, although some researchers now expect AI to start improving itself within a few years.
- Economically, AI makes prediction cheap, which raises the value of human judgment and of the data and actions that surround each prediction.

## Foundations of AI

### From rules to learning

Traditional software follows instructions that a programmer wrote for every case. This works well for payroll and poorly for tasks such as recognizing a face, which people do easily but cannot describe as a list of rules.

Machine learning solves this by giving the computer examples and letting it find its own rules. Arthur Samuel defined the field in the 1950s as giving computers the ability to learn without being explicitly programmed. Artificial intelligence is the broad goal of making machines perform tasks that normally need human thinking. Machine learning is the main method used today, and deep learning is a branch of machine learning that uses neural networks with many layers. Each layer learns a little more than the one before it, from simple features such as edges to complex ones such as faces. See [AI and Machine Learning Foundations](#/concept/ai-and-machine-learning-foundations).

Machine learning systems are trained in three ways. Supervised learning uses examples that humans have labeled, and it is the most common method in business. Unsupervised learning looks for groupings in unlabeled data. Reinforcement learning improves by trial and error against a reward. The related field of data mining adds a standard project process, called CRISP-DM, and a set of common tasks such as classification and clustering. See [Data Mining Fundamentals](#/concept/data-mining-fundamentals).

Deep learning became practical only about a decade ago, when three things came together. Researchers found a way to train networks layer by layer, large amounts of digital data became available, and graphics processors turned out to run neural networks far faster than ordinary chips.

### Foundation models and language models

A foundation model is a model trained on very broad data that can then be adapted to many different tasks. Stanford researchers coined the term in 2021. Instead of building one model for each job, organizations start from one large model and adapt it, for example by training it a little further on their own examples.

Most of today's foundation models rely on the Transformer, an architecture introduced by Google researchers in 2017. Its key idea is attention, which lets the model look at every part of a passage at once and decide which words matter most for understanding any other word. Large language models, or LLMs, are foundation models trained on text, and they power chatbots and writing assistants.

Scale brings both benefits and a risk. Very large models show abilities that smaller versions lack. Because so many applications are built on the same few models, a flaw in one model is inherited by everything built on it. Researchers also admit that nobody fully understands how these models work internally or exactly when they fail.

### What a language model actually does

A language model does one thing repeatedly. It predicts the most likely next word fragment, called a token, adds it to the text and repeats. Outside software controls when the loop stops. The model does not look anything up, and it does not learn from a single correction during a conversation. Any apparent memory of earlier chats comes from a separate feature that feeds stored facts back into the next prompt.

This design explains the main limits. The model generates text that sounds right, and it has no built-in way to check whether a statement is true. A confident but false statement is called a hallucination. Prompting, retrieval and fact-checking reduce hallucinations, but they cannot guarantee that none occur, and the same is true of the sources a model cites.

The limits go beyond facts. Models can appear to reason without chaining logical steps reliably, can misread the structure of a question, and can write plans that sound sensible but ignore reality. A field experiment with more than 750 consultants at BCG showed the practical risk. Consultants using GPT-4 on one reasoning task were wrong 23 percent more often than those without it, because the model's confident explanation persuaded them not to check.

Organizations therefore design around these limits. They keep a person in the loop, using sampling or risk-based checks so that review stays affordable. They sometimes use a second model to check the first, remembering that the checker can also be wrong. They add other technologies, such as knowledge graphs and models trained on specialist data. See [LLM Mechanics, Limitations and Scaling](#/concept/llm-mechanics-limitations-and-scaling).

### Grounding a model in company data

A model knows only what was in its training data. A customer service chatbot built on a general model cannot see a customer's account or the company's current policies. Retrieval-augmented generation, usually shortened to RAG, closes this gap. It works like a librarian. First, the company's documents are indexed so that their meaning can be searched. Then, when a question arrives, the system finds the most relevant passages and gives them to the model, which writes an answer based on them and can cite them.

RAG is only as good as the data behind it. Out-of-date or biased documents produce confidently wrong or biased answers. RAG also stays useful when models can accept very long prompts, because too much material lowers quality, models pay less attention to the middle of a long prompt, and longer prompts cost more. See [Retrieval-Augmented Generation (RAG)](#/concept/retrieval-augmented-generation).

### What scaling can and cannot deliver

For years the path to better models seemed simple. More data, more computing power and bigger models reliably produced better next-word prediction, and this regularity is called a scaling law. The difficulty is that users care about new abilities, not prediction scores, and new abilities do not follow any comparable law. Tests that require a model to handle genuinely new kinds of tasks suggest that models may be better at working within patterns they have seen than at going beyond them.

Data is a nearer limit. Developers have already used most high-quality text, and even transcribing all of YouTube would add less usable text than the 15 trillion tokens used to train Llama 3. Synthetic data, which is training material produced by other models, helps fill specific gaps but has not replaced human-written data. As a result, developers have moved toward smaller models trained for longer, which are cheaper to run and often more capable than their larger predecessors.

### New vocabulary from 2025

Four terms from 2025 describe how models are now built and judged. Reasoning models work through problems in several steps, backtracking when needed, at a much higher computing cost. Evals are automated tests that decide whether a model is safe and capable enough to release. Synthetic data is training material made by one model for another, and it spreads the teacher model's mistakes if nobody supervises it. Vibes refers to judging a chatbot by its feel, for example whether its answers are concise or pandering, instead of by benchmark scores alone. See [2025 AI Industry Vocabulary](#/concept/ai-industry-vocabulary-2025).

### How close is general intelligence?

Artificial general intelligence, or AGI, means AI whose abilities match a human's across the board. The traditional test is the Turing test, in which an observer cannot tell the machine from a person. No system has passed it rigorously. Current chatbots, however fluent, are still narrow systems that predict answers to specific prompts.

Researchers have listed eight abilities that AI would need to combine, including perception, fine motor skills, language, problem-solving, creativity and social engagement. Most experts place AGI decades away, and a few doubt it will arrive this century. A newer concern is that AI is starting to help build AI. Anthropic co-founder Jack Clark estimates a 60 percent chance that a system will be able to create its own successor without human involvement by the end of 2028. Executives are advised to treat AGI as a long-term question to monitor, while investing in today's narrow AI. See [Artificial General Intelligence](#/concept/artificial-general-intelligence).

### Two practical ways to think about AI in business

The first is economic. The book Prediction Machines argues that what has become cheap is prediction, which means using the data you have to fill in information you lack. When something becomes cheap, people use more of it, and the things that go with it become more valuable. Prediction goes with data, judgment and action. A decision has three parts, which are predicting what will happen, judging how much each outcome matters and acting. Machines take over the first part, so human judgment becomes more valuable, not less. A common pattern is prediction by exception, in which the machine handles routine cases and sends unusual ones to a person. See [Prediction Machines](#/concept/prediction-machines).

The second is a choice of tool. Analytical AI, such as forecasting and fraud detection, suits narrow decisions that have clear goals, good data and quick feedback. Generative AI suits broad, ambiguous decisions, such as repositioning a brand, where it helps people see assumptions and options but should not make the decision. For narrow decisions it works best as an accelerator around an analytical core, for example by turning complaint transcripts into data a forecasting model can use. McKinsey's 2025 survey found that 88 percent of companies use AI, yet only about 40 percent see a positive effect on profit, which the research links to applying one kind of AI to every problem. See [Matching AI Type to Decision Type](#/concept/matching-ai-type-to-decision-type).

## Go Deeper

- [AI and Machine Learning Foundations](#/concept/ai-and-machine-learning-foundations) — The vocabulary and history of AI, deep learning, foundation models and the Transformer.
- [LLM Mechanics, Limitations and Scaling](#/concept/llm-mechanics-limitations-and-scaling) — How language models generate text, why they fail and what scaling can deliver.
- [Retrieval-Augmented Generation (RAG)](#/concept/retrieval-augmented-generation) — How models are grounded in an organization's own documents.
- [Data Mining Fundamentals](#/concept/data-mining-fundamentals) — Task types, the CRISP-DM project process and overfitting.
- [2025 AI Industry Vocabulary](#/concept/ai-industry-vocabulary-2025) — Reasoning models, evals, synthetic data and vibes.
- [Artificial General Intelligence](#/concept/artificial-general-intelligence) — What AGI would require and how close it may be.
- [Prediction Machines](#/concept/prediction-machines) — The economics of cheap prediction.
- [Matching AI Type to Decision Type](#/concept/matching-ai-type-to-decision-type) — Choosing between analytical and generative AI.
