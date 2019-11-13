import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ClearButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.wrapper}>
      <Image source={require('./images/icon.png')} style={styles.icon} resizeMode="contain" />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);
ClearButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};
export default ClearButton;
