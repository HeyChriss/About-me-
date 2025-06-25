import React from 'react';
import { BlogPost, Citation } from 'components';



const Xception = () => {
  return (
    <BlogPost 
      title="Xception CNN Architecture"
      author="Christian Mijangos"
      date="June 24, 2025"
      postId="xception"
    >
        <p>You can read the same post in my <a href=" https://medium.com/@christianmijangos.cm/xception-cnn-architecture-b81366b2262d">medium page</a>. </p>
      <p>
        While working on a project, I decided to do research on the best CNN architectures, and I found Xception right away! While there are many pretrained models out there, this one caught my eye, and I decided to give it a try.
      </p>

      <h3>What is Xception?</h3>
      <p>
        Xception, an abbreviation for "Extreme Inception". It represents a milestone in convolutional neural network (CNN) design. Conceived by François Chollet, the creator of the Keras deep learning library, the model was introduced in 2016 while François was working at Google. This architecture demonstrates that cross-channel correlations and spatial correlations can be entirely decoupled, leading to more efficient computation without sacrificing performance. Don't worry, I will be explaining what that means in a little bit. The model was published in CVPR 2017 after initial arXiv release in October 2016. The development started because of a theory, while Inception modules used parallel convolution paths to capture different scales of features, Xception proposed that this approach could be taken to its logical extreme, and François wanted to map cross-channel correlation and spatial correlation could be completely separated, therefore the architecture's core innovation of depthwise separable convolutions.
      </p>

      <img src="/xception.png" alt="Simple representation of the Xception model" style={{ width: '65%' }} />

      <h3>Why is it special?</h3>
      <p>
        As I mentioned before, this architecture demonstrates that cross-channel correlations and spatial correlations can be entirely decoupled, leading to more efficient computation without sacrificing performance.
      </p>

      <p>
        I am going to break it down and go back to traditional CNN approaches. I will be a little techy explaining this, but hopefully I can explain it in the best way. In regular CNNs, when you apply a convolution filter, you are doing two things at once. You are doing spatial correlation, which is looking at the pixels like edges, textures, and others. And you are doing cross-channel correlation, which is combining color channels. For example, a 3×3×3 filter on an RGB image simultaneously:
      </p>
      <ul>
        <li>Analyzes a 3×3 spatial neighborhood (spatial correlation)</li>
        <li>Combines red, green, and blue channels (cross-channel correlation)</li>
      </ul>
      <img src="/spatial1.png" alt="Spatial" style={{ width: '85%' }} />

      <p>
        The assumption was: "We need to do both operations together to learn the best features." But Xception would do this completely separately. Xception would do Depthwise convolution, and it would do it in two steps.
      </p>

      <h4>Depthwise Convolution (Spatial part):</h4>
      <ul>
        <li>Apply 3×3 filters, but one filter per channel</li>
        <li>Red channel gets its own 3×3 filter, green gets its own, and blue gets its own, so this would capture the spatial pattern with each channel by itself</li>
        <li>No mixing between channels yet</li>
      </ul>

      <h4>Pointwise Convolution (Cross-Channel part):</h4>
      <ul>
        <li>Apply 1×1 filters across all channels at each pixel location</li>
        <li>This mixes information between channels but ignores spatial neighbors</li>
        <li>Purely about combining channel information</li>
      </ul>

      <p>
        The whole purpose of Xception was to separate these steps and get better results with less computation.
      </p>

      <p>
        Xception excels in scenarios requiring efficient parameter utilization and strong transfer learning capabilities. Medical imaging applications represent perhaps the most successful deployment domain, with studies achieving over 99% accuracy for COVID-19 detection from chest X-rays and breast cancer classification. This means that Xception is so good at feature extraction!
      </p>

      <h3>Xception's architecture</h3>
      <p>
        The architecture is a little crazy. Xception's architecture consists of 71 layers organized into 36 convolutional layers, and it is divided into three flows.
      </p>

      <ul>
        <li><strong>The Entry Flow</strong> comprises four modules responsible for initial feature extraction and progressive downsampling. It starts with standard convolutions (32 and 64 filters) and reduces spatial dimension from 299×299 to 19×19 while expanding channels from 3 to 728.</li>
        <li><strong>The Middle Flow</strong> contains eight identical modules that maintain spatial resolution at 19×19 while performing deep feature refinement at constant 19×19×728. This design helps with developing feature extractions without spatial reductions.</li>
        <li><strong>The Exit Flow</strong> handles final feature processing and classification through two modules. The first reduces spatial dimensions to 10×10 while expanding to 1024 channels, followed by separable convolutions producing 1536 and 2048 channels. This turns into classification at the end.</li>
      </ul>

      <img src="/xception model.png" alt="This is a representation of the architecture" style={{ width: '85%' }} />

      <p>
        Instead of regular convolutions, almost every layer uses:
      </p>
      <ul>
        <li><strong>Depthwise Conv:</strong> 3×3 filters applied separately to each channel</li>
        <li><strong>Pointwise Conv:</strong> 1×1 filters to mix channel information</li>
      </ul>

      <p>
        There are Residual Connections Everywhere! That helps with preventing degradation and having stable training. The combination of depthwise separable convolutions with residual learning creates a synergistic effect, where architectural efficiency combines with training stability to achieve superior performance.
      </p>

      <h3>Results</h3>
      <img src="/metrics.png" alt="Classification performance comparison on ImageNet" style={{ width: '85%' }} />

      <p>
        The performance of Xception is compared against Inception V3, ResNet-152, and VGG-16 on ImageNet and JFT datasets.
      </p>

      <h3>Conclusion</h3>
      <p>
        Xception is a great model because it shows that depthwise separable convolutions can serve as a direct replacement for traditional convolutions without sacrificing performance. Xception gets higher accuracy and better metrics. These improvements are achieved without increasing the number of model parameters; therefore, it is less computationally expensive, but I think that one potential limitation of Xception is its slightly slower training speed compared to other models, likely due to the current implementation of depthwise separable convolutions.
      </p>

      <h3>References</h3>
      <Citation 
        authors={["François Chollet"]}
        year={2017}
        title="Xception: Deep Learning with Depthwise Separable Convolutions"
        url="https://arxiv.org/pdf/1610.02357v3"
      />
      
      <Citation 
        authors={["Keras Team"]}
        year={2024}
        title="Xception - Keras Applications"
        url="https://keras.io/api/applications/xception/"
      />
    </BlogPost>
  );
};

export default Xception; 