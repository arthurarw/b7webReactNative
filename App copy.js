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

const CalcButton = styled.Button`
    margin-top: 10px;
`;

const ResultArea = styled.View`
    margin-top: 30px;
    background-color: #EEE;
    padding: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const ResultItemTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

const ResultItem = styled.Text`
    font-size: 15px;
    margin-bottom: 30px;
`;

const PctArea = styled.View`
    flex-direction: row;
    margin: 20px;
`;

const PctItem = styled.Button``;

export default () => {

    const [bill, setBill] = useState('');
    const [tip, setTip] = useState(0);
    const [perc, setPerc] = useState(10);

    const calc = () => {
        let nBill = parseFloat(bill);

        if (nBill) {
            setTip((perc / 100) * nBill);
        } else {
            alert("Digite o valor da conta.");
        }
    }

    return (
        <Page>
            <HeaderText>Calculadora de Gorjeta</HeaderText>
            <Input
                placeholder="Quanto deu a conta?"
                placeholderTextColor="#000"
                keyboardType="numeric" value={bill} onChangeText={n => setBill(n)}
            />

            <PctArea>
                <PctItem title="5%" onPress={() => setPerc(5)} />
                <PctItem title="10%" onPress={() => setPerc(10)} />
                <PctItem title="15%" onPress={() => setPerc(15)} />
                <PctItem title="20%" onPress={() => setPerc(20)} />
            </PctArea>


            <CalcButton title={`Calcular ${perc}%`} onPress={calc} />
            {tip > 0 &&
                <ResultArea>
                    <ResultItemTitle>Valor da Conta:</ResultItemTitle>
                    <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>
                    <ResultItemTitle>Valor da Gorjeta:</ResultItemTitle>
                    <ResultItem>R$ {tip.toFixed(2)} ({perc}%)</ResultItem>
                    <ResultItemTitle>Valor Total:</ResultItemTitle>
                    <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
                </ResultArea>
            }
        </Page>
    );
}