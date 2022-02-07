import React from "react";
import "./footer.css";
import logCompName from "../../helper/logCompName";

const Footer: React.FC<{ message: string }> = ({ message }) => {
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
