import React from "react";
import { useLoaderData } from "react-router-dom";

//45-6 (Recap) Dynamic Route, Params And Load Dynamic Data

const PostDetails = () => {
  const postDetailsssssss = useLoaderData();
  console.log(postDetailsssssss);
  const { id, title, body } = postDetailsssssss;
  return (
    <div>
      <h3>Post Details about:{id}</h3>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
};

export default PostDetails;
