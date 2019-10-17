import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Toolbar } from '../components/toolbar';

export interface AppProps {
  navigation:any;
}

export interface AppState {
}

export default class ConfigScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <Toolbar titulo="Configurações Gerais" navigation={this.props.navigation} menu /> 
          <Text style={styles.texto3}>App sendo desevolvido por:</Text>
          <Text style={styles.texto}>Talles Nogueira</Text>
          <Text style={styles.texto2}>Estudante de Sistemas De Informação no Cesmac</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff8c00",
  },
  texto3: {
    fontSize:20,
    textAlign:'center',
    justifyContent: "center",
    marginTop: 300
  },
  texto: {
    fontSize:20,
    fontWeight: "bold",
    textAlign:'center',
    justifyContent: "center",
  },
  texto2: {
    fontSize:20,
    textAlign:'center',
    justifyContent: "center",
   }

});