import produce from "immer";


// 첫번째, 이니셜 스테이트 정하기
const initialState = {

  // 1. json에서 데이터 불러오기  . Bucket은 success일 때, 데이터를 담는 변수다.
  loadJsonBucket: null,
  loadJsonLoading: false,
  loadJsonDone: false,
  loadJsonError: null,

};

// 두번쨰, 액션 상수 작성하기
// 1
export const LOAD_JSON_REQUEST = "LOAD_JSON_REQUEST";
export const LOAD_JSON_SUCCESS = "LOAD_JSON_SUCCESS";
export const LOAD_JSON_FAILURE = "LOAD_JSON_FAILURE";

console.log('f reducer, infinity loadjsonrequest')
// 세번쨰, 액션 함수 작성하기
// 1
export const loadJsonRequest = () => ({

  type: LOAD_JSON_REQUEST,
});


// 네번쨰, 리듀서 만들기
const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {

    // 1
    case LOAD_JSON_REQUEST:
      console.log("f reducer infinity, load json request,  executes");
      draft.loadJsonLoading = true;
      draft.loadJsonDone = false;
      draft.loadJsonError = null;
      break;
    case LOAD_JSON_SUCCESS:
      console.log("f infinity, load json success, action; ", action);
      draft.loadJsonLoading = false;
      draft.loadJsonDone = true;
      draft.loadJsonBucket = action.data;
      break;
    case LOAD_JSON_FAILURE:
      console.log("f infinity, load json failure, action; ", action);
      draft.loadJsonLoading = false;
      draft.loadJsonError = action.error;
      break;
    default:
      break;
  }
})


export default reducer;
