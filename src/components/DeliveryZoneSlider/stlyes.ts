import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 0 20px;
`;

export const ZoneItem = styled.div`
  text-align: center;
  min-width: 240px;
  img {
    display: block;
    margin: 0 auto;
    width: 100%;;
  }

`;

export const TextBox = styled.div`
  margin-top: -62px;
  min-width: 240px;
  padding: 50px 16px 35px;
  background: #141517;
  border-radius: 20px;
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.white};
  font-weight: 500;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: -0.02em;
  white-space: pre-wrap;
`;

export const Button = styled.button`
  margin-top: 14px;
  padding: 6px 10px;
  width: 99px;
  height: 30px;
  background: #353B47;
  border-radius: 6px;
  border: 0;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #fff;
`;