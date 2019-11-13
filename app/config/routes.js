import { createStackNavigator } from 'react-navigation';
// import { StatusBar } from 'react-native';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    Options: {
      screen: Options,
      navigationOptions: {
        headerTitle: 'Options',
      },
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        headerTitle: 'Themes',
      },
    },
  },
  {
    headerMode: 'screen',
    mode: 'card',
  },
);
const CurrencyListStackNavigator = createStackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});
export default createStackNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
    },
    CurrencyList: {
      screen: CurrencyListStackNavigator,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    // cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);
