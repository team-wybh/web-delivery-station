import { useContext, useEffect, useRef, useState } from 'react';
import { ReactComponent as Back } from 'assets/icons/ico_back_40.svg';
import { ReactComponent as CurrentLocationBtn } from 'assets/icons/ico_btn_currentlocation.svg';
import { useNavigate } from 'react-router-dom';
import { HomeDispatchContext, HomeStateContext } from '../home/HomeContext';
import { dummy } from '../../constant';
import MapTitle from '../../components/MapTItle';
import * as Styles from './styles';
import useCurrentLocation from '../../hooks/useCurrentLocation';
import RecommendedPlace from '../../components/RecommendedPlace';
import { SET_ZONE } from '../home/HomeReducer';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24 // 24 hour
};

function MapTemplate() {
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any | null>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const { naver } = window;
  const { location, error } = useCurrentLocation(geolocationOptions);
  const navigate = useNavigate();
  const { place, currentZone } = useContext(HomeStateContext);
  const dispatch = useContext(HomeDispatchContext);

  const currentPlace = dummy.filter(item => item.title === place);
  const deliveryZone = currentPlace[0].places;

  const iconOption = {
    size: new naver.maps.Size(25, 34),
    scaledSize: new naver.maps.Size(25, 34),
    content: `<img alt='marker' src='/images/marker.svg' />`
  };

  const markersRender = (currentZone: any) => {
    const iconActiveOption = {
      size: new naver.maps.Size(25, 34),
      scaledSize: new naver.maps.Size(25, 34),
      content: `<div class='marker-wrap'>
                  <div class='marker-title'>${currentZone.title}</div><img alt='marker' src='/images/marker.svg' class='current-marker' />
                </div>`
    };

    markers.forEach((marker: any) => {
      if (marker.position.x === currentZone.latlng.lng) {
        marker.setIcon(iconActiveOption);
      } else {
        marker.setIcon(iconOption);
      }
    });
  };

  useEffect(() => {
    const initMap = () => {
      mapRef.current = new naver.maps.Map('map', {
        // 지도 추가, 좌표를 기점으로 주변 지도가 추가된다.
        center: new naver.maps.LatLng(deliveryZone[0].latlng.lat, deliveryZone[0].latlng.lng),
        zoom: 15
      });
      deliveryZoneRender();
    };
    initMap();
  }, [place]);

  useEffect(() => {
    if (!markers) return;
    markersRender(currentZone);
  }, [markers, currentZone]);

  // 현재 배달존 렌더함수
  const deliveryZoneRender = () => {
    const markers: any[] = [];
    deliveryZone?.forEach(item => {
      markers.push(new naver.maps.Marker({
          position: new naver.maps.LatLng(
            item.latlng.lat,
            item.latlng.lng
          ),
          map: mapRef.current,
          icon: iconOption
        })
      );
    });
    setMarkers(markers);
  };

  const handleCurrentLocationClick = () => {
    if (!mapRef.current) return;
    if (!location) return;
    if (error) {
      alert(error);
      return;
    }

    const { latitude, longitude } = location;

    mapRef.current.setCenter(new naver.maps.LatLng(latitude, longitude));
    markerRef.current = new naver.maps.Marker({
      position: new naver.maps.LatLng(
        latitude, longitude
      ),
      map: mapRef.current,
      icon: {
        content: `<img alt = 'marker' src = '/images/ico_currentlocation.svg'/>`
      }
    });
  };

  const handleBackClick = () => {
    navigate('/');
  };

  const handleZoneClick = (currentZone: any) => {
    if (!mapRef.current) return;
    if (!currentZone) return;
    dispatch({ type: SET_ZONE, currentZone });
    mapRef.current.setCenter(new naver.maps.LatLng(currentZone.latlng.lat, currentZone.latlng.lng));
  };

  return (
    <Styles.Map id='map'>
      <Styles.Header>
        <Back onClick={handleBackClick} />
        <MapTitle />
        <CurrentLocationBtn onClick={handleCurrentLocationClick} />
      </Styles.Header>
      <RecommendedPlace items={dummy} handleZoneClick={handleZoneClick} />
    </Styles.Map>
  );
}

export default MapTemplate;