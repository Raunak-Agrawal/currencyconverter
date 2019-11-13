import React from 'react';
import {
  View, Text, TouchableHighlight, TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

import color from 'color';
import styles from './styles';

const InputWithButton = (props) => {
  const {
    buttonText, onPress, editable = true, primaryColor,
  } = props;

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  );
  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={[styles.buttonText, primaryColor ? { color: primaryColor } : null]}>
          {buttonText}
        </Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

InputWithButton.propTypes = {
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  editable: PropTypes.bool,
  primaryColor: PropTypes.string,
};

export default InputWithButton;
