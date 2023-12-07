import React, { useState } from "react";
import LocationDetail from "../components/LocationDetail";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import KaKao from "../components/KaKao";
import "./NoneLocationDetailView.css";

function NoneLocationDetailView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  useState(() => {
    const fetchLocationDetail = async () => {
      try {
        const response = await axios.get(
          `https://exchangers.site/api/exchangers/v1/admin/locations/${id}`,
          {
            withCredentials: true,
          }
        );
        setLocation(response.data);
      } catch (error) {
        alert("Failed to fetch location details. Please try again.");
        navigate("/none-locations");
      }
    };

    fetchLocationDetail();
  }, []);
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div className="detail-container">
        <KaKao location={location} />
        <LocationDetail location={location} />
      </div>
    </div>
  );
}

export default NoneLocationDetailView;
