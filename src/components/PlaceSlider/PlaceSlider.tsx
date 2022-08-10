import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper';
import * as Styles from './styles';
import { HomeDispatchContext, HomeStateContext } from '../../template/home/HomeContext';
import { SET_PLACE } from '../../template/home/HomeReducer';

interface PlaceSliderProps {
  items: any[];
}

function PlaceSlider({ items }: PlaceSliderProps) {
  const { place } = useContext(HomeStateContext);
  const dispatch = useContext(HomeDispatchContext);

  const handlePlaceClick = (place: string) => {
    dispatch({
      type: SET_PLACE,
      place
    });
  };

  return (
    <Styles.Wrap>
      <Swiper modules={[A11y]} slidesPerView={6} centeredSlides freeMode>
        {items.map(item => {
          return (
            <SwiperSlide key={item.title}>
              <Styles.Place active={place === item.title} onClick={() => handlePlaceClick(item.title)}>
                {item.title}
              </Styles.Place>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Styles.Wrap>
  );
}

export default PlaceSlider;
