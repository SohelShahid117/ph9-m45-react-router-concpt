import React from "react";
import { Link } from "react-router-dom";
//45-4 Load Data On Route Using Loader And UseLoaderData
//45-5 Dynamic Route With Params And Load Single User Data

const User = ({ usr }) => {
  const { id, name, username, email, address, company, phone } = usr;
  //   console.log(usr);
  const userStyle = {
    border: "2px solid orange",
    padding: "20px",
    borderRadius: "50px",
    marginTop: "20px",
  };
  return (
    <div style={userStyle}>
      {/* <h2>Single User</h2> */}
      <h2>{name}</h2>
      <h3>email:{email}</h3>
      <h3>
        <mark>{phone}</mark>
      </h3>
      {/* <Link to={`/usr/id`}>Show Details</Link> */}
      {/* <Link to={`/user/${id}`}>Show Details</Link> */}
      <Link to={`/user/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default User;
