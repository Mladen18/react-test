import React from "react";
import { Link } from "react-router-dom";
import logCompName from "../helper/logCompName";

const NotFound: React.FC<{ message: string }> = ({ message }) => {
  const componentName: string = "Not Found";
  logCompName(message, componentName);

  return (
    <section className="s-notFound">
      <h2>Page not found</h2>
      <h4>This page could not be found 404</h4>
      <Link to="/posts">Go back to Posts</Link>
    </section>
  );
};

export default NotFound;
