import { Button, Typography } from "@mui/material";
import React from "react";
import User from "../User/User";
import { users } from "../../data";
import "./Search.css";

const Search = () => {
  
  return (
    <div className="search">
      <form className="searchForm">
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          Social Aap
        </Typography>

        <input
          type="text"
          value="name"
          placeholder="Name"
          required
        />

        <Button type="submit">
          Search
        </Button>

        <div className="searchResults">
          {users &&
            users.map((user) => (
              <User
                key={user._id}
                userId={user._id}
                name={user.name}
                avatar={user.avatar.url}
              />
            ))}
        </div>
      </form>
    </div>
  );
};

export default Search;
