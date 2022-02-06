import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header: React.FC = () => {
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
