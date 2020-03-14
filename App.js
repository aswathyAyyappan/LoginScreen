import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/components/LoginScreen';
import TestReduxScreen from './src/screens/TestReduxScreen';
import TestCombineRed from './src/screens/TestCombineRed';

const navigator = createStackNavigator(
  {
    Login : LoginScreen,
    TestRedux : TestReduxScreen,
    TestCombineRed : TestCombineRed
  },
  {
    // initialRouteName:'Login', // will show this screen when app starts
    // initialRouteName:'TestRedux',
    initialRouteName:'TestCombineRed',
    defaultNavigationOptions: {
      // title: 'header',
      // headerShown: false
    }
  }
);

export default createAppContainer(navigator);