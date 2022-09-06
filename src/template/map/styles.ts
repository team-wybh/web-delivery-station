import styled from 'styled-components';

export const Map = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  padding: 24px 16px;
`;