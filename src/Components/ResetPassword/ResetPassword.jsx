import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./ResetPassword.css";
const ResetPassword = () => {

  return (
    <div className="resetPassword">
      <form className="resetPasswordForm">
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          Social Aap
        </Typography>

        <input
          type="password"
          placeholder="New Password"
          required
          className="updatePasswordInputs"
          value="newPassword"
        />

        <Link to="/">
          <Typography>Login</Typography>
        </Link>
        <Typography>Or</Typography>

        <Link to="/forgot/password">
          <Typography>Request Another Token!</Typography>
        </Link>

        <Button type="submit">
          Reset Password
        </Button>
      </form>
    </div>
  );
};

export default ResetPassword;
