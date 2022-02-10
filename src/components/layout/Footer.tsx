import React from "react";
import styles from "./Footer.module.scss";
import logCompName from "../../helper/logCompName";

const Footer: React.FC<{ message: string }> = ({ message }) => {
  // Log message props
  const componentName: string = "Footer";
  logCompName(message, componentName);

  return (
    <footer>
      <div className={styles.footer}>
        <p>Footer Copy Mladen</p>
      </div>
    </footer>
  );
};

export default Footer;
