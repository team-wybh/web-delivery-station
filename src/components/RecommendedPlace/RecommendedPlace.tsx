import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper';
import * as Styles from './styles';
import { HomeDispatchContext, HomeStateContext } from '../../template/home/HomeContext';
import { SET_ZONE } from '../../template/home/HomeReducer';

interface RecommendedPlaceProps {
  items: any[];
  handleZoneClick: any;
}

function RecommendedPlace({ items, handleZoneClick }: RecommendedPlaceProps) {
  const { place, currentZone } = useContext(HomeStateContext);

  const filterPlaces = items.filter(item => item.title === place);
  const deliveryZones = filterPlaces[0].places;
  const deliveryZoneLength = filterPlaces[0].places.length;

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
              <SwiperSlide key={zone.title} onClick={()=> handleZoneClick(zone)}>
                <Styles.Zone active={currentZone.title === zone.title}>
                  <Styles.Title>
                    {zone.title}
                  </Styles.Title>
                  <Styles.Address>
                    {zone.address}
                  </Styles.Address>
                  <Styles.Text>
                    {zone.description}
                  </Styles.Text>
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
