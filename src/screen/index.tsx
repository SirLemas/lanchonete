import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button, PricingCard} from 'react-native-elements';
import { Toolbar } from '../components/toolbar';

export interface AppProps {
  navigation:any;
}

export interface AppState {
}

export default class IndexScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
        <View style={styles.container}>
            <Toolbar titulo="Inicio" navigation={this.props.navigation} menu/>
            <Text style={styles.textoInit}>Bem vindo ao Seu Restaurante Virtual.</Text>
            <Text style={styles.texto}>Para começar a mexer no app, acesse o menu ao lado esquerdo e veja o que você pode fazer para melhor atender seus clientes</Text>

            <PricingCard
              color="black"
              title="Faturamento"
              price="R$ 00,00"
              info={['Acompanhe por aqui suas vendas!']}
              containerStyle={styles.cardColor}
              infoStyle={{color: "black"}}
              button={{title: 'Atualizar', icon: 'autorenew'}}
            />

            <PricingCard
              color="black"
              title="Pedidos no Mês"
              price="0"
              info={['Acompanhe seus pedidos mensalmente!']}
              containerStyle={styles.cardColor}
              infoStyle={{color: "black"}}
              button={{title: 'Atualizar', icon: 'autorenew'}}
            />
        </View>
    );
  }
}

const styles  = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#ff8c00"
        // padding: 10,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'stretch'
    },
    cardColor:{
      backgroundColor: "#ff8c00",
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