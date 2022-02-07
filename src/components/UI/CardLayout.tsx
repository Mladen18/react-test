import React, { useEffect } from "react";
import "./cardlayout.css";
import { PropsClassName } from "../../interface/Props";
import logCompName from "../../helper/logCompName";

const CardLayout: React.FC<PropsClassName> = (props) => {
  const { message } = props;
  const componentName: string = "Card Layout";
  useEffect(() => {
    logCompName(message, componentName);
  }, [message]);

  const classes: string = "c-post " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default CardLayout;
