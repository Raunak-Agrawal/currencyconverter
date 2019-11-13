import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from './Icon';

const ListItem = ({
  text,
  onPress,
  checkmark = true,
  visible = true,
  selected,
  customIcon = null,
  iconBackground = null,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.listContainer}>
      <Text style={styles.text}>{text}</Text>
      {selected ? (
        <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground} />
      ) : (
        <Icon />
      )}
      {customIcon}
    </View>
  </TouchableHighlight>
);
ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  selected: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};
export default ListItem;
