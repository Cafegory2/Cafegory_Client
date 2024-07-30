import { useState, useEffect } from "react";
import { locationType } from "../types/gelocationType";

const useGeoLocation = () => {
  const [location, setLocation] = useState<locationType>({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  });

  //성공했을 때
  const onSuccess = (props: { coords: { latitude: number; longitude: number } }) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: props.coords.latitude,
        lng: props.coords.longitude,
      },
    });
  };

  //실패했을 때
  const onError = (error: { code: number; message: string }) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation이 제공되지 않는 브라우저 입니다.",
      });
    }
    //HTML5의 navigator.gelocation.getCurrentPosition API 사용
    //성공시 onSuccess 호출하고 실패시 onError 호출하게 됨. (onSuccess, onError = 콜백 함수)
    //onSuccess는 coords 객체를 포함한 객체를 props로 전달받고 onError는 에러 메세지와 코드를 포함한 객체를 props로 전달받음
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeoLocation;
