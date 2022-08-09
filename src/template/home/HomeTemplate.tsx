import Footer from 'layouts/\bfooter';
import Header from 'layouts/header';
import * as Style from './styles';
import PlaceSlider from '../../components/PlaceSlider';

import 'swiper/css';

function HomeTemplate() {
  return (
    <Style.Main>
      <Style.Wrap>
        <Header />
        <Style.Container>
          <PlaceSlider />
        </Style.Container>
        <Footer />
      </Style.Wrap>
    </Style.Main>
  );
}

export default HomeTemplate;
