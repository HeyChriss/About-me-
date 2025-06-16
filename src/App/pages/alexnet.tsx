import React from 'react';
import { BlogPost, Citation } from 'components';
import styled from 'styled-components';

const CodeBlock = styled.div`
  font-family: monospace;
  white-space: pre;
  overflow-x: auto;
  font-size: 12px;
  position: relative;
  text-align: left;
  padding: 20px;
  background-color: ${({ theme }) => theme.shadowColor};
  color: ${({ theme }) => theme.primaryTextColor};
  border-radius: 8px;
  margin-bottom: 20px;
  width: fit-content;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 15px;
    width: 100%;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }

  @media (max-width: 480px) {
    font-size: 9px;
    padding: 10px;
  }
`;

const AlexNet = () => {
  return (
    <BlogPost 
      title="AlexNet Architecture"
      author="Christian Mijangos"
      date="June 15, 2025"
      postId="alexnet"
    >
      <p>You can read the same post in my <a href=" https://medium.com/@christianmijangos.cm/alexnet-architecture-73f5781d5891">medium page</a>. </p>
      <p>
        Finding good neural network architectures is definitely hard, you have to keep in mind how clean your data is, 
        the amount of data you'll be training and of course, the layers and architecture you'll be using for your model.
      </p>

      <p>
        During one of my personal projects I researched AlexNet. AlexNet by Alex Krizhevsky is one of the most famous 
        neural network architectures. I heard about it the first time in one of my classes, but I really did not pay 
        attention to it, until a few weeks ago when I was recommended to use it for one of my personal projects.
      </p>

      <h3>What is AlexNet?</h3>
      <p>
        AlexNet is a convolutional neural network made by Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton, who 
        served as Krizhevsky's PhD advisor in 2012. AlexNet not only cause a revolution in deep learning and computer 
        vision, but also showed the importance of GPU and data augmentation.
      </p>

      <p>
        They achieved:
      </p>
      <ul>
        <li>37.5% top-1 error and 17.0% top-5 error on ImageNet LSVRC-2010</li>
        <li>15.3% top-5 error on ILSVRC-2012 (vs. 26.2% for second place)</li>
      </ul>

      <p>
        This was insane! Specially back in 2012 where image classification and deep learning were "brand new"
      </p>

      <h3>AlexNet Architecture</h3>
      <img src="/alexnet architecture.png" alt="AlexNet Architecture" />
      <p>
        AlexNet was much larger than previous CNN's used for computer vision tasks (e.g. Yann LeCun's LeNet paper in 1998). 
        This was the first architecture that used GPU to boost the training performance, and it took approximately 5 to 6 
        days with two GTX 580 3GB GPUs for training. AlexNet consists of 5 convolution layers, 3 max-pooling layers, 2 
        Normalized layers, 2 fully connected layers and 1 SoftMax layer.
      </p>

      <p>Here's a breakdown of the layers:</p>
      <ul>
        <li>8 learned layers total: 5 convolutional + 3 fully-connected</li>
        <li>60 million parameters and 650,000 neurons</li>
        <li>Input: 224×224×3 RGB images</li>
        <li>Output: 1000-class softmax for ImageNet categories</li>
      </ul>

      <p>Layer-by-layer breakdown:</p>
      <ol>
        <li>Conv1: 96 kernels (11×11×3), stride 4</li>
        <li>Conv2: 256 kernels (5×5×48)</li>
        <li>Conv3: 384 kernels (3×3×256)</li>
        <li>Conv4: 384 kernels (3×3×192)</li>
        <li>Conv5: 256 kernels (3×3×192)</li>
        <li>FC6: 4096 neurons</li>
        <li>FC7: 4096 neurons</li>
        <li>FC8: 1000 neurons (output)</li>
      </ol>

      <p>
        All of the layers containing the relu activation function and the softmax activation function at the end.
      </p>
      <img src="/relu.png" alt="ReLU" style={{ width: '30%' }} />
      <p>
        The architecture is pretty simple, but it is a good example of how to use a CNN for image classification.
      </p>

      <h3>Overfitting techniques in AlexNet</h3>
      <p>
        Overfitting is super common in neural networks. Neural networks are so good in memorizing things that when you 
        are training them your metrics are perfect, but when testing new data is so poorly done. I always like giving 
        the example of me when I was studying for tests in high school. I would do so great in the prep tests because 
        I knew all of the answers from the tests, but when I had the final test I struggled because I did not know the 
        new questions I was going to face, I was overfitting! Neural networks face the same challenges, they are so good 
        at memorizing things so you have to make the model understand that memorizing is not good.
      </p>

      <p>
        There are many techniques to avoid overfitting, but AlexNet used the following techniques:
      </p>
    <p>
      <strong>Local response normalization:</strong> Local response normalization is a technique that helps to avoid overfitting. 
      It is a technique that helps to normalize the response of the neurons. Honestly, this was the first time I heard about it and I had to 
      do some research to understand it. Growing up I was always the loudest in the class. I was the guy who people would 
      listen to me because I was the loudest, but I was never the smartest. My teacher though, he was the smartest. LRN's are like fair teachers who would put control in a class where students
      are loud. Teachers would tell the students to be quiet so he can hear every student equally. 
    </p>
    <p>
        It is the same with neurons, neurons tend to be loud and find patterns fast but sometimes it is the wrong pattern, therefore sometimes neurons have to be shut down
        and this is what LRM's do. LRN implements a form of lateral inhibition - where highly active neurons suppress the activity of nearby neurons. This creates competition between neuron outputs computed using different feature maps (kernels) at the same spatial position.
        This was used in AlexNet in the first two layers because it would stop a few very active feature maps from dominating and focus more in the general picture to avoid overfitting.
    </p>
    <p>
        Nowadays LRNs are not as popular as before because Batch Normalization in 2015 proved much more effective, however, LRN was crucial for AlexNet's success in 2012, when batch normalization didn't exist and networks were much harder to train effectively.
    </p>
    <p>
      <strong>Max-pooling:</strong> Max-pooling is a technique that reduces the size of the input by taking the maximum value 
      of a region of the input. This is good because it reduces the amount of parameters and it also helps to avoid overfitting.
    </p>
      <p>
        <strong>Max-pooling:</strong> Max-pooling is a technique that reduces the size of the input by taking the maximum value 
        of a region of the input. This is good because it reduces the amount of parameters and it also helps to avoid overfitting.
        They used a 3x3 window with a stride of 2. This means that the type of pooling they used was an overlapping pooling which I am 
        not going to get into the details of it, but it is simply taking the maximum value of a 3x3 window and moving it by 2 pixels.
      </p>
      <img src="/pooling.png" alt="Max-pooling" style={{ width: '30%' }} />

      <p>
        <strong>Data augmentation:</strong> Data augmentation is simple. It's adding different variation of the same image. 
        This is good because we are forcing the model to not memorize. Another good thing of data augmentation is that is 
        free data! Yes! If you do not have a lot of pictures of what you are training, you can make different copies of 
        it and that will add more to your data!
      </p>

      <p>
        The AlexNet team used <strong>mirroring</strong> which is simply taking the image and flip it by vertical axis. This is good because 
        it helps the model to not memorize the image and it also helps to avoid overfitting.
      </p>
      <img src="/mirror.png" alt="Mirroring" style={{ width: '50%' }} />
      <p>
        and <strong>Random crops</strong> which is creating different images of an image with different size input. 
        The AlexNet team extracted random crops of size 227×227 from inside the 256×256 image boundary to use as the network's inputs. 
        They increased the size of the data by a factor of 2048 using this method.
        </p>
      <img src="/crop.png" alt="Random crops" style={{ width: '50%' }} />
      <p>
        <strong>Dropout:</strong> Another method they used was dropout. I won't get into the details of dropout in this post, but it is simply 
        dropping random neurons in the layers so they stop communicating in propagation, this mitigates overfitting 
        because it forces the model to "drop" neurons and make other neurons learn the patterns instead of memorizing them.
      </p>
      <img src="/dropout.png" alt="Dropout" style={{ width: '50%' }} />

      <h3>Historical Significance</h3>
      <p>
        This paper essentially launched the deep learning revolution in computer vision by:
      </p>
      <ol>
        <li>Demonstrating that deep CNNs could dramatically outperform traditional computer vision methods</li>
        <li>Showing the importance of GPU computing for deep learning</li>
        <li>Introducing techniques (ReLU, dropout, data augmentation) that became standard</li>
        <li>Proving that large-scale datasets + deep networks = breakthrough performance</li>
      </ol>

      <p>
        The success of AlexNet sparked the rapid adoption of deep learning across computer vision and beyond, making it 
        one of the most influential papers in modern AI history.
      </p>

      <p>
        AlexNet was a game changer back in 2012. It is used by many people nowadays and it was a big step into the 
        computer vision and deep learning community.
      </p>

      <h3>Implementing AlexNet in Keras</h3>
      <p>
        Here's a practical example of how to implement AlexNet using Keras. This implementation follows the original 
        architecture while using modern Keras practices:
      </p>

      <CodeBlock>
        {`from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Dense, Flatten, Dropout
from tensorflow.keras.optimizers import SGD

def create_alexnet(input_shape=(224, 224, 3), num_classes=1000):
    model = Sequential([
        # Layer 1
        Conv2D(96, (11, 11), strides=4, padding='valid', activation='relu', input_shape=input_shape),
        MaxPooling2D(pool_size=(3, 3), strides=2),
        
        # Layer 2
        Conv2D(256, (5, 5), padding='same', activation='relu'),
        MaxPooling2D(pool_size=(3, 3), strides=2),
        
        # Layer 3
        Conv2D(384, (3, 3), padding='same', activation='relu'),
        
        # Layer 4
        Conv2D(384, (3, 3), padding='same', activation='relu'),
        
        # Layer 5
        Conv2D(256, (3, 3), padding='same', activation='relu'),
        MaxPooling2D(pool_size=(3, 3), strides=2),
        
        # Flatten and Dense layers
        Flatten(),
        Dense(4096, activation='relu'),
        Dropout(0.5),
        Dense(4096, activation='relu'),
        Dropout(0.5),
        Dense(num_classes, activation='softmax')
    ])
    
    # Compile the model
    model.compile(
        optimizer=SGD(learning_rate=0.01, momentum=0.9),
        loss='categorical_crossentropy',
        metrics=['accuracy']
    )
    
    return model

# Example usage:
def train_alexnet():
    # Create the model
    model = create_alexnet(num_classes=1000)
    
    # Train the model
    history = model.fit(
        train_generator,
        epochs=90,
        validation_data=validation_generator,
        callbacks=[
            tf.keras.callbacks.EarlyStopping(
                monitor='val_loss',
                patience=5,
                restore_best_weights=True
            )
        ]
    )
    
    return model, history`}
      </CodeBlock>

      <p>
        This implementation includes:
      </p>
      <ul>
        <li>The original AlexNet architecture with 5 convolutional layers and 3 fully connected layers</li>
        <li>ReLU activation functions after each convolutional and fully connected layer</li>
        <li>Max pooling layers for dimensionality reduction</li>
        <li>Dropout layers in the classifier to prevent overfitting</li>
        <li>A basic training setup with early stopping</li>
      </ul>

      <p>
        To use this model, you would need to:
      </p>
      <ol>
        <li>Prepare your dataset (images should be 224×224×3)</li>
        <li>Create a data generator for training and validation</li>
        <li>Initialize the model with the appropriate number of classes</li>
        <li>Train the model using the fit method</li>
      </ol>

      <p>
        Note that this is a basic implementation. In practice, you might want to add:
      </p>
      <ul>
        <li>Data augmentation using ImageDataGenerator</li>
        <li>Learning rate scheduling</li>
        <li>Model checkpointing</li>
        <li>TensorBoard logging</li>
        <li>Mixed precision training for better performance</li>
      </ul>

      <h3>References</h3>
      <Citation
        authors={['Krizhevsky, A.', 'Sutskever, I.', 'Hinton, G. E.']}
        year={2012}
        title="ImageNet Classification with Deep Convolutional
Neural Networks"
        url="https://proceedings.neurips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf"
      />
      <Citation
        authors={['Christian Mijangos']}
        year={2024}
        title="AlexNet Architecture"
        url="https://medium.com/@christianmijangos.cm/alexnet-architecture-73f5781d5891"
      />
      <Citation
        authors={['Siddhesh Bangar']}
        year={2022}
        title="AlexNet Architecture Explained"
        url="https://medium.com/@siddheshb008/alexnet-architecture-explained-b6240c528bd5"
      />

<Citation
        authors={['Sunita Nayak']}
        year={2018}
        title="Understanding AlexNet"
        url="https://learnopencv.com/understanding-alexnet/"
      />

    </BlogPost>
  );
};

export default AlexNet; 