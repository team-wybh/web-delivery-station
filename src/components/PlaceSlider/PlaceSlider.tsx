import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper';
import * as Styles from './styles';

function PlaceSlider() {
  const [place, setPlace] = useState('여의도');

  const dummy = [
    {
      title: '여의도',
      places: [{
        images: '', text: '여의도 강바람 맞으며 치킨콜?'
      }]
    }
    , {
      title: '뚝섬',
      places: [{
        images: '', text: '뚝섬 강바람 맞으며 치킨콜?'
      }]
    }, {
      title: '반포',
      places: [{
        images: '', text: '반포 강바람 맞으며 치킨콜?'
      }]
    },
    {
      title: '정',
      places: [{
        images: '', text: '여의도 강바람 맞으며 치킨콜?'
      }]
    }
    , {
      title: '상',
      places: [{
        images: '', text: '뚝섬 강바람 맞으며 치킨콜?'
      }]
    }, {
      title: '훈',
      places: [{
        images: '', text: '반포 강바람 맞으며 치킨콜?'
      }]
    }

  ];

  const handlePlaceClick = (place: string) => {
    console.log(place);
    setPlace(place);
  };

  return (
    <Styles.Wrap>
      <Swiper
        modules={[A11y]}
        slidesPerView={6}
        centeredSlides
        freeMode
      >
        {dummy.map(item => {
          return <SwiperSlide key={item.title}>
            <Styles.Place active={place === item.title} onClick={() => handlePlaceClick(item.title)}>
              {item.title}
            </Styles.Place>
          </SwiperSlide>;
        })}
      </Swiper>
    </Styles.Wrap>
  );
}

export default PlaceSlider;
