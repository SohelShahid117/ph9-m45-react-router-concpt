import React from "react";
import "../Post/post.css";
import { Link } from "react-router-dom";

//45-6 (Recap) Dynamic Route, Params And Load Dynamic Data

const Post = ({ pst }) => {
  console.log(pst);
  const { userId, id, title, body } = pst;
  return (
    <div className="post">
      <h1>post id : {id}</h1>
      <h3>title : {title}</h3>
      <Link to={`/pst/${id}`}>
        <button>Click Me</button>
      </Link>
    </div>
  );
};

export default Post;
