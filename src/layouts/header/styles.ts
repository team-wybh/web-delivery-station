import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88px;
`;


export const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 4%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.darkBlue};
  border: 0;
`;