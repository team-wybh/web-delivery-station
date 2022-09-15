import styled from 'styled-components';

export const Wrap = styled.div`
  max-width: 332px;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;
export const Header = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  padding: 10px 14px;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: -0.02em;
  background: #fff;
  box-shadow: 1px 3px 6px rgba(40, 40, 40, 0.16);
  border-radius: 900px;

  em {
    color: #2E8AF7;
  }
`;
export const SlideWrap = styled.div`
  .swiper {
    max-width: 332px;
    max-height: 284px;
  }
`;
interface Zone {
  active:boolean
}
export const Zone = styled.div<Zone>`
  padding: 24px;
  background: ${({active})=> (active ? '#20232A':'#fff')};
  box-shadow: 1px 3px 6px rgba(40, 40, 40, 0.36);
  border-radius: 20px;
  color: ${({active})=> (active ? '#fff':'#20232A')};
  letter-spacing: -0.02em;
  cursor: pointer;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 5px;
  line-height: 25px;
`

export const Address =  styled.address`
  font-weight: 400;
  font-size: 13px;
  color: #97979D;
  margin-bottom: 14px;
`
export const Text = styled.p`
  font-weight: 500;
  font-size: 13px;
  letter-spacing: -0.02em;
`