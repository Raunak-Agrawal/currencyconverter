import React, { Component } from 'react';
import {
  Text, Animated, Keyboard, Platform, View, Image,
} from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 250;
class Logo extends Component {
  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }

  componentDidMount() {
    let showListener = 'keyboardDidShow';
    let hideListener = 'keyboardDidHide';
    if (Platform.OS === 'ios') {
      showListener = 'keyboardWillShow';
      hideListener = 'keyboardWillHide';
    }
    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    this.topInnerImageAspect = this.containerImageWidth.interpolate({
      inputRange: [Number(styles.$smallContainerSize), Number(styles.$largeContainerSize)],
      outputRange: [25, 50],
    });
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ];
    const imageStyle = [
      styles.logo,
      { width: this.imageWidth, height: this.imageWidth },
      this.props.tintColor ? { tintColor: this.props.tintColor } : null,
    ];

    return (
      <View style={styles.container}>
        <View
          style={{
            position: 'relative',
            top: 0,
            left: 0,
          }}
        >
          <Animated.Image
            source={require('./images/background.png')}
            resizeMode="contain"
            style={containerImageStyle}
          />
        </View>
        <Animated.View
          style={{
            position: 'absolute',
            top: this.topInnerImageAspect,
          }}
        >
          <Animated.Image
            source={require('./images/logo.png')}
            style={imageStyle}
            resizeMode="contain"
          />
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}
export default Logo;
