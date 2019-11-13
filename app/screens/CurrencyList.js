import React from 'react';
import { View, StatusBar, FlatList } from 'react-native';
import { connect } from 'react-redux';
import currencies from '../data/currencies';
import { ListItem } from '../components/List';
import Separator from '../components/List/Separator';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

const CurrencyList = (props) => {
  const handlePress = (currency) => {
    const { changeBaseCurrency, changeQuoteCurrency } = props;
    const { type } = props.navigation.state.params;
    if (type === 'base') {
      changeBaseCurrency(currency);
    } else {
      changeQuoteCurrency(currency);
    }
    props.navigation.goBack(null);
  };
  const { baseCurrency, quoteCurrency } = props;
  let comparisionCurrency = baseCurrency;
  if (props.navigation.state.params.type === 'quote') {
    comparisionCurrency = quoteCurrency;
  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="default" translucent={false} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => (
          <ListItem
            text={item}
            onPress={() => handlePress(item)}
            selected={item === comparisionCurrency}
            iconBackground={props.primaryColor}
          />
        )}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

const mapStateToProps = ({
  currencies: { baseCurrency, quoteCurrency },
  theme: { primaryColor },
}) => ({
  baseCurrency,
  quoteCurrency,
  primaryColor,
});
const mapDispatchToProps = (dispatch) => ({
  changeBaseCurrency: (currency) => dispatch(changeBaseCurrency(currency)),
  changeQuoteCurrency: (currency) => dispatch(changeQuoteCurrency(currency)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencyList);
