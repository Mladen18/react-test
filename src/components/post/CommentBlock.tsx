import React, { useEffect, useState } from "react";
import { Comment } from "../../interface/Comment";
import styles from "./CommsBlock.module.scss";
import logCompName from "../../helper/logCompName";

const CommentBlock: React.FC<{ comments: Comment[] | null; message: string; id: number | null }> = ({ comments, message, id }) => {
  const [loadComments, setLoadedComments] = useState<Comment[]>([]);
  // Log message props
  const componentName: string = "Comment Block";
  useEffect(() => {
    logCompName(message, componentName);
  }, [message]);

  useEffect(() => {
    let comment: Comment[] | null = comments;
    if (comments != null && id != null) {
      comment = comments.filter((item: Comment) => item.postId === id);
      setLoadedComments(comment);
    } else {
      if (comments != null) {
        setLoadedComments(comments);
      }
    }
  }, [comments, id]);

  return (
    <React.Fragment>
      <h3>Comments:</h3>
      <div className={styles.comments}>
        <ul>
          {loadComments.length > 0 ? (
            loadComments.map((item: Comment) => (
              <li key={item.id}>
                <h4>
                  {item.name} {item.email}
                </h4>
                <p>{item.body}</p>
              </li>
            ))
          ) : (
            <h1>No comments</h1>
          )}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default CommentBlock;
