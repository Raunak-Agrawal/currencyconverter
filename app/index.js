import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import store from './config/store';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $white: '#FFFFFF',
  $border: '#cfcfcf',
  $inputText: '#797979',
  $lightGray: '#d9d7d7',
  $darkText: '#343434',
  // $outline: 1,
});

export default function App() {
  return (
    <Provider store={store}>
      <AlertProvider>
        <Navigator />
      </AlertProvider>
    </Provider>
  );
}
