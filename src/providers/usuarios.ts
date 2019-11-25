import {APIProviders} from  './api';
import {AsyncStorage} from 'react-native';

export class UsuariosProviders extends APIProviders {

    /**
     * Cadastra um usuário novo passando os seguintes valores:
     * @param dados {nome:string, email:string, login:string, senha:string}
     */
    public async cadastrar(dados): Promise<boolean> {
        return this.api.post('/usuarios', {"usuario":dados}).then(res => {
            return true;
        }).catch(erro => {
            return false;
        });
    }

    /**
     * Loga o usuário ao webservice
     * @param login 
     * @param senha 
     */
    public async logar(login, senha): Promise<boolean> {
        return this.api.post('/login', {login, senha}).then(res => {
            AsyncStorage.setItem('token', res.data.jwt);
            return true;
        }).catch(erro => {
            return false;
        });
    }

    /**
     * Ao deslogar do app, apaga o token gerado
     */
    public async deslogar(){
        AsyncStorage.removeItem('token');
    }
}