import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`;

const Input = styled.TextInput`
    height: 50px;
    width: 90%;
    font-size: 18px;
    background-color: #EEE;
    margin-top: 20px;
    border-radius: 10px;
    padding: 10px;
`;

const HeaderText = styled.Text`
    font-size: 25px;
`;


export default () => {

    const [bill, setBill] = useState('');

    return (
        <Page>
            <HeaderText>Calculadora de Gorjeta</HeaderText>
            <Input
                placeholder="Quanto deu a conta?"
                placeholderTextColor="#000"
                keyboardType="numeric" value={bill} onChangeText={n=>setBill(n)}
            />
        </Page>
    );
}
