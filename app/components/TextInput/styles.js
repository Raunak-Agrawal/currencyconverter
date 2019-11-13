import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

const styles = EStyleSheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1,

  container: {
    backgroundColor: '$white',
    flexDirection: 'row',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    width: '90%',
    marginVertical: 11,
    alignItems: 'center',
  },
  containerDisabled: {
    backgroundColor: '$lightGray',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: INPUT_HEIGHT,
    backgroundColor: '$white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  buttonText: {
    paddingHorizontal: 16,
    fontSize: 20,
    fontWeight: '600',
    color: '$primaryBlue',
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$border',
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: '$inputText',
  },
});

export default styles;
