import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { CommonActions, StackActions } from '@react-navigation/native';

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
  const handleLogout = () => {
    //
  }

  return (
    <Container>
      <Texto>Página PERFIL</Texto>

      <Texto>Nome: {props.name}</Texto>
      <Texto>E-mail: {props.name}</Texto>
      <Botao title="Fazer Logout" onPress={handleLogout} />

    </Container>
  );
}

Page.navigationOptions = () => {
  return {
    title: 'Home'
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