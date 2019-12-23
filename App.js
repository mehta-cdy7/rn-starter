import HomeScreen from './src/screens/HomeScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CounterScreen from './src/screens/CounterScreen';

import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';

import TextScreen from "./src/screens/TextScreen";

import CounterScreenWReducers from "./src/screens/CounterScreenWithReducer";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Counter: CounterScreen,
    MyColor: ColorScreen,
    SQuare: SquareScreen,
    MyText: TextScreen,
    CounterReducerDemo : CounterScreenWReducers,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
