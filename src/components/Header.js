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
          <button>장소 등록 목록</button>
        </Link>
        <Link to="/locations">
          <button>등록된 장소 목록</button>
        </Link>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    </header>
  );
};

export default React.memo(Header);
