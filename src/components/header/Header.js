import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="" />
        <div className="links">
          <Link to="/shop">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Manage Inventory</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
