import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface AppProps {
    top?:boolean;
    left?:boolean;
    icon?: string;
    onPress():void;
}

/**
 * Icone flutuante 
 * @param props 
 */
export function Fab (props: AppProps) {

    let extras = [];
    extras.push(props.top ? styles.top : styles.bottom);
    extras.push(props.left ? styles.left : styles.right);

    return (
      <View style={[styles.default, ...extras]}>
          <TouchableOpacity onPress={props.onPress}>
            <Icon raised reverse name={props.icon} color='black' />
         </TouchableOpacity>
      </View>
    );
}

Fab.defaultProps = { icon: 'add' }

const styles = StyleSheet.create({
    default: { position: 'absolute' },
    bottom: { bottom: 10 },
    top: { top: 10},
    left: { left: 10},
    right: { right: 10}
});