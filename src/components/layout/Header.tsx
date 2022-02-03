import React, { FC } from "react";
import { NavLink } from "react-router-dom";

const Header: FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/posts">All Posts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
