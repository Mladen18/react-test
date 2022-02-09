import React, { useEffect } from "react";
import styles from "./CardPost.module.css";
import logCompName from "../../helper/logCompName";

const CardPost: React.FC<{ message: string; title: string; body: string }> = ({ message, title, body }) => {
  const componentName: string = "Card Post";

  useEffect(() => {
    logCompName(message, componentName);
  }, [message]);

  return (
    <div className={styles.post}>
      <h4>Title: {title}</h4>
      <p>Body: {body}</p>
    </div>
  );
};

export default CardPost;
