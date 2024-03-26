import React from 'react'
import "./StoryReel.css"
import Story from './Story'
import { useStateValue } from './StateProvider';


function StoryReel() {
  const [{ user }, dispatch] = useStateValue();
    // Generate a random image URL using the picsum.photos API
  const getRandomImage = () => {
    const width = 200; // Desired width of the image
    const height = 300; // Desired height of the image
    const randomImageUrl = `https://picsum.photos/${width}/${height}?random=${Math.random()}`;
    return randomImageUrl;
  };

  return (
    <div className='storyReel'>
    <Story 
    image={getRandomImage()}
    profileSrc={user.photoURL}
    title={user.displayName}/>
    <Story 
    image={getRandomImage()}
    profileSrc={user.photoURL}
    title="Candi Chiu"/>
    <Story 
    image={getRandomImage()}
    profileSrc={user.photoURL}
    title="Candi Chiu"/>
    <Story 
    image={getRandomImage()}
    profileSrc={user.photoURL}
    title="Candi Chiu"/>
    <Story 
    image={getRandomImage()}
    profileSrc={user.photoURL}
    title="Candi Chiu"/>
   
      
    </div>
  )
}

export default StoryReel
