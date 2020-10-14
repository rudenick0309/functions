import {delay, put, call, takeLatest, fork} from "redux-saga/effects";
import {LOAD_NORMAL_FAILURE, LOAD_NORMAL_REQUEST, LOAD_NORMAL_SUCCESS} from "../reducers/normal";
import axios from "axios";
import {generateDummyPost} from "../reducers/infinity";



// function loadNormalAPI() {
//   console.log('f saga 4 loadNormalAPI')
//   return axios.get('/normal')
// }

function* loadNormal() {
  try {
    // const result = yield call(loadNormalAPI);
    yield delay(1000);

    yield put({
      type:LOAD_NORMAL_SUCCESS,
      data:generateDummyPost(9000),
    })
  } catch(error) {
    console.error(error);
    yield put({
      type:LOAD_NORMAL_FAILURE,
      error:error.response.data,
    })
  }
}


function* watchNormal() {
  yield takeLatest(LOAD_NORMAL_REQUEST, loadNormal);
}


export default function* normalSaga() {
  yield fork(watchNormal);
}
