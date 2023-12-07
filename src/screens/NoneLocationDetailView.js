import React, { useState } from "react";
import LocationDetail from "../components/LocationDetail";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

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
    <div>
      <LocationDetail location={location} />
    </div>
  );
}

export default NoneLocationDetailView;
