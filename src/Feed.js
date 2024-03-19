import React from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from './MessageSender'
import Post from './Post'
import candi from "./images/Candi.jpeg"

function Feed() {
  return (
    <div className='feed'>
    <StoryReel />
    <MessageSender />
    <Post 
        profilePic={candi}
        message="WOW it's amazing"
        image={"https://picsum.photos/500/300"}
        timestamp={"This is a timestamp"}
        username={"cchiu"}
    />
    <Post />
    <Post />
    </div>
  )
}

export default Feed
