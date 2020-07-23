import { all } from 'redux-saga/effects';
import cardsSagas from './Cards';

function* sagas() {
  yield all([
    cardsSagas()
  ])
}

export default sagas;
