import React, { useEffect, useState } from "react";
import LocationDetail from "../components/LocationDetail";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import MemoizedHeader from "../components/Header";
import KaKao from "../components/KaKao";
import "./NoneLocationDetailView.css";
import MemoizedLocationInfo from "../components/LocationInfo";

function NoneLocationDetailView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
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

  const handleAccept = async () => {
    try {
      await axios.put(
        `https://exchangers.site/api/exchangers/v1/admin/locations-add/${id}`,
        {},
        {
          withCredentials: true,
        }
      );
      alert("Location accepted!");
      navigate("/none-locations");
    } catch (e) {
      if (e.response) {
        if (e.response.status === 401 || e.response.status === 403) {
          alert("You do not have permission.");
          navigate("/");
          return;
        } else if (e.response.status === 404) {
          alert("Not Found Location");
          navigate("/none-locations");
          return;
        } else if (e.response.status === 409) {
          alert("This place already exists. Please check again.");
          return;
        }
      }
      alert("Falied to accept location");
      navigate("/none-locations");
    }
  };

  const handleReject = async () => {
    try {
      await axios.delete(
        `https://exchangers.site/api/exchangers/v1/admin/locations-add/${id}`,
        {
          withCredentials: true,
        }
      );
      alert("Location rejected!");
      navigate("/none-locations");
    } catch (e) {
      alert("Falied to reject location");
      navigate("/none-locations");
    }
  };
  return (
    <div>
      <MemoizedHeader />
      <MemoizedLocationInfo location={location} />
      <div className="button-container">
        <button onClick={handleAccept}>Accept Location</button>
        <button onClick={handleReject}>Reject Location</button>
      </div>
    </div>
  );
}

export default NoneLocationDetailView;
