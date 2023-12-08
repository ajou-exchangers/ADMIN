import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NonAcceptLocationsView.css";
import Header from "../components/Header";
import LocationItem from "../components/LocationItem";
import { Link, useNavigate } from "react-router-dom";

const NonAcceptLocationsView = () => {
  const navigate = useNavigate();
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
        setLocations(response.data);
      } catch (e) {
        if (e.response) {
          if (e.response.status === 401 || e.response.status === 403) {
            alert("You do not have permission.");
            navigate("/");
            return;
          }
        }
        alert("Falied to accept location");
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <div>
      <Header />
      <h2>Unregistered locations</h2>
      <ul className="location-list">
        {locations.map((location) => (
          <Link key={location._id} to={`/none-locations/${location._id}`}>
            <LocationItem location={location} />
          </Link>
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
