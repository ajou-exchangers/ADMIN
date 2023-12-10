import React from "react";
import { Link } from "react-router-dom";
import "./LocationList.css";
import LocationItem from "./LocationItem";

function LocationList({ title, link, locations }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul className="location-list">
        {locations.map((location) => (
          <Link
            key={location._id}
            to={link + "/" + location._id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <LocationItem location={location} />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(LocationList);
