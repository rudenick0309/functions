import {delay, put, call, takeLatest, fork} from "redux-saga/effects";
import {LOAD_NORMAL_FAILURE, LOAD_NORMAL_REQUEST, LOAD_NORMAL_SUCCESS} from "../reducers/normal";
import axios from "axios";
import {generateDummyPost} from "../reducers/infinity";



// function loadNormalAPI() {
//   console.log('f saga 4 loadNormalAPI')
//   return axios.get('/normal')
// }

function* loadNormal() {
  console.log('f saga 3 loadNormal')
  try {
    // const result = yield call(loadNormalAPI);
    yield delay(1000);
    // console.log('f saga 3 loadNormal result,; ', result);
    yield put({
      type:LOAD_NORMAL_SUCCESS,
      // data:result.data,
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
  console.log('f saga 2 watchnormal')
  yield takeLatest(LOAD_NORMAL_REQUEST, loadNormal);
}


export default function* normalSaga() {
  console.log('f saga 1 normalsaga')

  yield fork(watchNormal);
}
