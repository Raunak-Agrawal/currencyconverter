import { Dimensions } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;
const styles = EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $smallContainerSize: imageWidth / 2,
  $largeImageSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    // top: 0,
    // left: 0,
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerSize',
    height: '$largeContainerSize',
  },
  logo: {
    width: '$largeImageSize',
    // alignSelf: 'center',
  },
  text: {
    fontWeight: '600',
    letterSpacing: -0.5,
    fontSize: 28,
    marginTop: 15,
    color: '$white',
  },
});

export default styles;
