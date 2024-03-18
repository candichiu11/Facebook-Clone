import React from 'react'
import "./StoryReel.css"
import Story from './Story'
import candi from "./images/Candi.jpeg"



function StoryReel() {
    // Generate a random image URL using the picsum.photos API
  const getRandomImage = () => {
    const width = 200; // Desired width of the image
    const height = 300; // Desired height of the image
    const randomImageUrl = `https://picsum.photos/${width}/${height}`;
    return randomImageUrl;
  };

  // Use the getRandomImage function to get a random image URL
  const randomImage = getRandomImage();

  return (
    <div className='storyReel'>
    <Story 
    image={randomImage}
    profileSrc={candi}
    title="Candi Chiu"/>
    <Story 
    image={randomImage}
    profileSrc={candi}
    title="Candi Chiu"/>
    <Story 
    image={randomImage}
    profileSrc={candi}
    title="Candi Chiu"/>
    <Story 
    image={randomImage}
    profileSrc={candi}
    title="Candi Chiu"/>
    <Story 
    image={randomImage}
    profileSrc={candi}
    title="Candi Chiu"/>
   
      
    </div>
  )
}

export default StoryReel
