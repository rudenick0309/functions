import {HYDRATE} from "next-redux-wrapper";
import {combineReducers} from "redux";
import infinity from './infinity';

const rootReducer = (state, action) => {
  console.log('reducers index')
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default : {
      const combinedReducer = combineReducers({
        infinity,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
