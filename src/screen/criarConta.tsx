import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid, ImageBackground } from 'react-native';
import Input from '../components/input';

import {Button} from 'react-native-elements';
import { UsuariosProviders } from '../providers/usuarios';

export interface AppProps {
  navigation:any
}

export interface AppState {
  nome?:string;
  email:string;
  login:string;
  senha:string;
  usuario: {nome?:string,email:string, login:string, senha:string}
}

export default class CriarContaScreen extends React.Component<AppProps, AppState> {

  private usuario = new UsuariosProviders();

  constructor(props: AppProps) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      login: '',
      senha: '',
      usuario: {
        nome: '',
        email: '',
        login: '',
        senha: ''
      }
    };
    this.cadastrar = this.cadastrar.bind(this);
  }

public async cadastrar(){
  let resp = this.usuario.cadastrar(this.state.usuario);

  if(resp){
    ToastAndroid.show('Cadastrado com sucesso', 3000);
    this.props.navigation.navigate('login');
  }else{
    ToastAndroid.show('Não foi possível cadastrar o usuário', 3000);
  }
}

  public render() {
    return (
      <ImageBackground source={require('./../../assets/imgs/login.jpg')} style={styles.bg_img}>
          <View style={styles.container}>
            <Text style={styles.texto}>Crie sua conta</Text>

              <Input placeholder="  Digite seu nome" icone="person" onChangeText={(nome) => this.setState({usuario: {...this.state.usuario, nome}})} />
              <Input placeholder="  Digite seu email" icone="email" onChangeText={(email) => this.setState({usuario: {...this.state.usuario, email}})}/>
              <Input placeholder="  Digite seu login" icone="mood" onChangeText={(login) => this.setState({usuario: {...this.state.usuario, login}})}/>
              <Input placeholder="  Digite sua senha" securityTextEntry={true} icone="lock" onChangeText={(senha) => this.setState({usuario: {...this.state.usuario, senha}})}/>

              <Button title="Criar Conta" buttonStyle={{borderRadius: 30, marginTop: 20}} onPress={this.cadastrar}/>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
                  <Text style={styles.login}>Já possuo uma conta</Text>
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
    texto: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        // paddingBottom: 20,
        marginTop:30,
        marginEnd:30
      },
      login: {
        color: 'black',
        fontSize: 20,
        textDecorationLine: 'underline',
        margin: 25,
        textAlign: 'center'
      }
});