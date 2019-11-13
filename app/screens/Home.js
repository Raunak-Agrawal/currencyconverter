import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { changeAmount, swapCurrency, getInitialConversion } from '../actions/currencies';
import { connectAlert } from '../components/Alert';

class Home extends Component {
  componentWillMount() {
    const { getInitialConversion } = this.props;
    getInitialConversion();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currencyError && nextProps.currencyError !== this.props.currencyError) {
      this.props.alertWithType('error', "Error", nextProps.currencyError);
    }
  }

  handlePriceChange = () => {
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base',
    });
  };

  handleQuoteChange = () => {
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
      type: 'quote',
    });
  };

  handleTextChange = (text) => {
    const { changeAmount } = this.props;

    changeAmount(text);
  };

  handleSwapCurrency = () => {
    const { swapCurrency } = this.props;
    swapCurrency();
  };

  onOptionsPress = () => {
    const { navigation } = this.props;

    navigation.navigate('Options');
  };

  render() {
    const {
      baseCurrency,
      quoteCurrency,
      amount,
      conversionRate,
      lastConvertedDate,
      isFetching,
      primaryColor,
    } = this.props;
    let quotePrice = '';
    if (isFetching) {
      quotePrice = '...';
    } else if (!amount) {
      quotePrice = '0';
    } else {
      quotePrice = (amount * conversionRate).toFixed(2);
    }
    return (
      <Container primaryColor={primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.onOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={primaryColor} />
          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handlePriceChange}
            defaultValue={amount ? amount.toString() : '0'}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
            primaryColor={primaryColor}
          />
          <InputWithButton
            buttonText={quoteCurrency}
            onPress={this.handleQuoteChange}
            editable={false}
            value={quotePrice}
            primaryColor={primaryColor}
          />
          <LastConverted
            base={baseCurrency}
            quote={quoteCurrency}
            date={lastConvertedDate}
            conversionRate={conversionRate}
          />
          <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

Home.propTypes = {
  baseCurrency: PropTypes.string,
  quoteCurrency: PropTypes.string,
  amount: PropTypes.number,
  conversionRate: PropTypes.number,
  lastConvertedDate: PropTypes.object,
  navigation: PropTypes.object,
  isFetching: PropTypes.bool,
  primaryColor: PropTypes.string,
  getInitialConversion: PropTypes.func,
  alertWithType: PropTypes.func,
};
const mapStateToProps = ({
  currencies: {
    baseCurrency, quoteCurrency, amount, conversions, error,
  },
  theme: { primaryColor },
}) => ({
  baseCurrency,
  quoteCurrency,
  amount,
  conversionRate: conversions[baseCurrency] ? conversions[baseCurrency].rates[quoteCurrency] : 0,
  lastConvertedDate: conversions[baseCurrency]
    ? new Date(conversions[baseCurrency].date)
    : new Date(),
  isFetching: conversions[baseCurrency] ? conversions[baseCurrency].isFetching : false,
  primaryColor,
  currencyError: error,
});
const mapDispatchToProps = (dispatch) => ({
  changeAmount: (text) => dispatch(changeAmount(text)),
  swapCurrency: () => dispatch(swapCurrency()),
  getInitialConversion: () => dispatch(getInitialConversion()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(connectAlert(Home));
