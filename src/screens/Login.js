import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { CommonActions, StackActions } from '@react-navigation/native';

import Perfil from './Perfil';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FFF; 
`;

const Texto = styled.Text`
  font-size:15px;
`;

const Botao = styled.Button``;

const Input = styled.TextInput`
  border:1px solid #000;
  height:40px;
  font-size:15px;
  margin:20px;
`;

const Page = (props) => {
  const handleLogin = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        CommonActions.navigate({ routeName: 'Perfil' })

      ]
    });
    props.navigation.dispatch(resetAction)
  }

  return (
    <Container>
      <Texto>Página LOGIN</Texto>

      <Input value={props.name} onChangeText={e => props.setName(e)} />

      <Texto>Nome: {props.name}</Texto>

      <Botao title="Fazer Login" onPress={handleLogin} />

    </Container>
  );
}

Page.navigationOptions = () => {
  return {
    title: 'Login'
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.userReducer.name,
    email: state.userReducer.email
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName:(name) => dispatch({type:'SET_NAME', payload: { name }}),
    setEmail:(email) => dispatch({type:'SET_EMAIL', payload: { email }})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);