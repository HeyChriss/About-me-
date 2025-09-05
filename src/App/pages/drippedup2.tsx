import React from 'react';
import { BlogPost } from 'components';


const DrippedUp2 = () => {
  return (
    <BlogPost
      title="Building an AI Outfit Creator (Part 2)"
      author="Christian Mijangos"
      date="June 25, 2025"
      postId="drippedup2"
    >
      <p>If you want to stay in the loop, here is the GitHub repo: <a href="https://github.com/HeyChriss/AI-Outfit-Creator" target="_blank" rel="noopener noreferrer">https://github.com/HeyChriss/AI-Outfit-Creator</a></p>
      <p>If you want to read the first part of this journey, please <a href="/drippedup1">click here!</a></p>
      <p>
        Learning new things has been my passion, and one of the things I have seen is that the more I learn, the more I realize that I do not know. There's so much to learn as a software engineer trying to become an AI engineer. Someone once told me, "Think like a data scientist, build like a software engineer." In College, I took classes that my friends in Data Science took as my elective classes, and I kept my software design classes. This project has helped me understand API Management, ML Model Deployment, ML design and training data, and last but not least, more frontend.
      </p>
      <p>
        Once I had the clothes classification model working as expected, I started worrying about the other model. The other model needs to compare clothes and somehow say "this is a good outfit match, and this is not a good outfit match". Also, the model needs to be fitted with the person's pictures. This means that I cannot be training the model every time I add new pictures to my storage, which would be hard to maintain, imagine training the model with the pictures all the time the user adds a picture to their virtual closet.
      </p>
      <p>
        With those problems in mind, I started doing research about things I could do. I went to Hugging Face and started looking at some LLMs that were able to do that. I did some digging, and most of the models I found were item classification for color and sizes, but not an outfit picker LLM. I had some options, one was to keep looking and then use a pretrained LLM for my outfits, the other option was to maybe do a CNN where I would train the model to recognize patterns in clothes, but again, this would mean to train the model all the time with new pictures and I did not want to do that. I started doing more research, and I found something called Siamese Neural Networks, and that made my day!
      </p>
      <p>
        I would recommend reading my post <a href="/siamese">about Siamese Neural Networks</a> so you understand what they are, and you can understand what I did to create my own.
      </p>
      <p>
        In summary, Siamese neural networks, or SNNs, are a special neural network architecture specialized to learn similarity relationships between two inputs. They are specifically designed with two identical sub-neural networks that share the same parameters and weights. These two subnetworks, or "twin networks," extract features from both inputs. The first input is the anchor image, and the second input is a negative pair or a positive pair. These images are passed into their respective subnetworks, and that will result in the output vector for both inputs. These vectors are combined to further get the distance mediate between the two outputs. If the distance is big, you can say that the output it's going to be negative; therefore, they are not related, otherwise they might be related.
      </p>
      <p>
        With that being said, this could help me have a model that will determine what clothes are good for a match and what other clothes are not a good match without training the model all the time, and having this as my model without using a model in Hugging Face. I started looking at datasets, and I was able to find this dataset. The dataset was good, but hard to understand at the beginning. The good thing about the dataset is that it had metadata that would contain information about outfits, and that was helpful because I could train the model using those outfits and put them in positive pairs for my training data, and the outfits that did not match, I could use them as negative pairs to train the model. If you do not know what I am talking about when I say positive pairs and negative pairs, then you should go read about Siamese Neural Networks!
      </p>
      <img src="/epoch1.png" alt="Epoch 1 at the beginning of the first model" style={{ width: '50%' }} />
      <p>
        I trained the model, but I was getting so many errors. One is that when I was training the model, the accuracy would not be more than .50. That meant either the data was not good, or the model architecture was not the proper one. Despite 20 epochs of training, there was no clear improvement trend in either loss or accuracy
      </p>
      <img src="/epoch19.png" alt="Epoch 19 of the first model training" style={{ width: '50%' }} />
         <p>
        I started to look at the data and how I was doing the pairs and the training. It was supposed to be easy. Positive pairs were supposed to be all of the pairs located in the same outfit. Negative pairs were the items not located in the outfits, so I made sure I was doing that. The positive pairs were easy, but the negatives it was a little harder. I needed to make sure that the items that were not in the outfit were negative, and I needed to loop in every outfit to figure out if the item was there or not. It was computationally expensive. Another thing it could be randomized, but if I pick the random pairs, that would not guarantee that the item was not in any of the outfits. I was able to figure out and do the negative pairs properly, but the model was not performing well. I decided that instead of creating a model from scratch, I could do transfer learning. I added ResNet50 as the backbone and instead of using the architecture and training it, I froze the first layers so in that way I was fine tuning the model and using the normal resent weights for gesture extraction.
      </p>
      <img src="/resnet1.png" alt="Epoch 1 at the beginning of the first model" style={{ width: '45%' }} />
      <img src="/resnet2.png" alt="Epoch 49 of the first model training" style={{ width: '50%' }} />
      <p>
        Once I started using ResNet, I was able to determine that the architecture was not a problem, but the way I was training the model was wrong. There was a problem with how the model was training. So I decided to try dummy images, see what was going on, and troubleshoot the pairs. I decided to add more batches and fewer epochs. The problem was not testing; the problem was training. Training requires so much time, and every time I would make a change and test, I would train the model for 3 hours or more. Suddenly, with some changes, I was able to have a better model and start testing the images.
      </p>
      <img src="/firstResnet.png" alt="Epoch 1 at the beginning of the first model" style={{ width: '100%' }} />
      <p>
        I thought that the model was almost ready, and I started testing the model with real images and see if it was performing well. The process was to feed an item into one input and then put another category and look for matches. But when I started testing, I realized that the similarity score was not really changing, nor categorizing what was a good match or not.
      </p>
      <img src="/results.png" alt="Matching a shirt, the similarity score was not changing and it meant the model was not predicting as it should" style={{ width: '100%' }} />
      <p>
        I decided to change the optimizer and start looking and my negative pairs. Instead of using random samples, I started looping and saving the items that were not in the outfits at all. My training dataset was unbalanced, but Siamese Neural Networks perform well in unbalanced data. I changed the batch sizes and trained the model one more time with fewer epochs, and these were the results.
      </p>
      <img src="/finalResnet.png" alt="Results" style={{ width: '100%' }} />
      <img src="/finalResults.png" alt="Final Results" style={{ width: '100%' }} />
      <p>
        With this, I was able to see that the model performed better! The increase in the size of batches, optimizer, and the negative pairs made the model understand better and create better matches. I would argue that this model needs more improvements, but for the sake of time and what I was trying to do, it was enough. However, there are a few things I want to try in the model in the future. One is to change the dataset and get a better dataset with better matches. The other is to try other models and optimizers, along with different distance measurements for the similarity. The model was not a big model, and it could be used on the client side and server side.
      </p>
      <p>
        If you want to check out the notebook on Kaggle, this is the <a href="https://www.kaggle.com/code/chrismijangos/siamese-network-outfit-picker" target="_blank" rel="noopener noreferrer">link</a>! And if you want to download the model and try it on your own, this is the <a href="https://www.kaggle.com/models/chrismijangos/outfit-picker-siamese-neural-network/" target="_blank" rel="noopener noreferrer">model</a>.
      </p>
      <h3>Key things I learned</h3>
      <h4>Know your data</h4>
      <p>
        No matter how good your model architecture is, if you have bad data and you are training it incorrectly, your metrics will not be good. Do data exploration and know your data. The more you know and understand the data, the easier to know what feature engineering and training you'll use. At the beginning, I had a hard time understanding the data, and if I had known my data, I would have done the model architecture and reached good metrics faster. It saves computing and time to know your data because you'll have better metrics right off the bat instead of relying solely on the model architecture.
      </p>
      <h4>Transfer learning is not a bad idea</h4>
      <p>
        As a student, I have created models from scratch, transfer learning, long times in training times, and short times in training times with a GPU. There are a few advantages and disadvantages of transfer learning. Advantages:
      </p>
      <ul>
        <li>Lower training time. You start with pre-trained weights instead of random initialization, so the model converges much quicker; therefore, this also helps in class computing for training</li>
        <li>Reduced overfitting. Pre-trained models provide a good starting point that helps prevent overfitting, particularly valuable with smaller datasets.</li>
        <li>Less data – Since the model has already learned useful features from a large dataset, you can reach good results even with relatively small datasets.</li>
      </ul>
      <p>Disadvantages:</p>
      <ul>
        <li>Less control over feature learning. You're constrained by what the original model has learned, and that might not be optimal for your task</li>
        <li>Negative transfer. Sometimes, the pre-trained knowledge makes performance worse than starting from scratch. Sometimes it's better to go simple and start a model from scratch than complex pretrained models</li>
        <li>Model size. You're often stuck with the architecture of the pre-trained model, and that might be unnecessarily large or inappropriately structured.</li>
      </ul>
      <h4>Save the weights or save the model?</h4>
      <p>
        When working with machine learning models, you have two main options, and they serve different purposes:
      </p>
      <strong>Saving weights only:</strong>
      <ul>
        <li>Saves just the learned parameters</li>
        <li>its smaller size</li>
        <li>You need the same model definition code to load the weights back. This means you have to recreate the model architecture in your code and then load the weights.</li>
      </ul>
      <strong>Saving the entire model:</strong>
      <ul>
        <li>Saves both the architecture and the weights together</li>
        <li>You can load and use it without needing the original model definition code</li>
        <li>Larger file size</li>
      </ul>
      <p>
        Usually, you'll want to save the weights whenever you are testing and developing the model. You can save the model when you are about to deploy, and changes might not be necessary. For my project I decided to save the weights because it would make a smaller size and in that way I could cache the model in the client side enabling faster loading and prediction, however once I start deploying this, we might have to do an api endpoint where I'll be calling the model and use it server side.
      </p>
      <h3>Next steps</h3>
      <p>
        With both the item classification model and fashion model working, I am hoping to start integrating these models into the UI. That is going to be the next step for the last part of this journey in building an AI outfit creator!
      </p>
    </BlogPost>
  );
};

export default DrippedUp2; 