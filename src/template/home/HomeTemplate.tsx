import Footer from 'layouts/\bfooter';
import Header from 'layouts/header';
import * as Style from './styles';

const HomeTemplate = () => {
  return (
    <Style.Wrap>
      <Header />
      <Style.Container></Style.Container>
      <Footer />
    </Style.Wrap>
  );
};

export default HomeTemplate;
