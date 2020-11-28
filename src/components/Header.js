import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <ul className="nav-links">
            <li>
              <Link to="/" className="btn-header">
                Home
              </Link>
            </li>

            <li>
              <Link to="/watched" className="btn-header">
                Watch List
              </Link>
            </li>

            <li>
              <Link to="/favorite" className="btn-header">
                Favorite
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
