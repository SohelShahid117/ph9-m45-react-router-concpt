import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

//45-6 (Recap) Dynamic Route, Params And Load Dynamic Data

import "../Posts/Posts.css";

const Posts = () => {
  const postssssss = useLoaderData();
  console.log(postssssss);

  return (
    <div>
      <h2>Total posts : {postssssss.length}</h2>
      <div className="posts">
        {postssssss.map((pst) => (
          <Post key={pst.id} pst={pst}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
