import React, { useEffect, useState } from "react";
import LocationDetail from "../components/LocationDetail";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import KaKao from "../components/KaKao";
import "./NoneLocationDetailView.css";

function LocationDetailView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocationDetail = async () => {
      try {
        const response = await axios.get(
          `https://exchangers.site/api/exchangers/v1/locations/${id}`,
          {
            withCredentials: true,
          }
        );
        setLocation(response.data.location);
      } catch (error) {
        alert("Failed to fetch location details. Please try again.");
        navigate("/locations");
      }
    };

    fetchLocationDetail();
  }, []);

  const handleDeate = async () => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this location?"
    );

    if (shouldDelete) {
      try {
        await axios.delete(
          `https://exchangers.site/api/exchangers/v1/admin/locations/${id}`,
          {
            withCredentials: true,
          }
        );
        alert("Location deleted!");
        navigate("/locations");
      } catch (e) {
        if (e.response) {
          if (e.response.status === 401 || e.response.status === 403) {
            alert("You do not have permission.");
            navigate("/");
            return;
          } else if (e.response.status === 404) {
            alert("Not Found Location");
            navigate("/locations");
            return;
          }
        }
        alert("Failed to delete location");
        navigate("/locations");
      }
    }
  };
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div className="detail-container">
        <div className="map-container">
          <img
            style={{ width: "250px" }}
            src={location?.image}
            alt="locationImage"
          />
          <KaKao location={location} size={300} />
        </div>
        <LocationDetail location={location} />
      </div>
      <div className="button-container">
        <button onClick={handleDeate}>Delete Location</button>
      </div>
    </div>
  );
}

export default LocationDetailView;
