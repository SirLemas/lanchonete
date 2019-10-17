import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import { Button} from 'react-native-elements';
import Input from '../components/input';

export interface AppProps {
  navigation:any;
}

export interface AppState {
  login:string,
  senha:string
}

export default class LoginScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      login: '',
      senha: '',
    };
  }

public logar() {
    if(this.state.login == 'admin' && this.state.senha == 'admin'){
      this.props.navigation.navigate('index');
    }else {
      ToastAndroid.show('Email/Senha Incorreta', 3500);
    }
}

  public render() {
    return (
      <View style={styles.container}>
         <Text style={styles.textoInicial}>Bem vindo!</Text>
         <Input placeholder="  Digite seu login" icone="mood" onChangeText={(login) => this.setState({login})}/>
         <Input placeholder="  Digite sua senha" icone="lock" securityTextEntry onChangeText={(senha) => this.setState({senha})} />
         <Button title="Logar" onPress={() => this.logar()} buttonStyle={{borderRadius:30, marginTop: 20}} />
         <TouchableOpacity onPress={() => this.props.navigation.navigate('criar')}>
            <Text style={styles.cadastro}>Não Possui Conta? Clique aqui e Cadastre-se!</Text>
         </TouchableOpacity>
      </View>
    );
  }
}


const styles  = StyleSheet.create({
    container: {
        flex:1,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: "#ff8c00"
    },
    cadastro: {
        color: 'black',
        fontSize: 20,
        textDecorationLine: 'underline',
        margin: 30,
        textAlign: 'center'
      },
    textoInicial: {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
      margin: 20,
      textAlign: 'center'
    }
});