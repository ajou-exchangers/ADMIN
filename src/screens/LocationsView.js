import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NonAcceptLocationsView.css";
import MemoizedHeader from "../components/Header";
import MemoizedLocationList from "../components/LocationList";
import SearchBar from "../components/SearchBar";

const LocationsView = () => {
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://exchangers.site/api/exchangers/v1/locations`,
          {
            withCredentials: true,
          }
        );
        setLocations(response.data);
      } catch (e) {
        alert("Falied to fetch locations");
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://exchangers.site/api/exchangers/v1/locations?search=${searchTerm}`
      );
      setLocations(response.data);
    } catch (error) {
      alert("Falied to fetch locations");
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = locations.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <MemoizedHeader />
      <SearchBar onSearch={handleSearch} />
      <MemoizedLocationList
        title={"Locations"}
        locations={currentItems}
        link={"/locations"}
      />
      <div className="pagination-buttons">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentItems.length < itemsPerPage}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default LocationsView;
