import React from "react";
import KaKao from "./KaKao";
import LocationDetail from "./LocationDetail";
import "./LocationInfo.css";

function LocationInfo({ location }) {
  return (
    <div className="detail-container">
      <div className="map-container">
        <img
          style={{ width: "400px", height: "350px" }}
          src={location?.image}
          alt="locationImage"
        />
        <KaKao location={location} width={400} height={350} />
      </div>
      <LocationDetail location={location} />
    </div>
  );
}

export default React.memo(LocationInfo);
