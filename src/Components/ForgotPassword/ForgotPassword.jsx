import { Button, Typography } from "@mui/material";
import React from "react";
import "./ForgotPassword.css";
const ForgotPassword = () => {
  return (
    <div className="forgotPassword">
      <form className="forgotPasswordForm">
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          Social Aap
        </Typography>

        <input
          type="email"
          placeholder="Email"
          required
          className="forgotPasswordInputs"
        />

        <Button type="submit">
          Send Token
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
