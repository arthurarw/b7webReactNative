import React from 'react';
import styled from 'styled-components/native';

const ViewApp = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TextHome = styled.Text``;

function TabHomeScreen() {
  return (
    <ViewApp>
      <TextHome>Tela de HOME</TextHome>
    </ViewApp>
  );
}

export default TabHomeScreen;