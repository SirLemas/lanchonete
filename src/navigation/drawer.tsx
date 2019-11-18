import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';

import IndexScreen from '../screen';
import LoginScreen from '../screen/login';
// import CardapioScreen from '../screen/cardapio/index';
import CardapioNavigation from './cardapio';
import ConfigScreen from '../screen/config';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UsuariosProviders } from '../providers/usuarios';

export default createDrawerNavigator({
    index: {
        screen: IndexScreen,
        navigationOptions: {
            title: 'Inicio',
            drawerIcon: <Icon name="home" />
        }
    },
    cardapio: {
        screen: CardapioNavigation,
        navigationOptions: {
            title: 'Cadastrar Cardápio',
            drawerIcon: <Icon name="add"/>
        }
    },
    configurações: {
        screen: ConfigScreen,
        navigationOptions: {
            title: 'Configurações',
            drawerIcon: <Icon name="settings"/>
        }
    },
    login: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Sair',
            drawerLockMode: "locked-closed",
            drawerIcon: <Icon name="exit-to-app"/>
        }
    },
});
// ,{
//     contentComponent: (props) =>{
//         <View style={{marginTop: 20}}>
//             <DrawerItems {...props} />
//             <TouchableOpacity onPress={() => {
//                 console.log('clicou em sair');
//                 let UsuariosProvider = new UsuariosProviders();
//                 UsuariosProvider.deslogar();
//                 props.navigation.navigate('login');
//             }}>
//                 <View style={{flexDirection:'row', marginLeft:15}}>
//                     <Icon name="exit-to-app"/> 
//                     <Text style={{marginLeft:30}}>Sair</Text>
//                 </View>
//             </TouchableOpacity>
//         </View>
//     }
// });