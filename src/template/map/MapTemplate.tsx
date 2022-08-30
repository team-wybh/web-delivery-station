import { useContext, useEffect } from 'react';
import { HomeStateContext } from '../home/HomeContext';
import { dummy } from '../../constant';

function MapTemplate() {
  const { place } = useContext(HomeStateContext);
  const currentPlace = dummy.filter(item => item.title === place);
  const currentZone = currentPlace[0].places;

  useEffect(() => {
    const initMap = () => {
      const map = new naver.maps.Map('map', {
        // 지도 추가, 좌표를 기점으로 주변 지도가 추가된다.
        center: new naver.maps.LatLng(currentZone[0].latlng.lat, currentZone[0].latlng.lng),
        zoom: 15
      });
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
    initMap();
  }, [currentPlace]);

  const mapStyle = {
    width: '100%',
    height: '100vh'
  };

  return (
    <div id='map' style={mapStyle} />
  );
}

export default MapTemplate;