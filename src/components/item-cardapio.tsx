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
      {text:'Excluir', backgroundColor:"#f5f5f5", color:'black', onPress:()=>props.onExcluir(props.cardapio.id)}
  ]

    return (
      <Swipeout right={swipeButtons}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.colorText}>Item: {props.cardapio.nome}</Text>
            <Text style={styles.priceText}>R$ {props.cardapio.preco}</Text>
            <Text style={styles.descriptionText}>Descrição: {props.cardapio.descricao}</Text>
          </View>
        </View>
      </Swipeout>
    );
}

const styles = StyleSheet.create({
   container: {
       flexDirection: 'column',
       justifyContent:'center',
       backgroundColor:'#ffffff',
       padding:10,

   },
   card: {
      backgroundColor: '#0b0304',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 1,
      shadowOffset: {
        width: 3,
        height:3
      }

   },
   colorText: {
     color: '#20b2aa',
     fontSize: 18,
     fontWeight: "normal"
   },
   priceText: {
     color: '#20b2aa',
     fontSize: 20,
     fontWeight: "bold"
   },
   descriptionText: {
    color: '#20b2aa',
    fontSize: 14,
    fontWeight: "normal"
   }
});

{/* <Swipeout right={swipeButtons}>
        <View style={styles.container}>
          <Text style={styles.colorText}>Item: {props.cardapio.nome}</Text>
          <Text style={styles.colorText}>Valor: R$ {props.cardapio.preco}</Text>
          <Text style={styles.colorText}>Descrição: {props.cardapio.descricao}</Text>
        </View>
</Swipeout> */}