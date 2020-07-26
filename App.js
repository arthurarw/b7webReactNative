import React, {useState} from 'react';
import styled from 'styled-components/native';
import lista from './src/lista';
import ListaItem from './src/components/ListaItem';
import AddItemArea from './src/components/AddItemArea';
import uuid from 'react-native-uuid';


const Page = styled.SafeAreaView`
    flex:1;
`;
/*const Scroll = styled.ScrollView`
    flex:1;
`;*/
const Listagem = styled.FlatList`
    flex:1;
`;

export default () => {
  const [items, setItems] = useState(lista);
  
  const addNewItem = (text) => {
    let newItems = [...items];
    newItems.push({
      id: uuid.v4(),
      task: text,
      done: false
    });
    setItems(newItems);
  }


	return (
		<Page>
			<AddItemArea onAdd={addNewItem} />
			<Listagem
				data={items}
				renderItem={({item}) => <ListaItem data={item} />}
				keyExtractor={(item) => item.id}
			/>
		</Page>
	);
}