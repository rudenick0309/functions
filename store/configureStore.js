import {createWrapper} from 'next-redux-wrapper';
import {applyMiddleware, createStore, compose } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers'
import rootSaga from "../sagas";

//TODO: 로거 미들웨어 안 넣어서 enhancer쪽에서 에러 나면 끄 때 주석 해제 하자

// const loggerMiddleware = ({dispatch, getState}) => (next) => (action) => {
//   if (typeof action === 'function') {  //원래 액션은 객첸데, 썽크에서는 함수라고 둘 수 도 있다. 함수일 떄는 지연함수가 된다.
//     return action(dispatch, getState)
//   }
//   console.log(action);
//   return next(action);
// }

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  // const middlewares = [sagaMiddleware, loggerMiddleware];   // 로거를 넣어도 되고 안넣어도 되고,
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}


const wrapper = createWrapper(configureStore, {debug:process.env.NODE_ENV === 'development'})

export default wrapper;

