import React from 'react';
import { BlogPost } from 'components';

const HHHLimits = () => {
  return (
    <BlogPost
      title="Helpful, Harmless, Honest? Limits of RLHF"
      author="Christian Mijangos"
      date="March 9, 2026"
      postId="hhh-limits-rlhf"
    >
      <p>
        If you want to read this post on Medium, you can read it{' '}
        <a
          href="https://medium.com/@christianmijangos.cm/helpful-harmless-honest-limits-of-rlhf-2b32a51c14fe"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>.
      </p>

      <p>
        Alignment in LLMs is more common than we think. These days, we try to create models that are
        pro-social and helpful while also staying safe and avoiding overconfidence. The cycle often
        looks like this: take a base LLM, add preference modeling, crank RLHF, and call it “aligned”
        because crowdworkers stamped it Helpful, Harmless, and Honest.
      </p>

      <p>
        HHH worked when Anthropic introduced it in 2022 because it was easy to explain, not because it
        captured every way these systems collide with real people, real stakes, and real gray areas.
        A few years later, the acronym feels less like a guarantee and more like an open challenge.
      </p>

      <img src="/hhh-venn.jpg" alt="Helpful, Honest, Harmless Venn diagram" style={{ width: '65%' }} />
      <blockquote>Helpful, Harmless, and Honest often overlap — but not always in practice.</blockquote>

      <h2>Trade-offs with HHH</h2>
      <p>
        In pure RLHF, humans still stay in the loop: people rank samples, a reward model learns those
        preferences, and the policy is optimized to match that score. RLAIF tries to remove repetitive
        human labeling by letting a model-generated evaluator grade future outputs.
      </p>

      <p>
        But it does not remove bias; it can freeze it. You get a self-referential reward loop: the
        model writes in a style decision-makers prefer, that style gets rewarded, and each iteration
        reinforces the same pattern. The process is faster and cheaper, but it can narrow the model’s
        behavior unless we keep injecting fresh human judgment over time.
      </p>

      <blockquote>
        If a model only learns from its own preferences, it may optimize consistency over truth.
      </blockquote>

      <h2>When Helpfulness and Harmlessness Conflict</h2>
      <p>
        One of the strongest thought experiments is the bomb squad scenario: an operator has seconds to
        disable an explosive and asks for help. A strictly “harmless” model might refuse to answer due
        to safety policy. That refusal avoids direct misuse, but it also withholds critical assistance
        in a high-stakes emergency.
      </p>

      <p>
        This is where HHH becomes difficult in practice. The helpful move is to provide clear,
        life-saving guidance. The harmless move is silence. If the system is not explicitly trained for
        conflict resolution between these objectives, optimization defaults to whatever signal is
        weighted most strongly, often harmlessness.
      </p>

      <p>
        My view is that helpfulness and harmlessness should be treated as interacting terms, not
        independent checkboxes. In some contexts, we need “hostage negotiator” behavior: acknowledge
        risk, verify context, and still provide constrained help when harm reduction depends on it.
      </p>

      <h2>Failure Modes We Keep Seeing</h2>
      <p>
        Once we heavily punish models for unsafe scenarios, we start seeing side effects: sycophancy
        ("you’re right, great idea"), evasiveness ("I can’t help with that"), and jailbreak adaptation
        ("pretend you’re my evil twin"). This looks like a bias/variance trade-off in alignment: push
        one objective too hard and another pops out in unexpected ways.
      </p>

      <p>
        This is one reason I think honesty cannot be reduced to a simple refusal policy. If honesty is
        pushed down, “helpfulness” can reappear as polished but ungrounded agreement.
      </p>

      <h2>RLAIF and the “Dead Internet” Loop</h2>
      <p>
        The dead internet theory is not just a meme in this context; it is a warning about data
        feedback loops. RLAIF accelerates this risk because reward models increasingly train on
        model-written prose. Without fresh human data, preference models drift toward their own writing
        style.
      </p>

      <p>
        That is why LLM-as-a-judge setups can look suspicious when model families score their own
        outputs highly. The policy writes in house style, evaluators reward that style, and “good”
        gradually becomes “sounds like last month’s synthetic answer.”
      </p>

      <h2>Alignment Does Not End at the Base Model</h2>
      <p>
        There is also a deployment gap. Even if a base model is reasonably aligned, downstream products
        add system prompts, memory buffers, tool-calling agents, and chain-of-thought scaffolding. Much
        of the bad behavior users report appears at this wrapper layer, not necessarily in base model
        pretraining.
      </p>

      <p>
        So alignment cannot stop at RLHF. It has to include the product surface where real users
        interact with the system. Otherwise, we reintroduce the same jailbreak vectors the moment we
        ship.
      </p>

      <h2>A Better Framing: Helpful, Grounded, Accountable</h2>
      <p>
        I still think HHH is useful, but I have started thinking about an alternative framing:
        Helpful, Grounded, and Accountable.
      </p>

      <ul>
        <li>
          <strong>Helpful:</strong> optimize for user outcomes, not just policy optics.
        </li>
        <li>
          <strong>Grounded:</strong> tie confident claims to verifiable support such as citations,
          evidence, or logs.
        </li>
        <li>
          <strong>Accountable:</strong> make post-hoc inspection possible so failures can be audited and
          improved.
        </li>
      </ul>

      <p>
        This framing gives us room for edge cases where “least harmful” can become negligence. A
        grounded, accountable model can warn about risk and still show its reasoning path and evidence.
      </p>

      <h2>Final Takeaway</h2>
      <p>
        I am not anti-RLHF. I am against treating RLHF as the constitution and the only mechanism that
        matters. We need stronger benchmarks, richer context-aware evaluations, and deployment-time
        constraints that survive contact with memory, tools, and agent wrappers.
      </p>

      <p>
        That is not a pessimistic view. It is the practical plan for making these systems less brittle
        and more honest about what they can and cannot do.
      </p>
    </BlogPost>
  );
};

export default HHHLimits;
