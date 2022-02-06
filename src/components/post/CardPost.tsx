import React from "react";
import "./cardpost.css";
import { Post } from "../../interface/Post";

const CardPost: React.FC<Post> = (props) => {
  return (
    <div className="e-post">
      <h4>Title: {props.title}</h4>
      <p>Body: {props.body}</p>
    </div>
  );
};

export default CardPost;
