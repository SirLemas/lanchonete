import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import Navigation from './src/navigation/switch';

if (__DEV__) {
  activateKeepAwake();
}
registerRootComponent(Navigation);
