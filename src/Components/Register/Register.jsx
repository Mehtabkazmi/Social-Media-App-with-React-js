import { Avatar, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {

  return (
    <div className="register">
      <form className="registerForm">
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          Social Aap
        </Typography>

        <Avatar
          src="https://images.unsplash.com/photo-1579273168855-c63546c129dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="User"
          sx={{ height: "10vmax", width: "10vmax" }}
        />

        <input type="file" accept="image/*" />

        <input
          type="text"
          value="name"
          placeholder="Name"
          className="registerInputs"
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="registerInputs"
          required
          value="email"
        />

        <input
          type="password"
          className="registerInputs"
          placeholder="Password"
          required
          value="password"
        />

        <Link to="/login">
          <Typography>Already Signed Up? Login Now</Typography>
        </Link>

        <Button type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
