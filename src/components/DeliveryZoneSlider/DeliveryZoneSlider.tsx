import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper';
import { useNavigate } from 'react-router-dom';
import { HomeDispatchContext, HomeStateContext } from '../../template/home/HomeContext';
import * as Styles from './stlyes';
import { SET_ZONE } from '../../template/home/HomeReducer';

interface DeliveryZoneSliderProps {
  items: any[];
}

function DeliveryZoneSlider({ items }: DeliveryZoneSliderProps) {
  const { place } = useContext(HomeStateContext);
  const dispatch = useContext(HomeDispatchContext);
  const filterPlaces = items.filter(item => item.title === place);
  const deliveryZones = filterPlaces[0].places;
  const navigate = useNavigate();

  const handleOnclick = (currentZone: any) => {
    navigate('/map', { state: place });
    dispatch({ type: SET_ZONE, currentZone });
  };

  return (
    <Styles.Wrap>
      <Swiper
        modules={[A11y]}
        slidesPerView={1}
        freeMode

      >
        {deliveryZones.map((zone: any) => {
          return (
            <SwiperSlide key={zone.title} onClick={() => handleOnclick(zone)}>
              <Styles.ZoneItem>
                <img src={zone.image} alt='캐릭터 이미지' />
                <Styles.TextBox>
                  <Styles.Text>
                    {zone.text}
                  </Styles.Text>
                  <Styles.Button type='button'>배달존 찾기</Styles.Button>
                </Styles.TextBox>
              </Styles.ZoneItem>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Styles.Wrap>
  );
}

export default DeliveryZoneSlider;
