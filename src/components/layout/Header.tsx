import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logCompName from "../../helper/logCompName";

const Header: React.FC<{ message: string }> = ({ message }) => {
  // Log message props
  const componentName: string = "Header";
  logCompName(message, componentName);

  return (
    <header>
      <nav>
        <NavLink to="/posts" className={styles.link}>
          All Posts
        </NavLink>
        <NavLink to="/form" className={styles.link}>
          Form
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
