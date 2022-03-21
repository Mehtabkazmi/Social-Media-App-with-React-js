import { Avatar, Typography, Button } from "@mui/material";
import React from "react";
import "./UpdateProfile.css";

const UpdateProfile = () => {
  
  return (
    <div className="updateProfile">
      <form className="updateProfileForm">
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          Social Aap
        </Typography>

        <Avatar
          src="avatarPrev"
          alt="User"
          sx={{ height: "10vmax", width: "10vmax" }}
        />

        <input type="file" accept="image/*" />

        <input
          type="text"
          value="name"
          placeholder="Name"
          className="updateProfileInputs"
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="updateProfileInputs"
          required
          value="email"
        />

        <Button type="submit">
          Update
        </Button>
      </form>
    </div>
  );
};

export default UpdateProfile;
