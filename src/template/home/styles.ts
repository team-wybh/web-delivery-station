import { theme } from './../../styles/theme';
import styled from 'styled-components';

export const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${({ theme }) => theme.color.darkBlue1};
`;

export const Container = styled.div`
  flex: 1;
`;
