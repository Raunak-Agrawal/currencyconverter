import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const styles = EStyleSheet.create({
  $underlayColor: '$border',
  listContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '$white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: '$darkText',
  },
  border: {
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
    flex: 1,
    backgroundColor: '$border',
  },
  iconContainer: {
    backgroundColor: '$white',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    width: 15,
  },
  iconVisible: {
    backgroundColor: '$primaryBlue',
  },
});

export default styles;
