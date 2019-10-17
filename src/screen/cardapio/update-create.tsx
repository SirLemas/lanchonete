import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Cardapio from '../../models/cardapio';
import { Toolbar } from '../../components/toolbar';
import cardapio from '../../navigation/cardapio';

export interface AppProps {
    navigation:any;
    // salvar(cardapio:Cardapio);
}

export interface AppState {
    cardapio: Cardapio;
}

export default class UpdateCreateScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
        cardapio: this.props.navigation.getParam('cardapio', new Cardapio('', ''))
    };
  }

  salvar(){
    console.log(this.state.cardapio);
      if(!this.state.cardapio.id){
        let {cardapio} = this.state;
        cardapio.id = Math.floor(Math.random() * 100).toString();
        this.props.navigation.navigate('cardapio', {cardapio});
      }else{
        this.props.navigation.navigate('cardapio', this.state.cardapio);
      }
  }

  public render() {
    const titulo = (this.state.cardapio == null ? 'Cadastrar ' : 'Editar ') + "Cardápio"; 
    return (
    <View style={styles.container}>
        <Toolbar titulo={titulo} navigation={this.props.navigation} voltar />
        <View style={{padding: 5}}>

        <Text style={{marginTop:250}}>Nome</Text>
        <Input placeholder="Digite o nome do item" value={this.state.cardapio.nome} onChangeText={(nome) => this.setState({cardapio: {...this.state.cardapio, nome}})}/>
        <Text>Preço</Text>
        <Input placeholder="Digite o preço do item" value={this.state.cardapio.preco} onChangeText={(preco) => this.setState({cardapio: {...this.state.cardapio, preco}})}/>
        <Text>Descrição</Text>
        <Input placeholder="Digite uma descrição" value={this.state.cardapio.descricao} onChangeText={(descricao) => this.setState({cardapio: {...this.state.cardapio, descricao}})}></Input>
        <Button buttonStyle={{marginTop: 10}} title="Salvar" onPress={this.salvar.bind(this)} />
        </View>
    </View> 
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
    }
  });
