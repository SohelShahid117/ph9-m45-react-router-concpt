import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

//45-6 (Recap) Dynamic Route, Params And Load Dynamic Data

const PostDetails = () => {
  const postDetailsssssss = useLoaderData();
  console.log(postDetailsssssss);
  const { id, title, body } = postDetailsssssss;

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  // const paramsss = useParams();
  // console.log(paramsss);
  const { postId } = useParams();
  console.log(postId);
  return (
    <div>
      <h3>Post Details about:{id}</h3>
      <h4>{title}</h4>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
