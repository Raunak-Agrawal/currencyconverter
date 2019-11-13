export const swapCurrency = () => ({
  type: 'SWAP_CURRENCY',
});

export const changeAmount = (text) => ({
  type: 'HANDLE_TEXT_CHANGE',
  payload: parseFloat(text),
});
export const changeBaseCurrency = (currency) => ({
  type: 'CHANGE_BASE_CURRENCY',
  payload: currency,
});
export const changeQuoteCurrency = (currency) => ({
  type: 'CHANGE_QUOTE_CURRENCY',
  payload: currency,
});

export const getInitialConversion = () => ({
  type: 'GET_INITIAL_CONVERSION',
});
