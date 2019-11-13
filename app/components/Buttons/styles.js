import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    marginRight: 10,
  },
  text: {
    fontWeight: '300',
    fontSize: 16,
    color: '$white',
    paddingVertical: 15,
  },
});

export default styles;
