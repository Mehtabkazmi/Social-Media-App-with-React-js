import { Avatar, Button, Dialog, Typography } from "@mui/material";
import React from "react";
import Post from "../Post/Post";
import User from "../User/User";
import { posts,users } from "../../data";

const UserProfile = () => {
  
  return (
    <div className="account">
      <div className="accountleft">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post._id}
              postId={post._id}
              caption={post.caption}
              postImage={post.image.url}
              likes={post.likes}
              comments={post.comments}
              ownerImage={post.owner.avatar.url}
              ownerName={post.owner.name}
              ownerId={post.owner._id}
            />
          ))
        ) : (
          <Typography variant="h6">User has not made any post</Typography>
        )}
      </div>
      <div className="accountright">
        {users && (
          <>
            <Avatar
              src={users.avatar.url}
              sx={{ height: "8vmax", width: "8vmax" }}
            />

            <Typography variant="h5">{users.name}</Typography>

            <div>
              <button>
                <Typography>Followers</Typography>
              </button>
              <Typography>{users.followers.length}</Typography>
            </div>

            <div>
              <button>
                <Typography>Following</Typography>
              </button>
              <Typography>{users.following.length}</Typography>
            </div>

            <div>
              <Typography>Posts</Typography>
              <Typography>{users.posts.length}</Typography>
            </div>
              <Button
                variant="contained"
                style={{ background:"red"}}>Follow</Button>
          </>
        )}
        <Dialog
          open="followersToggle"
        >
          <div className="DialogBox">
            <Typography variant="h4">Followers</Typography>

            {users && users.followers.length > 0 ? (
              users.followers.map((follower) => (
                <User
                  key={follower._id}
                  userId={follower._id}
                  name={follower.name}
                  avatar={follower.avatar.url}
                />
              ))
            ) : (
              <Typography style={{ margin: "2vmax" }}>
                You have no followers
              </Typography>
            )}
          </div>
        </Dialog>

        <Dialog
          open="followingToggle"
        >
          <div className="DialogBox">
            <Typography variant="h4">Following</Typography>

            {users && users.following.length > 0 ? (
              users.following.map((follow) => (
                <User
                  key={follow._id}
                  userId={follow._id}
                  name={follow.name}
                  avatar={follow.avatar.url}
                />
              ))
            ) : (
              <Typography style={{ margin: "2vmax" }}>
                You're not following anyone
              </Typography>
            )}
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default UserProfile;
