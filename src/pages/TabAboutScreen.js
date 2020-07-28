import React from 'react';
import styled from 'styled-components/native';

const ViewApp = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TextHome = styled.Text``;

function TabAboutScreen() {
  return (
    <ViewApp>
      <TextHome>Tela de Sobre</TextHome>
    </ViewApp>
  );
}

export default TabAboutScreen;