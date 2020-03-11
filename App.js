import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/components/LoginScreen'

const navigator = createStackNavigator(
  {
    Login : LoginScreen
  },
  {
    initialRouteName:'Login', // will show this screen when app starts
    defaultNavigationOptions: {
      // title: 'header',
      headerShown: false
    }
  }
);

export default createAppContainer(navigator);