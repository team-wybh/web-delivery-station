import styled from 'styled-components';

export const Main = styled.section`
  background: ${props => props.theme.colors.darkBlue1};
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 768px;
  margin: 0 auto;
`;

export const Container = styled.div`
  flex: 1;
`;
