import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button, PricingCard, Card, Icon} from 'react-native-elements';
import { Toolbar } from '../components/toolbar';
import { CardapioProviders } from '../providers/cardapio';
import Cardapio from '../models/cardapio';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {AdMobBanner} from 'expo-ads-admob';

export interface AppProps {
  navigation:any;
  cardapios: Cardapio[];
}

export interface AppState {
  cardapios: Cardapio[];
  valorTotal: '';
}

export default class IndexScreen extends React.Component<AppProps, AppState> {
    private CardapioProvider = new CardapioProviders();

    constructor(props: AppProps) {
      super(props);
      this.state={
        cardapios: this.props.cardapios,
        valorTotal: ''
      }
  }

  componentDidMount(){
    this.props.navigation.addListener('didFocus', () => {
      this.CardapioProvider.listar()
        .then(cardapios => this.setState({cardapios}));
    })
  }

  contar(){
    let total = Object.keys(this.state.cardapios).length;
    let valor = total.toString();
    this.setState({valorTotal:valor});
  }

  public render() {
    return (
        <View style={styles.container}>
            <Toolbar titulo="Inicio" navigation={this.props.navigation} menu/>
            <TouchableOpacity  onPress={() => this.contar()}>
              <PricingCard
                color="#20b2aa"
                title="Items no Cardápio"
                price={`${this.state.valorTotal}`}
                info={['Acompanhe por aqui a quantidade de items disponiveis no cardápio']}
                containerStyle={styles.cardColor}
                infoStyle={{color: "#20b2aa"}}
                pricingStyle={{color: "#20b2aa"}}
                button={{title: 'Atualizar', icon: 'autorenew'}}
              />
            </TouchableOpacity>
            <AdMobBanner
            bannerSize = "mediumRectangle"
            adUnitID = "ca-app-pub-8821499412972235/1650773617"
            testDeviceID="EMULATOR"
            />
        </View>
    );
  }
}

const styles  = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#ffffff",
        // padding: 10,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'stretch'
    },
    cardColor:{
      backgroundColor: "#0b0304",
    },
    textoInit: {
      justifyContent: "center",
      paddingLeft: 15,
      paddingTop: 30,
      marginBottom: 15,
      fontSize: 17,
      textAlign: "center",
      fontWeight: 'bold',
    },
    texto:{
      justifyContent: "center",
      paddingLeft: 15,
      fontSize: 17,
      textAlign: "left"
    }
});