import React, { useEffect } from "react";
import { Comment } from "../../interface/Comment";
import "./commblock.css";
import logCompName from "../../helper/logCompName";

const CommentBlock: React.FC<{ comments: Comment[]; message: string }> = ({ comments, message }) => {
  const componentName: string = "Comment Block";

  useEffect(() => {
    logCompName(message, componentName);
  }, [message]);

  return (
    <div className="e-comments">
      <h3>Comments:</h3>
      <ul>
        {comments.map((item: Comment) => (
          <li key={item.id}>
            <h4>
              {item.name} {item.email}
            </h4>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentBlock;
