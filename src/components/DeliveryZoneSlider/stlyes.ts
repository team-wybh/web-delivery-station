import styled from 'styled-components';

export const Wrap = styled.div``;

export const ZoneItem = styled.div`
  text-align: center;

  img {
    display: block;
    margin: 0 auto;
    width: 100%;;
  }

`;

export const Text = styled.p`
  color: ${props => props.theme.colors.white}
`;
