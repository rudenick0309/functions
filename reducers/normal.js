import produce from "immer";
import shortid from 'shortid';
import faker from 'faker';

export const initialState = {
  normalBucket : null,
  loadNormalLoading: false,
  loadNormalDone: false,
  loadNormalError: null,
}



export const LOAD_NORMAL_REQUEST = "LOAD_NORMAL_REQUEST"
export const LOAD_NORMAL_SUCCESS = "LOAD_NORMAL_SUCCESS"
export const LOAD_NORMAL_FAILURE = "LOAD_NORMAL_FAILURE"

const reducer = (state=initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD_NORMAL_REQUEST:
      // console.log("f reducer infinity, load infinity request,  executes");
      draft.loadNormalLoading = true;
      draft.loadNormalDone = false;
      draft.loadNormalError = null;
      break;
    case LOAD_NORMAL_SUCCESS:
      // console.log("f reducer infinity, load infinity success, action; ", action);
      draft.loadNormalLoading = false;
      draft.loadNormalDone = true;
      // draft.NormalBucket = draft.NormalBucket.concat(action.data);
      draft.normalBucket = action.data;
      break;
    case LOAD_NORMAL_FAILURE:
      // console.log("f reducer infinity, load infinity failure, action; ", action);
      draft.loadInfinityLoading = false;
      draft.loadInfinityError = action.error;
      break;
    default:
      break;
  }
})

export default reducer;
