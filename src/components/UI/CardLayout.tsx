import React from "react";
import "./cardlayout.css";

const CardLayout: React.FC<{ className: string }> = (props) => {
  const classes: string = "c-post " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default CardLayout;
