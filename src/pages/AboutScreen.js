import React from 'react';
import styled from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';


const ViewApp = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TextHome = styled.Text``;
const Button = styled.Button``;

function AboutScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const name = route.params?.name ?? 'Visitante';

  const handleBackButton = () => {
    navigation.goBack();
  }


  return (
    <ViewApp>
      <TextHome>Tela de Sobre: {name}</TextHome>
      <Button title="Voltar" onPress={handleBackButton} />
    </ViewApp>
  );
}

export default AboutScreen;