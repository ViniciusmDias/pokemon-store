import { all, call, put, takeLatest } from 'redux-saga/effects';

import actionsTypes from '../../constants/Cards';
import actions from '../actions/Cards';

import api from '../../services/api';

function* getCards() {
  try {
    const response = yield call(api.getAll);

    console.log(response.data.results)
    const cards = response.data.results.map((item, index) => {
      return {
        index,
        ...item,
      };
    });

    yield put(actions.getCardsSuccess(cards));
  } catch (err) {
    yield put(actions.getCardsFailure());
  }
}

function* watchRequest() {
  yield takeLatest(actionsTypes.REQUEST_PRODUCTS, getCards);
}

function* cardsSagas() {
  yield all([watchRequest()]);
}

export default cardsSagas;
