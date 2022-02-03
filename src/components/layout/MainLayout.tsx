import React, { FC, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout: FC = (props) => {
  return (
    <Fragment>
      <Header />
      <article className="main">{props.children}</article>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
