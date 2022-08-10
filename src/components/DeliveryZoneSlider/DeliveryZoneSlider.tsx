import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper';
import { HomeStateContext } from '../../template/home/HomeContext';
import * as Styles from './stlyes';

interface DeliveryZoneSliderProps {
  items: any[];
}

function DeliveryZoneSlider({ items }: DeliveryZoneSliderProps) {
  const { place } = useContext(HomeStateContext);
  const filterPlaces = items.filter(item => item.title === place);
  const deliveryZones = filterPlaces[0].places;

  return (
    <Swiper
      modules={[A11y]}
      slidesPerView={3}
      centeredSlides={deliveryZones.length < 2}
      freeMode
    >
      {deliveryZones.map((zone: any) => {
        return (
          <Styles.Wrap>
            <SwiperSlide>
              <Styles.ZoneItem>
                <img src={zone.image} alt='캐릭터 이미지' />
                <Styles.Text>
                  {zone.text}
                </Styles.Text>
              </Styles.ZoneItem>
            </SwiperSlide>
          </Styles.Wrap>
        );
      })}
    </Swiper>
  );
}

export default DeliveryZoneSlider;
