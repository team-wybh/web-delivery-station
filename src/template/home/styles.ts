import styled from 'styled-components';

export const Main = styled.section`
  background: ${props => props.theme.colors.darkBlue1};
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 768px;
  margin: 0 auto;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


export const ListContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 16px;
`;

export const ListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  grid-gap: 40px 15px;
`;

export const Item = styled.div`
  height: 102px;
  background: red;
`;