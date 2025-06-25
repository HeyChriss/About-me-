import React from 'react';
import { BlogPost } from 'components';
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


const DrippedUp1 = () => {
  return (
    <BlogPost
      title="Building an AI Outfit Creator (Part 1)"
      author="Christian Mijangos"
      date="June 24, 2025"
      postId="drippedup1"
    >
      <p>If you want to stay in the loop, here is the GitHub repo: <a href="https://github.com/HeyChriss/AI-Outfit-Creator" target="_blank" rel="noopener noreferrer">https://github.com/HeyChriss/AI-Outfit-Creator</a></p>
      <p>You can read the same post in my <a href=" https://medium.com/@christianmijangos.cm/building-an-ai-outfit-creator-part-1-4dd1bec7c278">medium page</a>. </p>
      <p>
        One summer morning, I woke up, took a shower, and was ready to pick up my outfit. I realized I did not have a lot of ideas for my outfit that day. Living in Idaho makes you get used to cold days so all of my outfit ideas were for cold days, however that summer morning I did not plan and the first thing I thought about was "I wish there could be an app that could help me pick my outfits" and that is when I had the idea of building an app that could help me choose an outfit for the day with my clothes.
      </p>
      <p>
        I shared that idea with one of my friends, and we started building it together.
      </p>

      <h3>App requirements:</h3>
      <p>
        I wanted to build a personal app. Despite the fact that there are other apps like this already in the market, the thought of creating an app like this made me excited because of the things I was going to learn. I wanted an app with two machine learning models. One for clothes classification and the other for fashion and clothing recommendation. We also wanted to build a robust app with a login page and information, and that would include an authentication database. Also, the app wanted to look somewhat good, and as a software engineer, I thought maybe creating a Streamlit app? Heck no, I could not do that, so we decided to create a UI using Vite and React and then use Python as a backend. There are other things we wanted to work on, such as creating an app for phones and eventually grabbing pictures from the gallery, but of course, we wanted to do that after having a working prototype.
      </p>

      <p>This is the logo of the app we wanted to build!</p>
      <img src="/logo.png" alt="DrippedUp Logo" style={{ width: '200px' }} /> 

      <h3>Thought Process and Design:</h3>
      <p>
        I just graduated from college, so it is hard to know how to start a project like that. I have worked on many personal projects and learned a lot from them, but it is always hard to know where to start. I graduated with a software design certificate, so this should be easy, just follow the Top Down development Design and TDD, and you'll be set, but I also thought of doing Button up and doing it in sprints! Ahhh!! There was just so much to think about, but that is the beauty of Software Engineering! You always learn something new, and you learn how to solve problems!
      </p>
      <p>
        I decided to do the top-down development and TDD (Test Driven Development). We had a design with my friend, and we divided the components. My friend was going to be working on spinning up the database and UI, while I was going to work the the ML models and UI. We both were going to work in the UI and the backend, but doing different components, so in this post I'll be talking about the ML components and some of the UI components!
      </p>

      <h3>Clothes Classification Model</h3>
      <p>
        I started working on the first model! I started looking at examples on GitHub and saw many different options. Transfer Learning seemed the most appropriate for this project because it would give me the feeling of fine-tuning a model without worrying about starting a new model from scratch, and finish my free weekly 30 hours of GPU in Kaggle. Talking to some experts in the industry on LinkedIn, some of them recommended I find a good dataset in Kaggle, try Alexnet ( if you want to learn more about it, I did a post about it, and this is the <a href="/alexnet">link</a>) as an architecture, and test it.
      </p>
      <p>
        I did my research and I found <a href="https://www.kaggle.com/datasets/agrigorev/clothing-dataset-full">this dataset</a> on Kaggle that I thought was appropriate for the project, and I did some research about Alexnet. At the beginning, I was having a hard time understanding the dataset, but with some data exploration, I was able to understand more about what I was dealing with, and then I built the AlexNet architecture. Sad news, it was taking so long to train! I was running out of GPU in Google Colab and the 30 hours of Kaggle were not enough. I decided to keep researching and see if there was another option that was not computationally expensive or even try another dataset. I found the Xception Neural Network, and I created a post about it <a href="/xception">here</a> about what it is, how you can use it, and what it is used best for. I used the same dataset and everything, and it seemed to work well in the tests I was doing.
      </p>
      <p>
        You can find my notebook on Kaggle <a href="https://www.kaggle.com/code/chrismijangos/clothes-classification-v2">here</a>. I also added the Xceptions weights and you can find it <a href="https://www.kaggle.com/datasets/chrismijangos/xception-weights">here</a>. One of the downsides of this is that my model was 1.4 GB. Only the weights! That was a lot, and that could bring some problems. One of the problems with the size of those weights is how the app is going to work. If the website is client-side, this would limit our memory to 100mb. Of course, client-side is good because it is faster, loads the model in the browser, and you are not making an api call to the server all the time, but I could not do that with the model I currently had. I had three options: either look for another model, go server-side, or quantize the model and make it smaller. All of those options were fun. Remember, I'm doing this for the sake of learning new things, so I decided to go server-side for this one and try quantization to see if there is something I could learn to decrease the size of this model.
      </p>
      <p>
        I modified my model a couple of days later to see if there was something I could do to the layers so it was smaller. I found out that the first time I did the layers, I was using more layers, and I found what was one of the problems. I did three models. One was from scratch, one was transfer learning, and the other was data augmentation. This is how my model looked initially:
      </p>
      <CodeBlock>{`# create scratch model
model = Sequential([    Conv2D(32, (3,3), activation='relu', input_shape= (IMAGE_SIZE, IMAGE_SIZE, 3)),
                        MaxPooling2D(2, 2),
                        Conv2D(64, (3,3), activation='relu'),
                        MaxPooling2D(2,2),
                        Conv2D(128, (3,3), activation='relu'),
                        MaxPooling2D(2,2),

                        Flatten(),
                        Dense(128, activation='relu'),
                        Dense(19, activation='softmax')  ])

# Compile model 
model.compile(optimizer='adamax', loss='categorical_crossentropy', metrics=['accuracy'])
model.summary()

# accuracy: 0.7235 - loss: 0.9505 - val_accuracy: 0.4835 - val_loss: 1.7948 by th epoch 5
base_model = Xception(
    weights=None,
    include_top=False,
    input_shape= (IMAGE_SIZE, IMAGE_SIZE, 3)
)

weights_path = MYWEIGHTS

base_model.trainable = False
inputs = Input(shape= (IMAGE_SIZE, IMAGE_SIZE, 3))
base = base_model(inputs, training=False)

# Flatten the output layer to 1 dimension
x = Flatten()(base)

# Add a fully connected layer with 1,024 hidden units and ReLU activation
x = Dense(1024, activation='relu')(x)        

# Add a final sigmoid layer for classification
x = Dense(19, activation='sigmoid')(x)           

# Append the dense network to the base model
model = Model(inputs, x) 

base_model.load_weights(weights_path)

# Print the model summary. See your dense network connected at the end.
model.summary()

# accuracy: 0.9509 - loss: 0.1015 - val_accuracy: 0.7037 - val_loss: 1.4056 By Epoch 5`}</CodeBlock>
      <p>And this is the data augmentation I used for the third model</p>
      <CodeBlock>{`aug_train_datagen = ImageDataGenerator(rescale=1./255,
                                    rotation_range=20,
                                    width_shift_range=0.1,
                                    height_shift_range=0.1,
                                    shear_range=0.1,
                                    zoom_range=0.2,
                                    horizontal_flip=True,
                                    fill_mode='nearest')

train_generator = aug_train_datagen.flow_from_directory(
    train_dir,
    target_size= (IMAGE_SIZE, IMAGE_SIZE),
    batch_size=32,
    class_mode='categorical')

# accuracy: 0.5580 - loss: 2.8830 - val_accuracy: 0.6708 - val_loss: 2.2522  by 5th epoch`}</CodeBlock>
      <p>
        My model was so big because of the <code>x = Flatten()(base)</code> and the dense layer of 1024. This was creating an Input size to the Dense layer: 7 × 7 × 2048 = 100,352 features. Dense layer: 100,352 → 1024 units and Parameters in this layer alone: ~103 million parameters! It was too big, so I changed it to:
      </p>
      <CodeBlock>{`# Flatten the output layer to 1 dimension
x = Flatten()(base)

x = Dense(256, activation='relu')(x)
x = Dropout(0.1)(x)

x = Dense(64, activation='relu')(x)
x = Dropout(0.1)(x)   

# Final classification layer (use softmax for multiclass classification)
x = Dense(19, activation='softmax')(x)  `}</CodeBlock>
      <p>
        So far, the model works correctly, and I think there's a lot of improvement in the model. When I was testing it, it would categorize correctly, but it would have a hard time predicting a blouse against a shirt. I wish there could be a dataset that would have labels like color, brand, and size, and that the model would be able to predict all of those labels. I'm pretty sure there's a dataset like that, but I really haven't looked enough to find one, so if you know of a dataset like that, please let me know. I'm currently still working on the model and trying to integrate it into the UI. The good thing, it works and it's enough to start implementing it in the UI. The model can recognize what it was trained for really well; however, when there is something that the dataset did not contain, it would label it as "other", which is good (because I am using this model to just determine clothes classification, the user is still going to be able to change and add more information about the clothes) it will determine that is something new and then eventually when we get more data from the user, I can train a new model and make it better.
      </p>

      <p>This is the prediction when we send a picture of cargo pants</p>
      <img src="/prediction cargo.png" alt="Cargo Pants Prediction" style={{ width: '200px' }} />
      <p>This is the prediction when we send a picture of normal pants</p>
      <img src="/prediction pants.png" alt="Normal Pants Prediction" style={{ width: '200px' }} />

      <h3>Conclusion</h3>
      <p>
        Planning design is important and key in creating new projects. It's essential to have a vision of how your project is going to look in the future. I have learned that software design is more important than we think. At the beginning, I did not see how important it was, but it wasn't until I started building "big projects" that I realized the importance of designing before even coding! I don't know about you guys, but in college, professors are great and amazing, but they teach you the basics, and they teach you how to teach yourself! I feel that has been a blessing for me because now that I'm getting into the industry, I can see that the skill of "learn as you go" is definitely something that a lot of jobs are asking for!
      </p>
      <p>
        Thanks for reading the first part of my journey in building this project! I love to learn, and blogging my journey has helped me to learn even more and share my experiences! If you want to collaborate with me or if you have any suggestions, please visit my website and feel free to reach out to me on LinkedIn or via email! I will be posting the other part where I talk about what I am currently doing for the fashion model!
      </p>
    </BlogPost>
  );
};

export default DrippedUp1; 