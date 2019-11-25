import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ToastAndroid, ImageBackground } from 'react-native';
import { Button} from 'react-native-elements';
import Input from '../components/input';
import { UsuariosProviders } from '../providers/usuarios';

export interface AppProps {
  navigation:any;
}

export interface AppState {
  login:string,
  senha:string
}

export default class LoginScreen extends React.Component<AppProps, AppState> {

  private usuario = new UsuariosProviders();

  constructor(props: AppProps) {
    super(props);
    this.state = {
      login: '',
      senha: '',
    };
  }

public async logar() {
    
    let resp = await this.usuario.logar(this.state.login, this.state.senha);
    
    if(resp){
      this.props.navigation.navigate('index');
    }else{
      ToastAndroid.show('Login/Senha incorreta', 3500);
    }
}

  public render() {
    return (
      <ImageBackground source={require('./../../assets/imgs/login.jpg')} style={styles.bg_img}>
        <View style={styles.container}>
          <Text style={styles.textoInicial}>Bem Vindo!</Text>
          <Input placeholder="  Digite seu login" icone="mood" onChangeText={(login) => this.setState({login})}/>
          <Input placeholder="  Digite sua senha" icone="lock" securityTextEntry onChangeText={(senha) => this.setState({senha})} />
          <Button title="Logar" onPress={() => this.logar()} buttonStyle={{borderRadius:30, marginTop: 20}} />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('criar')}>
              <Text style={styles.cadastro}>Não Possui Conta? Clique aqui e Cadastre-se!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}


const styles  = StyleSheet.create({
    bg_img: {
      width: '100%',
      height: '100%'
    },
    container: {
        flex:1,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
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