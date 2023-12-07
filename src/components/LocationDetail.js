import React from "react";

function LocationDetail({ location }) {
  console.log(location);
  return (
    <div>
      <h2>{location?.koName}</h2>
      <p>{location?.enName}</p>
      <p>{location?.koAddress}</p>
      <p>{location?.enAddress}</p>
      <p>Kiosk Available: {location?.kioskAvailable ? "Yes" : "No"}</p>
      <p>Parking Available: {location?.parkingAvailable ? "Yes" : "No"}</p>
      <p>English Speaking: {location?.englishSpeaking ? "Yes" : "No"}</p>
      <p>WiFi Available: {location?.wifiAvailable ? "Yes" : "No"}</p>
      <p>Description: {location?.description}</p>
      <p>Category: {location?.category}</p>
      <p>Latitude: {location?.latitude}</p>
      <p>Longitude: {location?.longitude}</p>
      <p>Visible: {location?.isVisible ? "Yes" : "No"}</p>
      <p>Created At: {new Date(location?.createdAt).toLocaleString()}</p>
    </div>
  );
}

export default LocationDetail;
