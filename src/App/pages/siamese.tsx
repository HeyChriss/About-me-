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

const Siamese = () => {
  return (
    <BlogPost 
      title="Siamese Neural Networks"
      author="Christian Mijangos"
      date="June 19, 2025"
      postId="siamese"
      
    >
<p>You can read the same post in my <a href=" https://medium.com/@christianmijangos.cm/siamese-neural-networks-dfb84a4a37b3">medium page</a>. </p>
      <p>
        One of the problems you'll eventually encounter is that neural networks require time to train, and it can be a hassle to retrain a neural network whenever you make a change. Let's suppose you are training a model that could pick up and recognize the faces of students in a specific class. Sure, we train the model with all of the students, and that is it. But what about when a student leaves? And when a new student comes in? We might have to delete or train a new model with new pictures so the model can recognize the new students. Imagine we get new students every week? Training the model every week doesn't sound easy anymore, does it?
      </p>

      <p>
        That is when Siamese neural networks come in handy. I'll be explaining what they are, how they work, and how we can set up one!
      </p>

      <img src="/siamese.png" alt="SNN" style={{ width: '65%' }} />

      <h3>What are Siamese neural networks?</h3>
      <p>
        Siamese neural networks, or SNNs, are a special neural network architecture specialized to learn similarity relationships between two inputs. They are specifically designed with two identical sub-neural networks that share the same parameters and weights. These two subnetworks, or "twin networks" extract features from both inputs. The first input is the anchor image, and the second input is a negative pair or a positive pair. These images are passed into their respective subnetworks and that will result in the output vector for both inputs. These vectors are combined to further get the distance mediate between the two outputs. If the distance is big, you can say that the output it's going to be negative; therefore, they are not related, otherwise they might be related.
      </p>

      <p>
        If you are wondering what are the negative and the positive pair, we'll talk about it in a little bit. Also, we will be talking about the different types of measures. I know it sounds complicated, but once you understand how they work, believe me, you'll never forget it.
      </p>

      <p>Here's a breakdown of how they work:</p>
      <ol>
        <li>Two inputs are fed into separate but identical networks</li>
        <li>Each network produces a feature vector representation</li>
        <li>A distance function measures how similar the outputs are</li>
        <li>The network learns to minimize distance for similar pairs and maximize it for dissimilar pairs</li>
      </ol>

      <img src="/example.png" alt="Example" style={{ width: '65%' }} />
      <h3>Why are they special?</h3>
      <p>
        The most powerful aspect is that Siamese networks learn a general similarity function rather than memorizing specific patterns. Instead of needing thousands of examples of every possible class, they learn to measure how "alike" or "different" two inputs are. This means they can compare things they've never seen before, as long as they're from a similar domain.
      </p>

      <p>
        Another thing about neural networks is that they can learn from one shot. Traditional neural networks would need to have large datasets to learn and recognize new objects, and SNNs can do this by having just a few examples. They are also computationally efficient because they both share weights; therefore, the model doesn't have to have different parameters for both subnetworks.
      </p>

      <img src="/snn.png" alt="Example1" style={{ width: '85%' }} />

      <h3>How do they train?</h3>
      <p>
        Before, I was talking about positive pairs and negative pairs. Siamese networks require a special training approach because they learn similarity rather than classification, unlike traditional neural networks.
      </p>

      <p>
        <strong>Positive pairs</strong> are when you combine two inputs that should be similar or from the same class. For the student example from before, this could be two pictures of the same person. For other things, it could actually be similar. Examples:
      </p>
      <ul>
        <li>Two signatures by the same person</li>
        <li>Two images of the same product from different angles</li>
        <li>Two sentences with similar meaning</li>
        <li>Two different pictures that are different, but are related (outfits, patterns, drawings, etc)</li>
      </ul>

      <img src="/apples.png" alt="Apples" style={{ width: '65%' }} />

      <p>
        <strong>Negative pairs</strong> are just the opposite of the positive pairs. For the student example, it could be something as different as pictures of the students. Something that is not similar to or a different class. Example:
      </p>
      <ul>
        <li>A genuine signature and a forged one</li>
        <li>Images of completely different products</li>
        <li>Sentences with opposite meanings</li>
      </ul>

      <img src="/fruits.png" alt="Fruits" style={{ width: '65%' }} />
      <p>
        It is important to understand the need for these pairs. Whenever you do your data exploration and you have your own data, you have to have in mind who you are going to manipulate your own data to have these pairs.
      </p>

      <p>
        Another important thing about SNNs is the importance of your function loss. Siamese neural networks use specialized loss functions designed to learn similarity relationships.
      </p>

      <h3>Loss functions in SNN</h3>
      <p>
        One of the most common ones is <strong>Contrastive Loss</strong>. This is simple: whenever two vectors are similar, this function will minimize the distance and pull them together, and if the vectors are not similar, this function will push them apart to create a bigger margin. The margin prevents the network from struggling to decide what is similar and what is not. This uses the Euclidean distance. I won't get into the math behind it, but if you want to get more information, you can read here.
      </p>

      <p>
        Another popular function loss is <strong>Triplet Loss</strong>. Uses triplets: (anchor, positive, negative) instead of pairs. Ensure the anchor is closer to positive than to negative by at least a margin.
      </p>

      <p>
        Those are the two main ones I have found, but of course, there are other ones such as:
      </p>
      <ul>
        <li><strong>Binary Cross Entropy:</strong> which gives your output as true or false, or 0 versus 1</li>
        <li><strong>Cosine embedding loss:</strong> Based on cosine similarity rather than Euclidean distance</li>
        <li><strong>Center Loss:</strong> Helps learn discriminative features</li>
        <li><strong>Angular loss:</strong> Uses angular distance instead of Euclidean distance</li>
        <li><strong>N-pair loss:</strong> Extends triplet loss to multiple negative examples</li>
      </ul>

      <h3>Implementing Siamese Networks in Keras</h3>
      <p>
        Here's a practical example of how to implement a Siamese Network using Keras. This implementation includes both 
        the network architecture and the contrastive loss function:
      </p>

      <CodeBlock>
        {`import tensorflow as tf
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, Conv2D, MaxPooling2D, Flatten, Dense, Lambda
from tensorflow.keras.optimizers import Adam
import numpy as np

def create_base_network(input_shape):
    """Create the base network that will be shared between the two inputs"""
    input_layer = Input(shape=input_shape)
    
    x = Conv2D(64, (3, 3), activation='relu', padding='same')(input_layer)
    x = MaxPooling2D((2, 2))(x)
    
    x = Conv2D(128, (3, 3), activation='relu', padding='same')(x)
    x = MaxPooling2D((2, 2))(x)
    
    x = Conv2D(256, (3, 3), activation='relu', padding='same')(x)
    x = MaxPooling2D((2, 2))(x)
    
    x = Flatten()(x)
    x = Dense(128, activation='relu')(x)
    x = Dense(64, activation='relu')(x)
    
    return Model(input_layer, x)

def euclidean_distance(vectors):
    """Compute the Euclidean distance between two vectors"""
    x, y = vectors
    sum_square = tf.reduce_sum(tf.square(x - y), axis=1, keepdims=True)
    return tf.sqrt(tf.maximum(sum_square, tf.keras.backend.epsilon()))

def contrastive_loss(y_true, y_pred, margin=1):
    """Contrastive loss function"""
    square_pred = tf.square(y_pred)
    margin_square = tf.square(tf.maximum(margin - y_pred, 0))
    return tf.reduce_mean(y_true * square_pred + (1 - y_true) * margin_square)

def create_siamese_network(input_shape):
    """Create the complete Siamese network"""
    base_network = create_base_network(input_shape)
    
    # Create two inputs
    input_a = Input(shape=input_shape)
    input_b = Input(shape=input_shape)
    
    # Get the feature vectors from both inputs
    vector_a = base_network(input_a)
    vector_b = base_network(input_b)
    
    # Compute the distance between the vectors
    distance = Lambda(euclidean_distance)([vector_a, vector_b])
    
    # Create the model
    model = Model(inputs=[input_a, input_b], outputs=distance)
    
    return model

def create_triplet_loss_model(input_shape, embedding_size=64):
    """Create a Siamese network with triplet loss"""
    base_network = create_base_network(input_shape)
    
    # Create three inputs for triplet loss
    anchor_input = Input(shape=input_shape, name='anchor_input')
    positive_input = Input(shape=input_shape, name='positive_input')
    negative_input = Input(shape=input_shape, name='negative_input')
    
    # Get embeddings for all three inputs
    anchor_embedding = base_network(anchor_input)
    positive_embedding = base_network(positive_input)
    negative_embedding = base_network(negative_input)
    
    # Create the model
    model = Model(
        inputs=[anchor_input, positive_input, negative_input],
        outputs=[anchor_embedding, positive_embedding, negative_embedding]
    )
    
    return model

def triplet_loss(y_true, y_pred, alpha=0.2):
    """Triplet loss function"""
    anchor, positive, negative = y_pred[:, 0], y_pred[:, 1], y_pred[:, 2]
    
    # Calculate distances
    pos_dist = tf.reduce_sum(tf.square(anchor - positive), axis=1)
    neg_dist = tf.reduce_sum(tf.square(anchor - negative), axis=1)
    
    # Calculate triplet loss
    basic_loss = pos_dist - neg_dist + alpha
    loss = tf.maximum(basic_loss, 0.0)
    
    return tf.reduce_mean(loss)

# Example usage:
def train_siamese_network():
    # Create the model
    input_shape = (64, 64, 3)  # Adjust based on your image size
    model = create_siamese_network(input_shape)
    
    # Compile with custom loss
    model.compile(
        optimizer=Adam(learning_rate=0.0001),
        loss=contrastive_loss,
        metrics=['accuracy']
    )
    
    # Example training data preparation
    def prepare_pairs(images, labels):
        """Prepare positive and negative pairs for training"""
        num_classes = len(np.unique(labels))
        digit_indices = [np.where(labels == i)[0] for i in range(num_classes)]
        
        pairs = []
        pair_labels = []
        
        # Positive pairs
        for d in range(num_classes):
            for i in range(len(digit_indices[d])):
                for j in range(i + 1, min(i + 2, len(digit_indices[d]))):
                    pairs += [[images[digit_indices[d][i]], images[digit_indices[d][j]]]]
                    pair_labels += [1]
        
        # Negative pairs
        for d in range(num_classes):
            for i in range(len(digit_indices[d])):
                for d2 in range(d + 1, num_classes):
                    for j in range(len(digit_indices[d2])):
                        pairs += [[images[digit_indices[d][i]], images[digit_indices[d2][j]]]]
                        pair_labels += [0]
        
        return np.array(pairs), np.array(pair_labels)
    
    # Train the model
    # pairs, pair_labels = prepare_pairs(train_images, train_labels)
    # model.fit([pairs[:, 0], pairs[:, 1]], pair_labels, epochs=50, batch_size=32)
    
    return model`}
      </CodeBlock>

      <p>
        This implementation includes:
      </p>
      <ul>
        <li>A base network that extracts features from input images</li>
        <li>A Siamese architecture with two identical subnetworks</li>
        <li>Euclidean distance computation between feature vectors</li>
        <li>Contrastive loss function for training</li>
        <li>Triplet loss implementation for more advanced training</li>
        <li>Data preparation functions for creating positive and negative pairs</li>
      </ul>

      <p>
        To use this model effectively, you would need to:
      </p>
      <ol>
        <li>Prepare your dataset with proper positive and negative pairs</li>
        <li>Choose the appropriate loss function based on your task</li>
        <li>Adjust the network architecture based on your input data</li>
        <li>Fine-tune hyperparameters like margin and learning rate</li>
      </ol>


      <h3>Advantages and Limitations</h3>
      <p><strong>Advantages:</strong></p>
      <ul>
        <li>Can learn from few examples (one-shot learning)</li>
        <li>Computationally efficient due to shared weights</li>
        <li>Generalizes well to unseen classes</li>
        <li>No need to retrain for new classes</li>
        <li>Learns meaningful similarity metrics</li>
      </ul>

      <p><strong>Limitations:</strong></p>
      <ul>
        <li>Requires careful pair selection during training</li>
        <li>Can be sensitive to the choice of loss function</li>
        <li>Training can be unstable with certain architectures</li>
        <li>Requires domain-specific data preparation</li>
        <li>May not perform well on very complex similarity tasks</li>
      </ul>

      <h3>References</h3>
      <Citation
        authors={['Koch, G.', 'Zemel, R.', 'Salakhutdinov, R.']}
        year={2015}
        title="Siamese Neural Networks for One-shot Image Recognition"
        url="https://www.cs.cmu.edu/~rsalakhu/papers/oneshot1.pdf"
      />
      <Citation
        authors={['Schroff, F.', 'Kalenichenko, D.', 'Philbin, J.']}
        year={2015}
        title="FaceNet: A Unified Embedding for Face Recognition and Clustering"
        url="https://arxiv.org/abs/1503.03832"
      />
    <Citation
        authors={['Dong-Keon Kim']}
        year={2025}
        title='Siamese Nets: A Breakthrough in One-shot Image Recognition'
        url='https://medium.com/@kdk199604/siamese-nets-a-breakthrough-in-one-shot-image-recognition-53aa4a4fa5db'
    />
        <Citation
        authors={['Christian Mijangos']}
        year={2025}
        title='Siamese Neural Networks'
        url='https://medium.com/@christianmijangos.cm/siamese-neural-networks-dfb84a4a37b3'
    />
    </BlogPost>
  );
};

export default Siamese; 