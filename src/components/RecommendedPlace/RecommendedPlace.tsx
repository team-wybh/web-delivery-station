import React, { useContext, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper';
import { ReactComponent as CopyDark } from 'assets/icons/ico_copy_dark.svg';
import { ReactComponent as CopyWhite } from 'assets/icons/ico_copy_white.svg';
import { HomeStateContext } from '../../template/home/HomeContext';
import * as Styles from './styles';
import { ANDROID, checkMobile } from '../../utills';

interface RecommendedPlaceProps {
  items: any[];
  handleZoneClick: any;
}

function RecommendedPlace({ items, handleZoneClick }: RecommendedPlaceProps) {
  const { place, currentZone } = useContext(HomeStateContext);
  const [isCopied, setIsCopied] = useState(false);
  const filterPlaces = items.filter(item => item.title === place);
  const deliveryZones = filterPlaces[0].places;
  const deliveryZoneLength = filterPlaces[0].places.length;

  const handleButtonClick = (active: boolean) => {
    if (!active) return;
    if(checkMobile() === ANDROID){
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      DeliveryZoneAndroid.openMapApp({latitude: currentZone.latlng.lat, longitude: currentZone.latlng.lng})
      return;
    }

    const isNaver = window.confirm('배달존 위치 찾기를 위해 네이버 지도를 여시겠습니까?');
    if (!isNaver) return;
    const url = `https://m.map.naver.com/map.naver?lat=${currentZone.latlng.lat}&lng=${currentZone.latlng.lng}&dlevel=12&mapMode=&pinTitle=&boundary=&traffic=#`;
    window.open(url);
  };

  const handleCopyClick = () => {
    setIsCopied(true);
    if (!isCopied) return;
    alert('복사가 완료 되었어요!');
  };
  return (
    <Styles.Wrap>
      <Styles.Header>
        추천 픽업 장소 <em>{deliveryZoneLength}</em>
      </Styles.Header>
      <Styles.SlideWrap>
        <Swiper
          modules={[A11y]}
          slidesPerView='auto'
          spaceBetween={10}
          freeMode
          direction='vertical'
        >
          {deliveryZones.map((zone: any) => {
            return (
              <SwiperSlide key={zone.title} onClick={() => handleZoneClick(zone)}>
                <Styles.Zone active={currentZone.title === zone.title}>
                  <div>
                    <Styles.Title>
                      {zone.title}
                    </Styles.Title>
                    <CopyToClipboard text={zone.address} onCopy={handleCopyClick}>
                      <Styles.AddressWrap>
                        <Styles.Address>
                          {zone.address}
                        </Styles.Address>
                        <Styles.CopyButton>
                          {currentZone.title === zone.title ? <CopyDark /> : <CopyWhite />}
                        </Styles.CopyButton>
                      </Styles.AddressWrap>
                    </CopyToClipboard>
                    <Styles.Text>
                      {zone.description}
                    </Styles.Text>
                  </div>
                  <Styles.Button type='button' active={currentZone.title === zone.title}
                                 onClick={() => handleButtonClick(currentZone.title === zone.title)}>
                    도착
                  </Styles.Button>
                </Styles.Zone>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Styles.SlideWrap>
    </Styles.Wrap>
  );
}

export default RecommendedPlace;
