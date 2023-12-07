import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <h1>Exchangers</h1>
      </div>
      <div className="header-right">
        <Link to="/">
          <button>장소 등록</button>
        </Link>
        <Link to="/edit-location">
          <button>장소 수정</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
