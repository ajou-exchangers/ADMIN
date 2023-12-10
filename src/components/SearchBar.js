import React, { useState } from "react";
import "./SearchBar.css";

const validCategories = [
  "All",
  "Restaurant",
  "Cafe",
  "Pharmacy",
  "Bank",
  "Convenience store",
];

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm, selectedCategory);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Please enter your search term."
      />
      <select value={selectedCategory} onChange={handleCategoryChange}>
        {validCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
