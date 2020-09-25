import axios from 'axios';
import {all, call, delay, fork, put, takeLatest} from "redux-saga/effects";

import {LOAD_JSON_FAILURE, LOAD_JSON_REQUEST, LOAD_JSON_SUCCESS} from "../reducers/infinity";


function loadJsonAPI() {
  console.log('f saga 4 loadjson api')
  return axios.get('/ahshes')
}

function* loadJson() {
  console.log('f saga 3 loadjson')
  try {
    const result = yield call(loadJsonAPI);
    yield delay(2000);
    console.log('f saga 3 infinity result; ',result);
    yield put({
      type:LOAD_JSON_SUCCESS,
      data:result.data,
    })
  } catch(error) {
    console.error(error);
    yield put({
      type:LOAD_JSON_FAILURE,
      error:error.response.data,
    })
  }
}

function* watchInfinity() {
  console.log('f saga 2 watchinfinity')
  yield takeLatest(LOAD_JSON_REQUEST, loadJson);
}

export default function* infinitySaga() {
  console.log('f saga 1 infinitysaga')
  // yield all[fork(watchInfinity)]
  yield fork(watchInfinity)
}
