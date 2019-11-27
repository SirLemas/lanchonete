import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Cardapio from '../../models/cardapio';
import { Toolbar } from '../../components/toolbar';
import cardapio from '../../navigation/cardapio';
import { CardapioProviders } from '../../providers/cardapio';

export interface AppProps {
    navigation:any;
}

export interface AppState {
    cardapio: Cardapio;
}

export default class UpdateCreateScreen extends React.Component<AppProps, AppState> {

  private cardapioProvider = new CardapioProviders();

  constructor(props: AppProps) {
    super(props);
    this.state = {
      // cardapio: new Cardapio('', 0, '')
        cardapio: this.props.navigation.getParam('cardapio', new Cardapio('', 0, ''))
    };
  }

  salvar(){

    let {cardapio} = this.state;
    
    if(!this.state.cardapio.id){
      this.cardapioProvider.cadastrar(cardapio);
    }else{
      this.cardapioProvider.atualizar(cardapio);
    }
    this.props.navigation.navigate('cardapio');
  }
  public render() {
    const titulo = (this.state.cardapio == null ? 'Cadastrar ' : 'Editar ') + "Cardápio"; 
    return (
    <ImageBackground source={require('./../../../assets/imgs/login.jpg')} style={styles.bg_img}>
      <Toolbar titulo={titulo} navigation={this.props.navigation} voltar />
      <View style={styles.container}>
          <Text style={styles.textoCadastro}>Dados do Item</Text>
            <Input placeholder="Digite o nome do item" value={this.state.cardapio.nome} onChangeText={(nome) => this.setState({cardapio: {...this.state.cardapio, nome}})}/>
            <Input placeholder="Digite o preço do item" keyboardType='numeric' value={`${this.state.cardapio.preco}`} onChangeText={(preco) => this.setState({cardapio: {...this.state.cardapio, preco}})}/>
            <Input placeholder="Digite uma descrição" value={this.state.cardapio.descricao} onChangeText={(descricao) => this.setState({cardapio: {...this.state.cardapio, descricao}})}></Input>
            <Button buttonStyle={{borderRadius:30, marginTop: 25}} title="Salvar" onPress={this.salvar.bind(this)} />
      </View>
      </ImageBackground> 
    );
  }
}

const styles = StyleSheet.create({
  bg_img: {
    width: '100%',
    height: '100%'
  },
  textoCadastro: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center'
  },
    container: {
      flex:1,
      paddingBottom: 80,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch'
    }
  });
