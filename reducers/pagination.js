import produce from "immer";
import shortid from 'shortid';
import faker from 'faker';

export const initialState = {
  paginationData : null,
  loadPaginationLoading: false,
  loadPaginationDone: false,
  loadPaginationError: null,
}



export const LOAD_PAGINATION_REQUEST = "LOAD_PAGINATION_REQUEST"
export const LOAD_PAGINATION_SUCCESS = "LOAD_PAGINATION_SUCCESS"
export const LOAD_PAGINATION_FAILURE = "LOAD_PAGINATION_FAILURE"

const reducer = (state=initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD_PAGINATION_REQUEST:
      // console.log("f reducer infinity, LOAD_PAGINATION_REQUEST,  executes");
      draft.loadPaginationLoading = true;
      draft.loadPaginationDone = false;
      draft.loadPaginationError = null;
      break;
    case LOAD_PAGINATION_SUCCESS:
      // console.log("f reducer infinity, LOAD_PAGINATION_SUCCESS, action; ", action);
      draft.loadPaginationLoading = false;
      draft.loadPaginationDone = true;
      // draft.NormalBucket = draft.NormalBucket.concat(action.data);
      draft.paginationData = action.data;
      break;
    case LOAD_PAGINATION_FAILURE:
      // console.log("f reducer infinity, LOAD_PAGINATION_FAILURE, action; ", action);
      draft.loadPaginationLoading = false;
      draft.loadPaginationError = action.error;
      break;
    default:
      break;
  }
})

export default reducer;
