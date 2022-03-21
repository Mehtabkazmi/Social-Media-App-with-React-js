import { Button, Typography } from "@mui/material";
import React from "react";
import "./NewPost.css";
const NewPost = () => {
  
  return (
    <div className="newPost">
      <form className="newPostForm">
        <Typography variant="h3">New Post</Typography>

        <img src="https://images.unsplash.com/photo-1579273166152-d725a4e2b755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="post" />
        <input type="file" accept="image/*" />
        <input
          type="text"
          placeholder="Caption..."
          value="caption"
        />
        <Button type="submit">
          Post
        </Button>
      </form>
    </div>
  );
};

export default NewPost;
