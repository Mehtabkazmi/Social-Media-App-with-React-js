import { Avatar, Button, Typography,Dialog } from "@mui/material";
import React, { useEffect,useState } from "react";
import {
  MoreVert,
  Favorite,
  ChatBubbleOutline,
  DeleteOutline,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./post.css";
import User from "../User/User";
import Comments from "../Comments/Comments";
const Post = ({ postId, caption, postImage, likes = [], comments = [], ownerImage, ownerName, ownerId, isDelete = false, isAccount = false, }) => {
  const [like, setLike] = useState(false);
  const [likesUser, setLikesUser] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [commentToggle, setCommentToggle] = useState(false);
  const [captionValue, setCaptionValue] = useState(caption);
  const [captionToggle, setCaptionToggle] = useState(false);
  // handle likes
  const likeHandle = () => {
    setLike(!like);
  }
  useEffect(() => {
    likes.forEach((item) => {
      setLike(true);
    })
  })
  return (
      <div className='post'>
          <div className='postHead'>
            <Button><MoreVert /></Button>
          </div>
          <img src={postImage} alt="post" />
          <div className="postDetails">
        <Avatar src={ownerImage} alt="User" sx={{ height: "3vmax", width: "3vmax" }} />
        <Link to={`/user/${ownerId}`}>
          <h3 fontWeight={700}>{ownerName}</h3>
        </Link>

        <p fontWeight={100} color="rgba(0, 0, 0, 0.582)" style={{ alignSelf: "center" }}>
          {caption}
        </p>
      </div>
      <button
        style={{
          border: "none",
          backgroundColor: "white",
          cursor: "pointer",
          margin: "1vmax 2vmax",
        }}>
        <Typography>{likes.length} Likes</Typography>
      </button>

      <div className="postFooter">
        <Button onClick={likeHandle}>
          {like ? <Favorite style={{ color: "red" }} /> : <Favorite />}
        </Button>

        <Button><ChatBubbleOutline /></Button>

        {isDelete ? (
          <Button><DeleteOutline /></Button>
        ) : null}
      </div>

      <Dialog open={likesUser} onClose={() => setLikesUser(!likesUser)}>
        <div className="DialogBox">
          <Typography variant="h4">Liked By</Typography>

          {likes.map((like) => (
            <User
              key={like._id}
              userId={like._id}
              name={like.name}
              avatar={like.avatar.url}
            />
          ))}
        </div>
      </Dialog>

      <Dialog
        open={commentToggle}
        onClose={() => setCommentToggle(!commentToggle)}
      >
        <div className="DialogBox">
          <Typography variant="h4">Comments</Typography>

          <form className="commentForm">
            <input
              type="text"
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
              placeholder="Comment Here..."
              required
            />

            <Button type="submit" variant="contained">
              Add
            </Button>
          </form>

          {comments.length > 0 ? (
            comments.map((item) => (
              <Comments
                userId={item.user._id}
                name={item.user.name}
                avatar={item.user.avatar.url}
                comment={item.comment}
                commentId={item._id}
                key={item._id}
                postId={postId}
                isAccount={isAccount}
              />
            ))
          ) : (
            <Typography>No comments Yet</Typography>
          )}
        </div>
      </Dialog>

      <Dialog
        open={captionToggle}
        onClose={() => setCaptionToggle(!captionToggle)}
      >
        <div className="DialogBox">
          <Typography variant="h4">Update Caption</Typography>

          <form className="commentForm">
            <input
              type="text"
              value={captionValue}
              onChange={(e) => setCaptionValue(e.target.value)}
              placeholder="Caption Here..."
              required
            />

            <Button type="submit" variant="contained">
              Update
            </Button>
          </form>
        </div>
      </Dialog>
    </div>
  )
}

export default Post