// swap currency
// change base currency
// initial app load
import {
  takeEvery, select, call, put,
} from 'redux-saga/effects';

const getLatestRate = (currency) => fetch(`https://fixer.handlebarlabs.com/latest?base=${currency}`);

function* fetchInitialConversionRate(action) {
  try {
    let currency = action.payload;
    console.log(currency, 'currency');
    if (currency === undefined) {
      currency = yield select((state) => state.currencies.baseCurrency);
    }
    const response = yield call(getLatestRate, currency);
    const result = yield response.json();
    console.log(result, 'result');
    if (result.error) {
      yield put({ type: 'CONVERSION_ERROR', payload: result.error });
    } else {
      yield put({ type: 'CONVERSION_RESULT', payload: result });
    }
  } catch (e) {
    yield put({ type: 'CONVERSION_ERROR', payload: e.message });
  }
}

export default function* rootSaga() {
  yield takeEvery('GET_INITIAL_CONVERSION', fetchInitialConversionRate);
  yield takeEvery('SWAP_CURRENCY', fetchInitialConversionRate);
  yield takeEvery('CHANGE_BASE_CURRENCY', fetchInitialConversionRate);
  // yield takeEvery('CHANGE_QUOTE_CURRENCY', fetchInitialConversionRate);
}
