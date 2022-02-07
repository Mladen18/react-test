import React, { useEffect } from "react";
import "./cardpost.css";
import { Post } from "../../interface/Post";
import logCompName from "../../helper/logCompName";

const CardPost: React.FC<Post> = (props) => {
  const { message } = props;
  const componentName: string = "Card Post";

  useEffect(() => {
    logCompName(message, componentName);
  }, [message]);

  return (
    <div className="e-post">
      <h4>Title: {props.title}</h4>
      <p>Body: {props.body}</p>
    </div>
  );
};

export default CardPost;
