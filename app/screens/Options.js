import React, { Component } from 'react';
import {
  ScrollView, StatusBar, Platform, Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { ListItem } from '../components/List';
import Separator from '../components/List/Separator';
import { connectAlert } from '../components/Alert';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

let prefix = 'ios';
if (Platform.OS === 'android') {
  prefix = 'md';
}

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };

  handleLinkPressed = () => {
    Linking.openURL('httpsssx://fixer.io').catch((err) => this.props.alertWithType('error', 'Sorry!', "The page you requested can't be reached"));
  };

  handleThemesPressed = () => {
    this.props.navigation.navigate('Themes');
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPressed}
          customIcon={
            <Ionicons name={`${prefix}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handleLinkPressed}
          customIcon={<Ionicons name={`${prefix}-link`} color={ICON_COLOR} size={ICON_SIZE} />}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connectAlert(Options);
