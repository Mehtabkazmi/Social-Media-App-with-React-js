import React from 'react'
import "./home.css";
import { Typography } from "@mui/material";
import Post from '../Post/Post';
import User from '../User/User';
import { posts,users } from "../../data";


const Home=()=> {
  return (
      <div className='home'>
          <div className='homeleft'>
              {posts && posts.length > 0 ? (
                  posts.map((item) => (
                      <Post
                          key={item._id}
                          postId={item._id}
                          caption={item.caption}
                          postImage={item.image.url}
                          likes={item.likes}
                          comments={item.comments}
                          ownerImage={item.owner.avatar.url}
                          ownerName={item.owner.name}
                          ownerId={item.owner._id}
                        />
                  ))
              ) : (
                      <Typography variant='h6'>No Post yet</Typography>
              )}
          </div>
          <div className='homeright'>
              {users && users.map((item)=>(
              <User 
                  key={item._id}
                  userId={item._id}
                  name={item.name}
                  avatar={item.avatar.url}
              />
              ))}
          </div>
    </div>
  )
}

export default Home