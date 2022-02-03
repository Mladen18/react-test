import React, { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <section className="s-notFound">
      <h2>Page not found</h2>
      <h4>This page could not be found 404</h4>
      <Link to="/posts">Go back to Posts</Link>
    </section>
  );
};

export default NotFound;
