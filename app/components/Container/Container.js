import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';

const Container = ({ children, primaryColor }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={[styles.container, primaryColor ? { backgroundColor: primaryColor } : null]}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);
Container.propTypes = {
  children: PropTypes.any,
  primaryColor: PropTypes.string,
};
export default Container;
