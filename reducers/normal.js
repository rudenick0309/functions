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
      draft.loadNormalLoading = true;
      draft.loadNormalDone = false;
      draft.loadNormalError = null;
      break;
    case LOAD_NORMAL_SUCCESS:
      draft.loadNormalLoading = false;
      draft.loadNormalDone = true;
      draft.normalBucket = action.data;
      break;
    case LOAD_NORMAL_FAILURE:
      draft.loadInfinityLoading = false;
      draft.loadInfinityError = action.error;
      break;
    default:
      break;
  }
})

export default reducer;
