import Axios from 'axios';
import { AsyncStorage } from 'react-native';

export abstract class APIProviders {

    protected api = Axios.create({
        baseURL: 'http://tln-wslanchonete.herokuapp.com/api'
        // baseURL: 'http://192.168.0.13:8000/api'
    });

    protected async getToken(){
        this.api.defaults.headers.common['Authorization'] = await AsyncStorage.getItem('token');
    }
}