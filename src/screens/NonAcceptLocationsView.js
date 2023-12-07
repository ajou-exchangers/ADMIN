import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NonAcceptLocationsView.css";
import Header from "../components/Header";
import LocationItem from "../components/LocationItem";

const NonAcceptLocationsView = () => {
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://exchangers.site/api/exchangers/v1/admin/locations?page=${currentPage}`,
          {
            withCredentials: true,
          }
        );

        console.log("Locations:", response.data);
        setLocations(response.data);
      } catch (error) {
        console.error("Failed to fetch locations:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <div>
      <Header />
      <h2>Add Locations</h2>
      <ul className="location-list">
        {locations.map((location) => (
          <LocationItem location={location} />
        ))}
      </ul>
      <div className="pagination-buttons">
        <button onClick={() => setCurrentPage(currentPage - 1)}>
          Previous Page
        </button>
        <button onClick={() => setCurrentPage(currentPage + 1)}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default NonAcceptLocationsView;
