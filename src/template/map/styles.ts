import styled from 'styled-components';

export const Map = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  .current-title{
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.02em;
    padding: 8px 12px;
    background: #20232A;
    color: #fff;
    border-radius: 900px;
  }
  .current-marker{
    scale: 1.33;
  }
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
  margin: 0 auto;
  padding: 24px 16px;
`;