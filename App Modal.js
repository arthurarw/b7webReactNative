import React, { useState, useEffect } from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';


const Page = styled.SafeAreaView`
  flex: 1;
  align-content: center;
  justify-content: center;
  background-color: blue;
`;

const Box = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
`;

const ButtonModal = styled.Button``;
const BoxBody = styled.View`
  width: 80%;
  height: 200px;
  border-radius: 10px;
  background-color: #FFF;
`;

export default () => {
  const [ modalVisible, setModalVisible ] = useState(false);


  return (
    <Page>

      <ButtonModal title="Mostrar Modal" onPress={()=>setModalVisible(true)} />

      <Modal 
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={()=>setModalVisible(false)}
      >
        <Box>
          <BoxBody>
            <ButtonModal title="Fechar" onPress={()=>setModalVisible(false)} />
          </BoxBody>
        </Box>
      </Modal>
    </Page>
  );
}