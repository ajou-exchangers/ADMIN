import React from "react";
import "./LocationItem.css";

function LocationItem({ location }) {
  return (
    <li key={location._id} className="location-item">
      <div className="top-container">
        <div className="name-info">
          <p>{location.koName}</p>
          <p>( {location.enName} )</p>
        </div>
        <p className="category-container">{location.category}</p>
      </div>
      <div className="bottom-container">
        <div className="address-info">
          <p>{location.koAddress}</p>
          <p>( {location.enAddress} )</p>
        </div>
        <p>Created At: {location.createdAt}</p>
      </div>
    </li>
  );
}

export default LocationItem;
