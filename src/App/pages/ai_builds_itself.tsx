import React from 'react';
import { BlogPost } from 'components';

const AIBuildsItself = () => {
  return (
    <BlogPost 
      title="What is going to happen when AI builds itself?"
      author="Christian Mijangos"
      date="June 10, 2026"
      postId="ai-builds-itself"
    >
      <p>
        You can read the same post on my <a href="https://medium.com/@christianmijangos.cm/what-is-going-to-happen-when-ai-builds-itself-f3780fbfe5c2" target="_blank" rel="noopener noreferrer">Medium page</a>.
      </p>

      <p><em>Moving towards recursive self-improvement and its implications</em></p>

      <p>
        Many things are happening nowadays. I usually try to read AI news after waking up and listen to podcasts on my morning runs to keep up, but lately I have been feeling more and more behind. The rise of AI and how quickly things are moving is exciting, but also scary. I get excited because I get to see how efficient and accessible AI has become in the software and research industries. I am currently researching AI safety, interpretability, and alignment, but behind that excitement and hype, the other side of the coin shows how much we still don't know. Research on AI safety and alignment is not as common as it should be.
      </p>

      <p>
        Before becoming a computer scientist, I always believed strongly in ethics and safety in technology. The Spider-Man phrase comes to mind: "With great power comes great responsibility" and sometimes, as humans, we care about the power and treat responsibility as secondary. I think that in order to become more powerful, we must first understand our responsibilities.
      </p>

      <p>
        This morning, I was reading <a href="https://www.anthropic.com/research/when-ai-builds-itself" target="_blank" rel="noopener noreferrer">"When AI Builds Itself"</a> by Anthropic, and I am seriously impressed by how Anthropic has taken matters into its own hands. Recursive self-improvement in AI is a game-changer. I love how the article traces the journey from the first Claude model all the way to the current era of autonomous agents.
      </p>

      <img src="/claude 1.webp" alt="Claude journey by Anthropic" style={{ width: '65%' }} />

      <p>
        The rate of AI progress is inevitable, and as I mentioned, it is hard to keep up. New models are released every day. New research papers and articles surface constantly. X is full of experiments and opinions. GitHub repos gain stars by the minute. LinkedIn posts flood my feed daily. Benchmarks get passed, and new benchmarks emerge to keep pace with the models. Public benchmarks say a lot about the capabilities of these systems, but they can't reveal the impact AI is already having on speeding up AI development itself.
      </p>

      <p>
        Anthropic argues that in order to build frontier models, two things are needed: engineering and research. The engineering side covers coding and software design, and LLMs are exceptional at this. Engineers no longer have to write code from scratch; LLMs handle that, and with some human guidance, engineering tasks get done efficiently. The research side covers designing experiments, interpreting results, and generating new ideas. Large performance gaps still persist when it comes to LLMs exercising judgment in choosing goals across both tracks.
      </p>

      <p>
        The bottleneck in software companies is no longer about writing code; it's about problem-solving and research. Most of my job now is not writing code, but designing solutions, giving direction, reviewing the output, and figuring out what needs to be tweaked to reach the end goal. The way I see it: humans have ideas, and LLMs implement, test, and evaluate them faster than any human could. LLMs can now run better experiments and better research than they could just a year ago. We are approaching a point where LLMs will be able to train, evaluate, and improve themselves. That is the core argument of the Anthropic article.
      </p>

      <p>
        The evidence suggests that the human role is narrowing at each step in the AI development process. We will stop writing code and shift to reviewing it. The article argues that this reviewing step is where the next bottleneck will appear. Software companies are shipping faster than ever, but review and QA take longer because those tasks are still done by humans. For now, the one thing humans retain is choosing what problem to work on. LLMs are powerful, but they cannot decide what is worth solving.
      </p>

      <img src="/claude 2.webp" alt="The practical ceiling line measures an ideal answer written by a model that could see the whole session" style={{ width: '100%' }} />

      <blockquote>
        How to read this: The practical ceiling line measures an "ideal" answer written by a model that could see the whole session (including how it ended).
      </blockquote>

      <p>
        This is where it gets interesting. Anthropic asks: what if we're wrong about that, too? We have seen AI go from struggling with something to mastering it. I remember being a college student in 2023, thinking, "AI is good at writing code, but it lacks software design principles. The functions aren't cohesive, the code isn't maintainable or robust." Now, AI is so capable in design patterns and software architecture that many people rely on it to create entire systems. The improvement since 2023 is remarkable. And experience shows that AI gets good at anything it learns, so Anthropic lays out three future scenarios:
      </p>

      <h2>Scenario 1: The curve flattens</h2>
      <p>
        Progress hits a wall. Either models can't scale past certain capability thresholds, or we simply run out of chips and energy to keep pushing. Even if that happens, today's AI is already capable enough to cause significant economic shifts. It seems as though this scenario is included mostly for completeness, and I don't think Anthropic truly believes it's the likely outcome.
      </p>

      <h2>Scenario 2: Compounding efficiency, humans still in the loop</h2>
      <p>
        AI automates a lot of the work, but humans are still steering. Companies become wildly more productive. Think 100 people doing the work of 100,000. Knowledge work gets revolutionized, but so do the bad use cases: surveillance, manipulation at scale, and targeted influence operations. If this scenario plays out, the bottleneck shifts too. Anthropic is already seeing it by pushing more code, which means human code review becomes the new bottleneck (Amdahl's law at work). This is the scenario they believe is most likely, and honestly, it's the one I prefer too.
      </p>

      <h2>Scenario 3: Full recursive self-improvement</h2>
      <p>
        AI builds its own successors. Humans mostly just oversee and verify. Progress becomes limited only by computing power, not by human research capacity. Chips, GPUs, and hardware availability become the bottleneck. Nobody really knows what this looks like economically or socially. I have heard researchers discuss this scenario, and honestly, it doesn't sound great. It's just too hard to model a world where human labor is no longer competitive. The bottleneck keeps moving, and whoever adapts fastest is the one who stays ahead of the wave.
      </p>

      <img src="/claude 3.webp" alt="Three future scenarios for recursive self-improvement in AI" style={{ width: '65%' }} />

      <blockquote>
        "If it were possible to effectively slow the development of this technology to give ourselves more time to deal with its immense implications, we think that would likely be a good thing. But if a slowdown simply lets the least cautious actors catch up technologically, it could leave everyone less safe. Without a global coordination mechanism, companies and governments will have to make difficult decisions about safety while under competitive and geopolitical pressures."
      </blockquote>

      <p>
        Think about that. We could, in theory, pause AI development and truly focus on alignment and safety, and use that time to change course and prepare more thoughtfully for what comes next. I love the idea. But it is not going to happen. There's no realistic path where governments and enterprises simply stop working. I cannot see the US and China agreeing to a sabbatical year of AI development. And even if they publicly committed to it, they wouldn't stop. I imagine people in hidden labs or on dark markets continuing to push forward and that would be the worst possible outcome. I wish we could have that pause. Unfortunately, it isn't realistic.
      </p>

      <p>
        Anthropic says it will keep researching these scenarios and publishing its findings. I'm genuinely excited to see what they come up with, but this is also a wake-up call for everyone. Not just computer scientists, AI engineers, and business leaders in Silicon Valley. Everyone needs to be aware of this. I hope that in the coming months we will have a clearer vision of what the future holds, but it all starts with AI literacy for everyone.
      </p>

      <h2>References</h2>
      <ul>
        <li><a href="https://www.anthropic.com/research/when-ai-builds-itself" target="_blank" rel="noopener noreferrer">When AI builds itself — Anthropic</a></li>
        <li><a href="https://www.forbes.com/sites/lanceeliot/2025/03/10/anthropic-declares-that-the-next-big-step-for-humans-and-ai-is-ai-that-builds-itself-via-recursive-self-improvement/" target="_blank" rel="noopener noreferrer">Anthropic Declares That The Next Big Step For Humans And AI Is AI That Builds Itself Via Recursive Self-Improvement — Forbes</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Recursive_self-improvement" target="_blank" rel="noopener noreferrer">Recursive self-improvement — Wikipedia</a></li>
      </ul>
    </BlogPost>
  );
};

export default AIBuildsItself;
