import React from "react";
import "./LocationDetail.css";

function LocationDetail({ location }) {
  return (
    <div className="container">
      <div>
        <p className="category">{location?.category}</p>
        <div className="title-container">
          <p>{location?.koName}</p>
          <p>({location?.enName})</p>
        </div>
        <div>
          <p className="label">Address</p>
          <div className="address-container">
            <p>{location?.koAddress}</p>
            <p>{location?.enAddress}</p>
          </div>
        </div>
        <div>
          <p className="label">Detail</p>
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
        </div>
        <div>
          <p className="label">Description</p>
          <div className="description-container">
            <p>{location?.description}</p>
          </div>
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
