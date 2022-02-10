import React, { useEffect, useState } from "react";
import { Comment } from "../../interface/Comment";
import { getComments } from "../../services/api";
import styles from "./CommsBlock.module.scss";
import logCompName from "../../helper/logCompName";

const CommentsBlock: React.FC<{ id: number; message: string }> = ({ id, message }) => {
  const [loadComments, setLoadedComments] = useState<Comment[]>([]);

  // Log message props
  const componentName: string = "Comments Block";
  useEffect(() => {
    logCompName(message, componentName);
  }, [message]);

  // Log message props
  useEffect(() => {
    (async () => {
      const comment: Comment[] = await getComments(id);
      setLoadedComments(comment);
    })();
  }, [id]);

  return (
    <React.Fragment>
      <h3>Comments:</h3>
      <div className={styles.comments}>
        <ul>
          {loadComments.map((item) => (
            <li key={item.id}>
              <h4>
                {item.name} {item.email}
              </h4>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default CommentsBlock;
