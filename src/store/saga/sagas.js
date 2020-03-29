import { takeEvery, put } from 'redux-saga/effects';
import { GET_SAGA_LIST } from '../actionTypes';
import { getListAction } from '../actionCreatores';

import axios from 'axios';
import '../../mock/mock';

function* mySaga() {
  yield takeEvery(GET_SAGA_LIST, getList);
}

function* getList() {
  const res = yield axios.get('http://api.test.com/v1/list');
  const action = getListAction(res.data);
  yield put(action);
}

export default mySaga;