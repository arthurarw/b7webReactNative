import React, { useState, useEffect } from 'react';
import { Platform, Alert } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.View`
    width: 100px;
    height: 100px;
    background-color: #000;
    margin-bottom: 20px;
`;

const Input = styled.TextInput`
    height: 50px;
    width: 90%;
    border: 1px solid #000;
`;

const KeyBoardArea = styled.KeyboardAvoidingView`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export default () => {

    useEffect(() => {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {
                    text: 'Ask me later',
                    onPress: () => console.log('Ask me later pressed')
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
        );
    });

    return (
        <Page>
            <KeyBoardArea behavior={Platform.OS == 'ios' ? 'paddding' : null}>
                <Logo></Logo>
                <Input />
            </KeyBoardArea>
        </Page>
    );
}