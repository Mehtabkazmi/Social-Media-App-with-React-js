import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./comments.css";
import { Delete } from "@mui/icons-material";

const Comments = ({ userId, name, avatar, comment, commentId, postId, isAccount }) => {
    return (
        <div className="commentUser">
            <Link to={`/user/${userId}`}>
                <img src={avatar} alt={name} />
                <Typography style={{ minWidth: "6vmax" }}>{name}</Typography>
            </Link>
            <Typography>{comment}</Typography>

            {isAccount ? (
                <Button>
                    <Delete />
                </Button>
            ) :(
                <Button>
                    <Delete />
                </Button>
            )}
        </div>
    );
};
export default Comments;