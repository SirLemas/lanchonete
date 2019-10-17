import { createStackNavigator } from 'react-navigation-stack';
// import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import CardapioScreen from '../screen/cardapio/index'
import UpdateCreateScreen from '../screen/cardapio/update-create'

export default createStackNavigator({
    cardapio: {
        screen: CardapioScreen,
        navigationOptions: {
            header: null
        }
    },
    updateCreate:{
        screen: UpdateCreateScreen,
        navigationOptions: {
            header: null
        }
    } 

});

// const cardapiodrawer = createSwitchNavigator({
//     index: CardapioScreen,
//     new: UpdateCreateScreen
// });
// export default createAppContainer(cardapiodrawer);