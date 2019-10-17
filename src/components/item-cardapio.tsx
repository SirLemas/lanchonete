import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cardapio from '../models/cardapio';
import Swipeout from 'react-native-swipeout';

export interface AppProps {
  cardapio: Cardapio;
  onEditar(cardapio: Cardapio);
  onExcluir(id:string);
}

export function ItemCardapio (props: AppProps) {

  var swipeButtons = [
      {text:'Editar', backgroundColor:'#ff8247', color:'black', onPress:()=>props.onEditar(props.cardapio)},
      {text:'Remover', backgroundColor:"#f5f5f5", color:'black', onPress:()=>props.onExcluir(props.cardapio.id)}
  ]

    return (
      <Swipeout right={swipeButtons}>
        <View style={styles.container}>
          <Text style={styles.colorText}>Item: {props.cardapio.nome}</Text>
          <Text style={styles.colorText}>Valor: R$ {props.cardapio.preco}</Text>
          <Text style={styles.colorText}>Descrição: {props.cardapio.descricao}</Text>
        </View>
      </Swipeout>
    );
}

const styles = StyleSheet.create({
   container: {
       flexDirection: 'column',
       justifyContent:'center',
       backgroundColor:'#ffa940',
       padding:10,
   },
   colorText: {
     color: 'black',
     fontSize: 17,
     fontWeight: "bold"
   }
});