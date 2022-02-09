import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
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
      </nav>
    </header>
  );
};

export default Header;
