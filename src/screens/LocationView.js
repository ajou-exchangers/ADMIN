import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LocationView.css";
import Header from "../components/Header";

const LocationView = () => {
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
          <li key={location._id} className="location-item">
            <div className="top-container">
              <div className="name-info">
                <p>{location.koName}</p>
                <p>( {location.enName} )</p>
              </div>
              <p>{location.category}</p>
            </div>
            <div className="bottom-container">
              <div className="address-info">
                <p>{location.koAddress}</p>
                <p>( {location.enAddress} )</p>
              </div>
              <p>Created At: {location.createdAt}</p>
            </div>
          </li>
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

export default LocationView;
