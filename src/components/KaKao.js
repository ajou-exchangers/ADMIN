import React from "react";
import { useEffect } from "react";
const { kakao } = window;

function KaKao({ location, width, height }) {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(
        location?.latitude || 37.29432708770308,
        location?.longitude || 126.99658273529194
      ),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(
      location?.latitude || 37.29432708770308,
      location?.longitude || 126.99658273529194
    );

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, [location]);

  return (
    <div
      id="map"
      style={{
        width: width,
        height: height,
        marginRight: "20px",
      }}
    ></div>
  );
}

export default KaKao;
