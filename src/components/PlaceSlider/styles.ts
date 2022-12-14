import styled from 'styled-components';

export const Wrap = styled.div`
  margin-top: 50px;
  .swiper {
    display: flex;
    justify-content: center;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
`;

interface PlaceProps {
  active: boolean;
}

export const Place = styled.button<PlaceProps>`
  display: block;
  width: 52px;
  height: 52px;
  border: 0;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  background: ${props => (props.active ? props.theme.colors.green : 'transparent')};
  font-weight: ${props => (props.active ? 700 : 400)};
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${props => (props.active ? props.theme.colors.darkBlue1 : props.theme.colors.gray)};
  cursor: pointer;
`;