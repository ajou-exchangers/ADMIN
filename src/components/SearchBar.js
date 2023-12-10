import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="검색어를 입력하세요"
      />
      <button className="search-button" onClick={handleSearch}>
        검색
      </button>
    </div>
  );
};

export default SearchBar;
