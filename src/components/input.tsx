import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

export interface AppProps {
    placeholder:string;
    icone:string;
    securityTextEntry?:boolean;
    texto?:string;
    onChangeText?(texto:string);
}

export default (props: AppProps) => (
    <View>
        <Input placeholder={props.placeholder} 
                leftIcon={{name: props.icone, color: 'black'}}
                inputContainerStyle={styles.containerInput} 
                inputStyle={{color: 'black', marginRight: 5}} 
                secureTextEntry={props.securityTextEntry} 
                onChangeText={(texto) => props.onChangeText(texto)}
                autoCapitalize = 'none' />
     </View>
);

const styles = StyleSheet.create({
    containerInput: {
        padding: 5,
        marginBottom: 5,
        borderRadius: 30,
        backgroundColor: 'rgb(255,255,255)',
    }
});   