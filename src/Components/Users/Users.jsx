import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "../User/User";
//45-4 Load Data On Route Using Loader And UseLoaderData
import "../Users/Users.css";

const Users = () => {
  const usersss = useLoaderData();

  console.log(usersss);
  return (
    <div>
      <h2>Our Users : {usersss.length}</h2>
      <h2>I am a user</h2>
      <div className="users">
        {usersss.map((usr) => (
          <User usr={usr} key={usr.id}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
