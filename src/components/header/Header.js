import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <header>
      <nav>
        <img src={logo} alt="" />
        <div className="links">
          <Link to="/shop">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Manage Inventory</Link>
          {user && <Link to="/">{user.displayName}</Link>}
          {user ? (
            <button onClick={logout} className="header-btn">
              Logout
            </button>
          ) : (
            <Link to="/login" className="header-btn">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
