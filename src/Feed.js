import React, { useEffect, useState } from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from './MessageSender'
import Post from './Post'
import db from "./firebase"

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data() })))
    });
  }, []); //[] meaning only runs this when the Feed gets load
    
  return (
    <div className='feed'>
    <StoryReel />
    <MessageSender />
    {posts.map((post) => {
     return (<Post
        key={post.data.id}
        profilePic={post.data.profilePic}
        message={post.data.message}
        image={post.data.image}
        timestamp={post.data.timestamp}
        username={post.data.username}/>);
    })}
    </div>
  )
}

export default Feed
