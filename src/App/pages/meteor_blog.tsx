import React from 'react';
import { BlogPost } from 'components';

const MeteorBlog = () => {
  return (
    <BlogPost 
      title="A Quick Introduction to METEOR"
      author="Christian Mijangos"
      date="March 3, 2026"
      postId="meteor-blog"
    >
      <p>You can read the same post in my <a href=" https://medium.com/@christianmijangos.cm/quick-introduction-to-meteor-843856c3f23f">medium page</a>. </p>
      <p>
        Why do we have so many different metrics, and why are they different? As a graduate student, I deal with many metrics, and I thought: Why don't we just have one metric that measures everything? Well… I am naive and impatient sometimes, but one thing I could agree on is that making a universal metric for machine translation would be a hard task to do. There are several metrics for MT and LLMS, and today I am going to be talking about METEOR.
      </p>

      <p>
        After reading the paper on BLEU and learning about the metric, I concluded that even though this metric was the first MT automated metric in 2002, it definitely had some flaws. The METEOR metric starts off addressing some of the problems BLEU had, so let's dive into some of the things that METEOR brings to the table.
      </p>

      <h2>What is METEOR, and why was it necessary?</h2>
      <p>
        METEOR (Metric for Evaluation of Translation with Explicit Ordering) primarily uses unigram matching, which was not new; BLEU also uses it. N-grams or unigrams are sequences of n items, such as words or tokens, used to evaluate text generation. There are different types of N-grams and different uses. If you want to read more about it, you can read <a href="https://www.geeksforgeeks.org/nlp/n-gram-language-modelling-with-nltk/" target="_blank" rel="noopener noreferrer">here</a>. BLEU uses N-gram precision, meaning that it cares about the exact match precision. It also has a brevity penalty and other things that I am not going to talk about here, but if you want to get more information, you can read the paper <a href="https://aclanthology.org/P02-1040.pdf" target="_blank" rel="noopener noreferrer">here</a>.
      </p>

      <p>
        METEOR uses N-gram precision; it does not focus on precision, but it focuses on recall and F1 score. Recall is necessary in these cases because recall measures how much of the reference translation is captured in the candidate translation. In other words: "Did the translation include all the important content?" One example I can think of is this:
      </p>

      <blockquote>
        <strong>Reference:</strong> The brown cat crossed the street.
        <br /><br />
        <strong>Candidate 1:</strong> The cat crossed.
        <br />
        <strong>Candidate 2:</strong> The brown cat crossed to the other side of the street.
      </blockquote>

      <p>
        In this case, BLEU would favor candidate 1 because it has high precision, that sentence does not capture all of the important content and lacks recall. Candidate 2 has a higher recall but lower precision for adding more words into the translation. By using an F-score that balances precision and recall, METEOR aims to reward translations that are both accurate and complete, which better reflects what we actually want from a good translation.
      </p>

      <p>
        I personally think that using BLEU and METEOR at the same time helps you understand how language works and have a better understanding of what the model is translating.
      </p>

      <img src="/meteor.webp" alt="METEOR Recall" style={{ width: '65%' }} />

      <h3>Fragmentation</h3>
      <p>
        METEOR counts the number of chunks, and these are groups of adjacent unigrams that are mapped to adjacent unigrams in the reference. Fragmentation measures how well the matching words are between the candidate and the reference word. The fragmentation penalty reduces the final score when word order differs significantly from the reference, even if all the words match. This helps METEOR prefer translations that not only have the right words but also have them in a sensible order!
      </p>

      <h2>What makes METEOR better?</h2>
      <p>
        METEOR recognizes semantic equivalence (synonyms, stems). It weighs recall more heavily than precision, segment-level evaluation is possible using METEOR and not just corpus level, and penalizes scrambled word order explicitly.
      </p>

      <h3>The Drawbacks</h3>
      <p>
        Not everything is pink. There are a couple of drawbacks to using METEOR. This metric is very complex, and it has multiple stages and parameters to tune. This metric is also language-dependent and requires stemming rules and human reference for training. The research paper argues that METEOR could explain correlation in words, correlation does not equal causation, and it misses semantic that synonyms do not cover.
      </p>

      <p>
        I am not being pessimistic about METEOR, but every metric has its cons and pros. I think that one of the questions I asked myself when I read the paper was how do we really balance complexity vs interpretability? I think that using various metrics could help us understand more about the translation we are using. The one thing I like about METEOR is that we can use it in a sentence and not at a corpus level as BLEU does.
      </p>

      <h2>Conclusion</h2>
      <p>
        In conclusion, METEOR is a good metric for testing and looking for correlation with human judgment. It is not corpus-level, so you can test it in sentences, debug, and see what the model is lacking and what it could be improved. I would strongly recommend reading the paper and learn how they did the evaluation and comparison with other models. This is the <a href="https://aclanthology.org/W05-0909.pdf" target="_blank" rel="noopener noreferrer">link for the paper</a>.
      </p>

      <p>
        Understanding different evaluation metrics like METEOR helps us become better practitioners in machine learning and natural language processing. Each metric tells us something different about our models, and using them together gives us a more complete picture of performance.
      </p>
    </BlogPost>
  );
};

export default MeteorBlog;