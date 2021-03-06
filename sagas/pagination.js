import {delay, put, call, takeLatest, fork} from "redux-saga/effects";
import {LOAD_NORMAL_FAILURE, LOAD_NORMAL_REQUEST, LOAD_NORMAL_SUCCESS} from "../reducers/normal";
import axios from "axios";
import {LOAD_PAGINATION_FAILURE, LOAD_PAGINATION_REQUEST, LOAD_PAGINATION_SUCCESS} from "../reducers/pagination";
import {generateDummyPost} from "../reducers/infinity";



// function loadPaginationAPI() {
//   console.log('f saga 4 loadPaginationAPI')
//   return axios.get('/pagination')
// }

function* loadPagination() {
  try {
    // const result = yield call(loadPaginationAPI);
    // yield delay(1000);
    yield put({
      type:LOAD_PAGINATION_SUCCESS,
      // data:result.data,
      data:generateDummyPost(100),
    })
  } catch(error) {
    console.error(error);
    yield put({
      type:LOAD_PAGINATION_FAILURE,
      error:error.response.data,
    })
  }
}


function* watchPagination() {
  yield takeLatest(LOAD_PAGINATION_REQUEST, loadPagination);
}


export default function* paginationSaga() {
  yield fork(watchPagination);
}
