import { useContext, useEffect, useState } from 'react';
import { ReactComponent as Back } from 'assets/icons/ico_back_40.svg';
import { ReactComponent as CurrentLocationBtn } from 'assets/icons/ico_btn_currentlocation.svg';
import { useNavigate } from 'react-router-dom';
import { HomeStateContext } from '../home/HomeContext';
import { dummy } from '../../constant';
import MapTitle from '../../components/MapTItle';
import * as Styles from './styles';
import useCurrentLocation from '../../hooks/useCurrentLocation';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24 // 24 hour
};

function MapTemplate() {
  const { location, error } = useCurrentLocation(geolocationOptions);
  const navigate = useNavigate();
  const { place } = useContext(HomeStateContext);
  const currentPlace = dummy.filter(item => item.title === place);
  const currentZone = currentPlace[0].places;

  // 현재 배달존 렌더함수 
  const currentZoneRender = (map: any) => {
    currentZone.forEach(item => {
      const current = new naver.maps.Marker({
        position: new naver.maps.LatLng(
          item.latlng.lat,
          item.latlng.lng
        ),
        map,
        icon: {
          content: `
              <img alt='marker' src='/images/marker.svg' />
            `
        }
      });
    });
  };

  const handleCurrentLocationClick = () => {
    if (!location) return;
    if (error) {
      alert(error);
      return;
    }

    const { latitude, longitude } = location;
    const map = new naver.maps.Map('map');
    map.setCenter(new naver.maps.LatLng(latitude, longitude));

    const currentMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(
        latitude, longitude
      ),
      map,
      icon: {
        content: `
             <img alt='marker' src='/images/ico_currentlocation.svg' />
            `
      }
    });

    currentZoneRender(map);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  useEffect(() => {
    const initMap = () => {
      const map = new naver.maps.Map('map', {
        // 지도 추가, 좌표를 기점으로 주변 지도가 추가된다.
        center: new naver.maps.LatLng(currentZone[0].latlng.lat, currentZone[0].latlng.lng),
        zoom: 15
      });
      currentZoneRender(map);
    };
    initMap();
  }, [place]);

  return (
    <Styles.Map id='map'>
      <Styles.Header>
        <Back onClick={handleBackClick} />
        <MapTitle />
        <CurrentLocationBtn onClick={handleCurrentLocationClick} />
      </Styles.Header>

    </Styles.Map>
  );
}

export default MapTemplate;