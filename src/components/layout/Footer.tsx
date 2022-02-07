import React from "react";
import "./footer.css";
import { Props } from "../../interface/Props";
import logCompName from "../../helper/logCompName";

const Footer: React.FC<Props> = (props) => {
  const { message } = props;
  const componentName: string = "Footer";
  logCompName(message, componentName);

  return (
    <footer>
      <div className="footer-wrapper">
        <p>Footer Copy Mladen</p>
      </div>
    </footer>
  );
};

export default Footer;
