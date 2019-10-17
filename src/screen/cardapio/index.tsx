import * as React from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView } from 'react-native';
import Cardapio from '../../models/cardapio';
import { Toolbar } from '../../components/toolbar';
import { ItemCardapio } from '../../components/item-cardapio';
import { Fab } from '../../components/fab';

export interface AppProps {
  navigation:any;
}

export interface AppState {
  cardapios:Cardapio[];
}

var itemsCardapio = [
  new Cardapio('Passaporte de Carne', '8.5', '', '1'),
  new Cardapio('Passaporte de Frango', '9.0', '', '2'),
  new Cardapio('Passaporte de Carne de Sol','10.0', '', '3')
];

export default class CardapioScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state={
      cardapios: itemsCardapio
    }
}

updateData = itemCardapioAtualizado => {
  console.log("Dado retornado para CardapioScreen: "+ itemCardapioAtualizado);

  this.setState({ cardapios: [{...this.state.cardapios, itemCardapioAtualizado}]});
}

  public render() {
    return (
      <View style={styles.background}>
         <Toolbar titulo="Lista de Produtos" navigation={this.props.navigation} menu={true}/>
         <ScrollView>
           <FlatList 
              data={this.state.cardapios}
              extraData={this.state.cardapios}
              keyExtractor={(c) => c.id}
              renderItem={({item}) => (
                    <ItemCardapio cardapio={item} 
                      // onEditar={(cardapio) => this.props.navigation.navigate('updateCreate',{cardapio})}
                      onEditar={(cardapio) => this.props.navigation.navigate('updateCreate',{cardapio, updateData: this.updateData })} 
                      onExcluir={(id)=>console.log(id)} />
              )}
           />
         </ScrollView>
         <Fab onPress={() => this.props.navigation.navigate('updateCreate', {cardapio: new Cardapio('', '', ''), updateData: this.updateData})}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#ff8c00",
    flex: 1
  }
});