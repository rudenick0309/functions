import axios from 'axios';
import {all, call, delay, fork, put, takeLatest, throttle} from "redux-saga/effects";

import {
  generateDummyPost,
  LOAD_INFINITY_FAILURE,
  LOAD_INFINITY_REQUEST,
  LOAD_INFINITY_SUCCESS,
} from "../reducers/infinity";
import {LOAD_NORMAL_REQUEST} from "../reducers/normal";



function loadInfinityAPI() {
  // console.log('f saga 4 loadinfinity api')
  return axios.get('/test')
}

function* loadInfinity() {
  // console.log('f saga 3 loadinfinity')
  try {
    // const result = yield call(loadInfinityAPI);
    yield delay(1000);

    yield put({
      type:LOAD_INFINITY_SUCCESS,
      // data:result.data,
      data:generateDummyPost(10),
    })
  } catch(error) {
    console.error(error);
    yield put({
      type:LOAD_INFINITY_FAILURE,
      error:error.response.data,
    })
  }
}


function* watchInfinity() {
  // console.log('f saga 2 watchinfinity')
  yield takeLatest(LOAD_INFINITY_REQUEST, loadInfinity);
  // yield throttle(10000, LOAD_INFINITY_REQUEST, loadInfinity);  // 요청을 한 번만 보낼 수 있는 방법을 프론트에서 생각해야 한다.
}

export default function* infinitySaga() {
  // console.log('f saga 1 infinitysaga')
  yield fork(watchInfinity)   // 하나일 때 all 하면 안 되더라 실행 자체가 안 됐음
  // yield fork(watchInfinity)
}
