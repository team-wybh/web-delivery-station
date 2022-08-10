import Footer from 'layouts/\bfooter';
import Header from 'layouts/header';
import * as Style from './styles';
import PlaceSlider from '../../components/PlaceSlider';

import 'swiper/css';
import DeliveryZoneSlider from '../../components/DeliveryZoneSlider';
import HomeProvider from './HomeProvider';

function HomeTemplate() {
  const dummy = [
    {
      title: '여의도',
      places: [
        {
          image: '/images/img.svg', text: '여의도 강바람 맞으며 치킨콜?'
        },
        {
          image: '/images/img.svg', text: '여의도 강바람 맞으며 치킨콜?'
        },
        {
          image: '/images/img.svg', text: '여의도 강바람 맞으며 치킨콜?'
        }
        , {
          image: '/images/img.svg', text: '여의도 강바람 맞으며 치킨콜?'
        },
        {
          image: '/images/img.svg', text: '여의도 강바람 맞으며 치킨콜?'
        },
        {
          image: '/images/img.svg', text: '여의도 강바람 맞으며 치킨콜?'
        }
      ]
    }
    , {
      title: '뚝섬',
      places: [{
        image: '/images/img.svg', text: '뚝섬 강바람 맞으며 치킨콜?'
      }]
    }, {
      title: '반포',
      places: [{
        image: '/images/img.svg', text: '반포 강바람 맞으며 치킨콜?'
      }]
    },
    {
      title: '정',
      places: [{
        image: '/images/img.svg', text: '여의도 강바람 맞으며 치킨콜?'
      }]
    }
    , {
      title: '상',
      places: [{
        image: '/images/img.svg', text: '뚝섬 강바람 맞으며 치킨콜?'
      }]
    }, {
      title: '훈',
      places: [{
        image: '/images/img.svg', text: '반포 강바람 맞으며 치킨콜?'
      }]
    }

  ];
  return (
    <HomeProvider>
      <Style.Main>
        <Style.Wrap>
          <Header />
          <Style.Container>
            <DeliveryZoneSlider items={dummy} />
            <PlaceSlider items={dummy} />
          </Style.Container>
          <Footer />
        </Style.Wrap>
      </Style.Main>
    </HomeProvider>
  );
}

export default HomeTemplate;
