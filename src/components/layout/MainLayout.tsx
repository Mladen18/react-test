import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout: React.FC = (props) => {
  return (
    <React.Fragment>
      <Header />
      <article className="main">{props.children}</article>
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
