import React, { useEffect, useState } from "react";
import { Comment } from "../../interface/Comment";
import { getComments } from "../../services/api";
import "./commblock.css";
import logCompName from "../../helper/logCompName";

const CommentsBlock: React.FC<Comment> = (props) => {
  const [loadComments, setLoadedComments] = useState<Comment[]>([]);
  const { message } = props;
  const componentName: string = "Comments Block";
  useEffect(() => {
    logCompName(message, componentName);
  }, [message]);

  const { id } = props;

  useEffect(() => {
    (async () => {
      const comment: Comment[] = await getComments(id);
      setLoadedComments(comment);
    })();
  }, [id]);

  return (
    <div className="e-comments">
      <h3>Comments:</h3>
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
  );
};

export default CommentsBlock;
