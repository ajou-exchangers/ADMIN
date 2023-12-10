import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.post(
        `https://exchangers.site/api/exchangers/v1/auth/signout`,
        {},
        {
          withCredentials: true,
        }
      );
      alert("Sign out");
      navigate("/");
    } catch (e) {
      alert("Falied to sign out");
      navigate("/");
    }
  };
  return (
    <header>
      <div className="header-left">
        <h1>Exchangers</h1>
      </div>
      <div className="header-right">
        <Link to="/none-locations">
          <button>Unregistered locations</button>
        </Link>
        <Link to="/locations">
          <button>Registered Locations</button>
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default React.memo(Header);
