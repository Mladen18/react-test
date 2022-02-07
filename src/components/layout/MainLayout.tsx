import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { PropsChildren } from "../../interface/Props";
import logCompName from "../../helper/logCompName";

const MainLayout: React.FC<PropsChildren> = (props) => {
  const { message } = props;
  const componentName: string = "Main Layout";
  logCompName(message, componentName);

  return (
    <React.Fragment>
      <Header message={message} />
      <article className="main">{props.children}</article>
      <Footer message={message} />
    </React.Fragment>
  );
};

export default MainLayout;
