import React from "react";
import { useEffect } from "react";
const { kakao } = window;

function KaKao({ location, size }) {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(
        location?.latitude || 37.29432708770308,
        location?.longitude || 126.99658273529194
      ), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    //지도 생성 및 객체 리턴
    const map = new kakao.maps.Map(container, options);

    // 마커가 표시될 위치입니다
    const markerPosition = new kakao.maps.LatLng(
      location?.latitude || 37.29432708770308,
      location?.longitude || 126.99658273529194
    );

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }, [location]);

  return (
    <div
      id="map"
      style={{ width: size, height: size, marginRight: "20px" }}
    ></div>
  );
}

export default KaKao;
