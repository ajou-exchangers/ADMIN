import React from "react";
import "./LocationDetail.css";

function LocationDetail({ location }) {
  console.log(location);
  return (
    <div className="container">
      <div>
        <div className="title-container">
          <p>{location?.koName}</p>
          <p>({location?.enName})</p>
        </div>
        <div>
          <p>{location?.koAddress}</p>
          <p>{location?.enAddress}</p>
        </div>

        <div className="check-box-container">
          <div className="child-check-box-container">
            <p>
              Kiosk Available:{" "}
              <input
                type="checkbox"
                checked={location?.kioskAvailable || false}
                disabled
              />
            </p>
            <p>
              Parking Available:{" "}
              <input
                type="checkbox"
                checked={location?.parkingAvailable || false}
                disabled
              />
            </p>
          </div>
          <div className="child-check-box-container">
            <p>
              English Speaking:{" "}
              <input
                type="checkbox"
                checked={location?.englishSpeaking || false}
                disabled
              />
            </p>
            <p>
              WiFi Available:{" "}
              <input
                type="checkbox"
                checked={location?.wifiAvailable || false}
                disabled
              />
            </p>
          </div>
        </div>
        <div>
          <p className="label">Description</p>
          <p>{location?.description}</p>
        </div>
        <div>
          <p className="label">Category</p>
          <p>{location?.category}</p>
        </div>
        <div>
          <p className="label">Created At</p>
          <p>{location?.createdAt}</p>
        </div>
      </div>
    </div>
  );
}

export default LocationDetail;
