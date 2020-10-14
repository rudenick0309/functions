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
  return axios.get('/test')
}

function* loadInfinity() {

  try {
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
  yield takeLatest(LOAD_INFINITY_REQUEST, loadInfinity);
}

export default function* infinitySaga() {
  yield fork(watchInfinity)
}
