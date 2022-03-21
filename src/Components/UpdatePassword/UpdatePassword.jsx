import "./UpdatePassword.css";
import React from "react";
import { Typography, Button } from "@mui/material";

const UpdatePassword = () => {
  
  return (
    <div className="updatePassword">
      <form className="updatePasswordForm">
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          Social Aap
        </Typography>

        <input
          type="password"
          placeholder="Old Password"
          required
          value="oldPassword"
          className="updatePasswordInputs"
        />

        <input
          type="password"
          placeholder="New Password"
          required
          className="updatePasswordInputs"
          value="newPassword"
        />

        <Button type="submit">
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default UpdatePassword;
