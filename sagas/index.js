import axios from 'axios'
import {all, fork } from "redux-saga/effects";

import infinitySaga from "./infinity";

axios.defaults.baseURL = 'http://localhost:4000';

export default function* rootSaga() {
  console.log('saga index')
  yield fork(infinitySaga)
}
