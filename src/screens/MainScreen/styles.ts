import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${({theme}) => theme.size.padding};
  align-items: center;
`;

export const Row = styled.View`
  width: 100%;
`;
