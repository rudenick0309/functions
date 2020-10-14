import {HYDRATE} from "next-redux-wrapper";
import {combineReducers} from "redux";

import infinity from './infinity';
import normal from './normal'
import pagination from './pagination'

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default : {
      const combinedReducer = combineReducers({
        infinity,
        normal,
        pagination,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
