import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from '../screen/login';
import CriarContaScreen from '../screen/criarConta';
import Drawer from './drawer';

const navigation = createSwitchNavigator({
    login: LoginScreen,
    criar:CriarContaScreen,
    index: Drawer
});

export default createAppContainer(navigation);