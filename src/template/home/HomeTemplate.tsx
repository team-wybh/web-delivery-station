import Footer from 'layouts/\bfooter';
import Header from 'layouts/header';
import * as Style from './styles';

function HomeTemplate() {
  return (
    <Style.Main>
      <Style.Wrap>
        <Header />
        <Style.Container />
        <Footer />
      </Style.Wrap>
    </Style.Main>
  );
}

export default HomeTemplate;
