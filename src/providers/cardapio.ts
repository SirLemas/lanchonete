import {APIProviders} from './api';
import Cardapio from './../models/cardapio'
import {AsyncStorage} from 'react-native';

export class CardapioProviders extends APIProviders{

    /**
     * Lista todos os cardápios relacionados a o usuário logado
     */
    async listar(): Promise<Cardapio[]> {
        await this.getToken();
        let res = await this.api.get('/cardapio');
        return res.data;
    }

    /**
     * Busca um item especifico do cardápio
     * @param id 
     */
    async buscar(id:number): Promise<Cardapio>{
        await this.getToken();
        let res = await this.api.get('/cardapio'+id);
        return res.data;
    }
    
    /**
     * Cadastra um cardápio
     * @param cardapio 
     */
    async cadastrar(cardapio: Cardapio){
        console.log(cardapio);
        await this.getToken();
        this.api.post('/cardapio', {cardapio:}).catch(error => {
            console.log(error.response.data);
        })
    }

    /**
     * Atualiza/Edita um cardápio existente
     * @param cardapio 
     */
    async atualizar(cardapio: Cardapio){
        await this.getToken();
        this.api.put('/cardapio/'+cardapio.id, {cardapio})
    }

    /**
     * Deleta um cardápio
     * @param id 
     */
    async excluir(id:number){
        await this.getToken();
        this.api.delete('/cardapio/'+id)
    }
}