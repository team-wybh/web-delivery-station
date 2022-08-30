import Footer from 'layouts/\bfooter';
import Header from 'layouts/header';
import * as Style from './styles';
import PlaceSlider from '../../components/PlaceSlider';

import 'swiper/css';
import DeliveryZoneSlider from '../../components/DeliveryZoneSlider';
import { dummy } from '../../constant';

function HomeTemplate() {
  return (
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
  );
}

export default HomeTemplate;
