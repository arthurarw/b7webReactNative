import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';


const ViewApp = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TextHome = styled.Text``;
const Button = styled.Button``;
const TextInput = styled.TextInput`
  width: 250px;
  padding: 10px;
  font-size: 15px;
  background-color: #CCC;
  margin: 10px 0;
`;


function HomeScreen() {
  const [ name, setName ] = useState('');
  const navigation = useNavigation();
  const [ count, setCount ] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: count
    })
  }, [count]);

  const handleSendButton = () => {
    navigation.setOptions({
      title: name
    });


    /*navigation.navigate('About', {
      name: name
    });*/
  }

  return (
    <ViewApp>
      <TextHome>Qual seu nome?</TextHome>
      <TextInput value={name} onChangeText={t=>setName(t)} />
      <Button title="Enviar" onPress={handleSendButton}/>
      <Button title="+1" onPress={()=>setCount(count+1)}/>
    </ViewApp>
  );
}

export default HomeScreen;