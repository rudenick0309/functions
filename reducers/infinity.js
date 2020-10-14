import produce from "immer";
import shortid from 'shortid';
import faker from 'faker';

// 첫번째, 이니셜 스테이트 정하기
export const initialState = {

  // 1. infinity 데이터 불러오기. Bucket은 success일 때, 데이터를 담는 변수다.
  InfinityBucket:[],
  loadInfinityLoading: false,
  loadInfinityDone: false,
  loadInfinityError: null,
  hasMoreBucket: true,

};

// 인피니티 더미 데이터
export const generateDummyPost = (number) => Array(number).fill().map(() => ({
  id:shortid.generate(),
  name:faker.name.findName(),
  image: faker.image.image(),
}))


// 두번쨰, 액션 상수 작성하기
// 1
export const LOAD_INFINITY_REQUEST = "LOAD_INFINITY_REQUEST";
export const LOAD_INFINITY_SUCCESS = "LOAD_INFINITY_SUCCESS";
export const LOAD_INFINITY_FAILURE = "LOAD_INFINITY_FAILURE";


// 세번쨰, 액션 함수 작성하기
// 1
export const loadInfinityRequest = () => ({
  type: LOAD_INFINITY_REQUEST,
});


// 네번쨰, 리듀서 만들기
const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {

    // 1
    case LOAD_INFINITY_REQUEST:
      // console.log("f reducer infinity, load infinity request,  executes");
      draft.loadInfinityLoading = true;
      draft.loadInfinityDone = false;
      draft.loadInfinityError = null;
      break;
    case LOAD_INFINITY_SUCCESS:
      draft.loadInfinityLoading = false;
      draft.loadInfinityDone = true;
      draft.InfinityBucket = draft.InfinityBucket.concat(action.data);
      draft.hasMoreBucket = draft.InfinityBucket.length < 5000;  // 50개보다 많아지면 false가 된다.
      break;
    case LOAD_INFINITY_FAILURE:
      draft.loadInfinityLoading = false;
      draft.loadInfinityError = action.error;
      break;
    default:
      break;
  }
})


export default reducer;
