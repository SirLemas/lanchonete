import * as React from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView, Alert } from 'react-native';
import Cardapio from '../../models/cardapio';
import { Toolbar } from '../../components/toolbar';
import { ItemCardapio } from '../../components/item-cardapio';
import { Fab } from '../../components/fab';
import { CardapioProviders } from '../../providers/cardapio';

export interface AppProps {
  navigation:any;
  cardapios: Cardapio[];
  onExcluir(id:number);

}

export interface AppState {
  cardapios:Cardapio[];
}

export default class CardapioScreen extends React.Component<AppProps, AppState> {

  private CardapioProvider = new CardapioProviders();

  constructor(props: AppProps) {
    super(props);
    this.state={
      cardapios: this.props.cardapios
    }
}

  componentDidMount(){
    this.props.navigation.addListener('didFocus', () => {
      this.CardapioProvider.listar()
        .then(cardapios => this.setState({cardapios}));
    })
  }

  public excluir(id){
    Alert.alert('Excluir item', 'Deseja mesmo excluir esse item do cardapio?', [
      {text: 'Sim', onPress:() => {
        console.log(id);
        this.CardapioProvider.excluir(id);
        this.CardapioProvider.listar()
                              .then(cardapios => this.setState({cardapios}));
      }},
      {text: 'Não'}
    ]);
  }

  public render() {
    return (
      <View style={styles.background}>
         <Toolbar titulo="Items do Cardápio" navigation={this.props.navigation} menu={true}/>
         <ScrollView>
           <FlatList 
              data={this.state.cardapios}
              extraData={this.state.cardapios}
              keyExtractor={(c) => c.id}
              renderItem={({item}) => (
                    <ItemCardapio cardapio={item} 
                      onEditar={(cardapio) => this.props.navigation.navigate('updateCreate',{cardapio})} 
                      onExcluir={this.excluir.bind(this)}/>
              )}
           />
         </ScrollView>
         <Fab onPress={() => this.props.navigation.navigate('updateCreate')}/>
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