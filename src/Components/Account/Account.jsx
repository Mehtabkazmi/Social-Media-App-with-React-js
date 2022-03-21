import { Avatar, Button, Dialog, Typography } from "@mui/material";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import Post from "../Post/Post";
import User from "../User/User";
import "./Account.css";
import { posts,users } from "../../data";

const Account = () => {
   const [followersToggle, setFollowersToggle] = useState(false);

  const [followingToggle, setFollowingToggle] = useState(false);
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
              isAccount={true}
              isDelete={true}
            />
          ))
        ) : (
          <Typography variant="h6">You have not made any post</Typography>
        )}
      </div>
      <div className="accountright">
        <Avatar
          src="https://res.cloudinary.com/my-umt-final-project/image/upload/v1647809069/posts/upuz7gdyupdwrgmylida.png"
          sx={{ height: "8vmax", width: "8vmax" }}
        />

        <Typography variant="h5">Mehtab kazmi</Typography>

        <div>
          <button>
            <Typography>Followers</Typography>
          </button>
          <Typography>4</Typography>
        </div>

        <div>
          <button >
            <Typography>Following</Typography>
          </button>
          <Typography>2</Typography>
        </div>

        <div>
          <Typography>Posts</Typography>
          <Typography>3</Typography>
        </div>
      <Link to="/update/profile">
        <Button variant="contained">
          Logout
          </Button>
        </Link>

        <Link to="/update/profile">Edit Profile</Link>
        <Link to="/update/password">Change Password</Link>

        <Button
          variant="text"
          style={{ color: "red", margin: "2vmax" }}
        >
          Delete My Profile
        </Button>

        <Dialog
          open={followersToggle}
          onClose={() => setFollowersToggle(!followersToggle)}
        >
          <div className="DialogBox">
            <Typography variant="h4">Followers</Typography>
            Raza
          </div>
        </Dialog>

        <Dialog
          open={followingToggle}
          onClose={() => setFollowingToggle(!followingToggle)}
        >
          <div className="DialogBox">
            <Typography variant="h4">Following</Typography>
            Rehmaan
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default Account;
