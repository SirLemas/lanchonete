import Axios from 'axios';
import { AsyncStorage } from 'react-native';

export abstract class APIProviders {

    protected api = Axios.create({
        baseURL: '192.168.0.1/api'
    });

    protected async getToken(){
        this.api.defaults.headers.common['Authorization'] = await AsyncStorage.getItem('token');
    }
}