import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon, Header } from 'react-native-elements';

export interface AppProps {
    titulo:string;
    navigation?:any,
    menu?:boolean,
    voltar?:boolean;
}

export function Toolbar (props: AppProps) {

    const {navigation} = props;
    let left = null;
    
    if(props.menu)
        left = <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon name="menu" color="white" />
                </TouchableOpacity>

    if(props.voltar)
        left = <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" color="white"/>
                </TouchableOpacity>

    return (<Header leftComponent={left} centerComponent={{text:props.titulo, style:{color:"white"}}} containerStyle={{backgroundColor:"black"}} />);
}
