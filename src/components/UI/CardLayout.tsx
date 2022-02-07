import React, { useEffect } from "react";
import "./cardlayout.css";
import logCompName from "../../helper/logCompName";

const CardLayout: React.FC<{ message: string; children: React.ReactNode; className: string }> = ({ message, children, className }) => {
  const componentName: string = "Card Layout";
  useEffect(() => {
    logCompName(message, componentName);
  }, [message]);

  const classes: string = "c-post " + className;

  return <div className={classes}>{children}</div>;
};

export default CardLayout;
