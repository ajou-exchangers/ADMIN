import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NonAcceptLocationsView.css";
import MemoizedHeader from "../components/Header";
import MemoizedLocationList from "../components/LocationList";
import { useNavigate } from "react-router-dom";

const NonAcceptLocationsView = () => {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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
      <MemoizedHeader />
      <MemoizedLocationList
        title={"Unregistered locations"}
        locations={locations}
        link={"/none-locations"}
      />
      <div className="pagination-buttons">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={locations.length < itemsPerPage}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default NonAcceptLocationsView;
