import React from 'react';
import { BlogPost } from 'components';

const MoralityLLMs = () => {
  return (
    <BlogPost 
      title="Can We Measure Morality and Values in LLMs?"
      author="Christian Mijangos"
      date="March 3, 2026"
      postId="morality-llms"
    >
      <p>You can read the same post in my <a href="https://medium.com/@christianmijangos.cm/can-we-measure-morality-and-values-in-llms-a029609d1f5a">medium page</a>. </p>
      <p>
        The other day, I was reading a paper about benchmarking, and I could not just let it go without sharing my thoughts. This post covers some of the pros and cons of having a morality benchmark for large language models (LLMs). This is my personal opinion, so please do not take it personally if it does not align with what you believe, but I think it might help you consider things you haven't thought about before.
      </p>
      <img src="/ethics.webp" alt="Morality" style={{ width: '65%' }} />
      <blockquote>
        LLM's and ethics are aligned with being "helpful, harmless and honest"
      </blockquote>

      <h2>Why Measuring Morality in LLMs Even Matters</h2>
      <p>
        Having an LLM determine what is and is not moral is an incredibly hard task. Moral identity is a deeply subjective topic, which raises the question: Does it even make sense to try to measure it within LLMs? I do think morality needs to be measured, but the real challenge is how you measure something so fluid. I have to acknowledge that the effort to measure values like this, and to publish papers about it, is very important because it shows that people genuinely care about the values embedded in AI systems.
      </p>

      <h2>The Core Problem: Morality Is Deeply Subjective</h2>
      <p>
        One of the biggest problems I see in trying to measure morality is generalization, and at the heart of that problem is bias. Bias is introduced during the pretraining stage of LLM development, and it is often shaped by the data the model is trained on. The challenge here is that what is considered moral and what is not is, in reality, a very subjective matter.
      </p>

      <p>
        For example, as a Christian, I might say that smoking or drinking is morally incorrect. But someone without a religious background might say those behaviors have nothing to do with morality at all. Who gets to decide what is moral? Most LLMs are trained predominantly on internet data. Does that mean the internet's implicit worldview becomes the moral compass of the model?
      </p>

      <p>
        Beyond religion and culture, there are also many levels of moral identity that humans navigate. People act differently in different situations, and their moral compass shifts with context. Are you the same person at school as you are at church? Do you hold the same moral expectations for someone in prison as you do for your own children? These are the kinds of questions we need to consider before attempting to build a moral LLM. Should we create a model that adjusts its moral reasoning based on context and scenario, or would it be more appropriate to have a base model that determines right from wrong regardless of context?
      </p>

      <p>
        Datasets are also inherently demographic. The Moral Foundations Theory, for instance, is supposed to be broad and general, but is it truly free of cultural bias, and how would we justify that claim? My personal view is that if we are building a moral model, it needs to be informed by other research fields such as psychology and ethics, not just data science and AI engineering.
      </p>
      <img src="/morality.webp" alt="MoralBench" style={{ width: '65%' }} />
      <h2>What Is MoralBench?</h2>
      <p>
        I first encountered the topic of LLM morality while reading a paper for one of my graduate courses. That paper was called MoralBench, and it is one of the most concrete attempts to create a benchmark for measuring morality in LLMs. I strongly recommend you read the paper <a href="https://dl.acm.org/doi/epdf/10.1145/3748239.3748246" target="_blank" rel="noopener noreferrer">here</a>.
      </p>

      <p>
        The authors used two datasets: MFQ-30LLM and MFV-LLM. The MFQ-30LLM is an adaptation of the Moral Foundations Questionnaire, which asks questions about the relevance of certain abstract principles to your personal decision-making process. The MFV-LLM is adapted from the Moral Foundations Vignette, which asks respondents to rate the degree to which a given behavior is morally wrong.
      </p>

      <p>
        Together, these create a kind of binary moral assessment. Given a statement with a ground truth, the LLM must produce a score between 1 and 5. The authors claim the model is rewarded not just for being right, but for aligning its level of agreement with the strength of human moral conviction. The way I picture this scoring system is like a normal distribution; there is a wide spectrum between "morally incorrect" and "morally correct," and the LLM has to locate where a given behavior falls on that spectrum.
      </p>

      <p>
        The scoring system has an interesting nuance: if the LLM agrees or disagrees strongly on a question, it receives a high penalty. But if the LLM responds with something like 2.5 out of 5 on a controversial question, the penalization is low. I see one major limitation here: what about questions that genuinely exist in gray areas? Some questions are not simply right or wrong, and polarizing questions do not always call for a firm yes or no answer. Penalizing strong conviction in those cases may not accurately reflect moral reasoning.
      </p>

      <p>
        There are also some questions in the dataset that gave me pause. One example asks how morally incorrect it is to eat ice cream with a fork. Does that really matter in a serious moral framework? It might matter to some people, but is it generalizable enough to be meaningful? I am not sure it is.
      </p>

      <h2>A Different Approach: The FAI Framework</h2>
      <p>
        While browsing online, I came across a website with the mission of evaluating AI not on capabilities like reasoning accuracy, task completion, or safety compliance, but on how well an AI model's responses help people flourish. The website is <a href="https://gloo.com/flourishing-hub/research" target="_blank" rel="noopener noreferrer">Gloo</a>, and they have built the FAI (Flourishing AI) evaluation framework around seven empirically validated dimensions of comprehensive human well-being, such as happiness, relationships, and faith. They offer two versions: FAI General and FAI Christian. They have fine-tuned models with guardrails and have thoroughly tested various open-source and closed-source models, including GPT and Grok.
      </p>

      <p>
        I think this is a really cool initiative, but one thing I was curious about was the dataset and how they are fine-tuning their models. According to their report, their dataset consists of 807 questions, both objective and subjective, covering all seven dimensions. The same questions are used for both the general benchmark (FAI-G) and the Christian worldview benchmark (FAI-C) to ensure a fair comparison.
      </p>
      <img src="/datamorality.webp" alt="FAI" style={{ width: '100%' }} />
      <blockquote>
        FIA Christian Results as of 02/01/2026
      </blockquote>

      <p>
        One issue I see here is the bias toward Christianity. I am not sure who the intended audience is (What Christian denomination is), but would someone from a different religious background be well-served by this LLM? This raises a broader question: what do people actually want from a moral AI? I think the answer ultimately depends on who is going to use it. I also wonder whether 807 questions are enough to capture nuance across seven dimensions. Would adding more questions, or more challenging edge cases, help the model better understand concepts like faith and morality?
      </p>

      <h2>Final Thoughts</h2>
      <p>
        I am not trying to debunk any technique or simply criticize these examples. In fact, I am grateful that people are trying to measure values and morality in LLMs. But what these efforts make me think about is just how important and how difficult it is to measure something as fluid and subjective as morality.
      </p>

      <p>
        At the end of the day, people are still the ones making decisions. I strongly believe that one thing humanity must be doing right now is taking AI ethics seriously. I see kids and adults alike turning to LLMs for help with therapy, relationship advice, and other deeply personal matters. While LLMs are powerful and increasingly general, knowing what is right and wrong, what is overconfident, and what is sycophancy, these distinctions are crucial right now. If you ask me how we can address this, my answer is education: we need to teach people and children in school about both AI ethics and human morality, so that when they encounter these systems, or when their children start chatting with ChatGPT, they have the tools to evaluate it critically themselves.
      </p>

      <p>
        The authors state that their goal was to "design a framework that fairly evaluates the moral identity of LLMs." I think this is a good-better-best kind of question. It is good to strive for moral identity in LLMs, but making that moral identity as nuanced and contextual as human morality may be something that is extremely difficult, or perhaps even impossible to fully achieve, given just how subjective morality really is.
      </p>

      <p>
        That said, the fact that researchers are trying matters. The conversation has to start somewhere, and MoralBench and FAI Network are a meaningful step in that direction, even if it is far from the last word on the subject.
      </p>
    </BlogPost>
  );
};

export default MoralityLLMs;