import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { ListItem } from '../components/List';
import Separator from '../components/List/Separator';
import { changeTheme } from '../actions/themes';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
});

class Themes extends Component {
  handleThemePressed = (theme) => {
    const { changeTheme } = this.props;
    changeTheme(theme);
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Blue"
          onPress={() => this.handleThemePressed(styles.$blue)}
          selected
          checkmark={false}
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handleThemePressed(styles.$orange)}
          selected
          checkmark={false}
          iconBackground={styles.$orange}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handleThemePressed(styles.$green)}
          selected
          checkmark={false}
          iconBackground={styles.$green}
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={() => this.handleThemePressed(styles.$purple)}
          selected
          checkmark={false}
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  changeTheme: (theme) => dispatch(changeTheme(theme)),
});
export default connect(
  null,
  mapDispatchToProps,
)(Themes);
