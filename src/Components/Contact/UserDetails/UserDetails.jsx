import React from "react";
import { useLoaderData } from "react-router-dom";

//45-5 Dynamic Route With Params And Load Single User Data

const UserDetails = () => {
  const userDetailsss = useLoaderData();
  const { id, name, address, email, phone } = userDetailsss;
  console.log(userDetailsss);
  return (
    <div>
      <h2>User details is in here</h2>
      <h3>{name}</h3>
      <h4>email:{email}</h4>
      <h5>Phone : {phone}</h5>
    </div>
  );
};

export default UserDetails;
