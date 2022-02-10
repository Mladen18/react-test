import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import logCompName from "../../helper/logCompName";
import styles from "./MainLayout.module.scss";

const MainLayout: React.FC<{ message: string; children: React.ReactNode }> = ({ message, children }) => {
  // Log message props
  const componentName: string = "Main Layout";
  logCompName(message, componentName);

  return (
    <React.Fragment>
      <Header message={message} />
      <article className={styles.main}>{children}</article>
      <Footer message={message} />
    </React.Fragment>
  );
};

export default MainLayout;
