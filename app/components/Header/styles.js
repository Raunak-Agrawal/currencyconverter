import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // paddingTop: 20,
    '@media android': {
      paddingTop: StatusBar.currentHeight,
    },
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  icon: {
    width: 18,
  },
});

export default styles;
