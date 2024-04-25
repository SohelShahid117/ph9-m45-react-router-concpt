import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const usersss = useLoaderData();
  console.log(usersss);
  return (
    <div>
      <h2>Our Users : {usersss.length}</h2>
      <h2>I am a user</h2>
    </div>
  );
};

export default Users;
//45-4 Load Data 5 min teke soro
