import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';
import styles from './styles';

const LastConverted = ({
  base, quote, conversionRate, date,
}) => (
  <Text style={styles.smallText}>
    {`1 ${base}= ${conversionRate} ${quote} as of ${moment(date).format('MMMM d, YYYY')}`}
  </Text>
);
LastConverted.propTypes = {
  base: PropTypes.string,
  quote: PropTypes.string,
  date: PropTypes.object,
  conversionRate: PropTypes.number,
};
export default LastConverted;
