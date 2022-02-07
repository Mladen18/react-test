import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logCompName from "../../helper/logCompName";

const Header: React.FC<{ message: string }> = ({ message }) => {
  const componentName: string = "Header";
  logCompName(message, componentName);

  return (
    <header>
      <nav>
        <NavLink to="/posts" className="c-link">
          All Posts
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
