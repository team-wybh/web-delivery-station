import Footer from 'layouts/footer';
import Header from 'layouts/header';
import 'swiper/css';
import React, { useContext } from 'react';
import DeliveryZoneSlider from '../../components/DeliveryZoneSlider';
import { dummy, placeData } from '../../constant';
import { HomeStateContext } from './HomeContext';
import * as Style from './styles';
import PlaceSlider from '../../components/PlaceSlider';

function HomeTemplate() {
  const { isListView } = useContext(HomeStateContext);

  return (
    <Style.Main>
      <Style.Wrap>
        <Header />
        {
          isListView ?
            <Style.ListContainer>
              <Style.ListContent>
                {placeData.map((place: any) => <Style.Item
                  key={`${place.address}`}>
                  <div>
                    {/* <img src={place.image} alt='캐릭터 이미지' /> */}
                  </div>
                  <div>
                    {place.placeTitle}
                  </div>
                </Style.Item>)}
              </Style.ListContent>
            </Style.ListContainer> :
            <Style.Container>
              <DeliveryZoneSlider items={dummy} />
              <PlaceSlider items={dummy} />
            </Style.Container>
        }
        <Footer />
      </Style.Wrap>
    </Style.Main>
  );
}

export default HomeTemplate;
