import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Entypo';

const ListaItemSwipe = styled.TouchableHighlight`
	width: 100%;
	height: 50px;
	background-color: red;
	justify-content: center;
`;

const ListaItemIcon = styled.View`
	width: 20px;
	height: 20px;
	background-color: #FFF;
	margin-left: 15px;
`;



export default (props) => {
	return (
		<ListaItemSwipe onPress={props.onDelete} underlayColor="#FF3333">
			<Icon name="trash" size={20} color="#FFF" style={ {marginLeft: 15} } />
		</ListaItemSwipe>
	);
}