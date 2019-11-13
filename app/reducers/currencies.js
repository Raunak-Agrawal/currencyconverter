const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {},
  error: null,
};

const setConversions = (state, action) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {},
    base: action.payload,
  };
  if (state.conversions[action.payload]) {
    conversion = state.conversions[action.payload];
  }
  return {
    ...state.conversions,
    [action.payload]: conversion,
  };
};
const currencies = (state = initialState, action) => {
  switch (action.type) {
    case 'SWAP_CURRENCY':
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };
    case 'HANDLE_TEXT_CHANGE':
      return {
        ...state,
        amount: action.payload,
      };
    case 'CHANGE_BASE_CURRENCY':
      return {
        ...state,
        baseCurrency: action.payload,
        conversions: setConversions(state, action),
      };
    case 'CHANGE_QUOTE_CURRENCY':
      return {
        ...state,
        quoteCurrency: action.payload,
        conversions: setConversions(state, action),
      };
    case 'GET_INITIAL_CONVERSION':
      return {
        ...state,
        conversions: setConversions(state, { payload: state.baseCurrency }),
      };
    case 'CONVERSION_RESULT':
      return {
        ...state,
        baseCurrency: action.payload.base,
        conversions: {
          ...state.conversions,
          [action.payload.base]: {
            isFetching: false,
            ...action.payload,
          },
        },
      };
    case 'CONVERSION_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default currencies;
