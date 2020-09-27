import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_INFINITY_REQUEST, loadInfinityRequest} from "../reducers/infinity";
import Infinity from "../components/infinity";
import wrapper from '../store/configureStore'



const InfinityExecute = () => {
  const dispatch = useDispatch();
  const infinityBucket = useSelector((state) => state.infinity?.InfinityBucket)
  const hasMoreBucket = useSelector((state) => state.infinity?.hasMoreBucket)
  const loadInfinityLoading = useSelector((state) => state.infinity?.loadInfinityLoading)


  useEffect(() => {
    dispatch({
      type: LOAD_INFINITY_REQUEST,
    })
  },[])

  useEffect(() => {    // useEffcet에서 윈도우 이벤트를 쓸 떄는 항상 return으로 해당 함수를 clear해줘야 한다.
    function onScroll () {
      console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight)
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 2400 ) {
        if (hasMoreBucket && !loadInfinityLoading) {
          dispatch({
            type:LOAD_INFINITY_REQUEST,
          })
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  },[hasMoreBucket, loadInfinityLoading])

  return (
    <>

      {infinityBucket && infinityBucket.map((el) => {
        return <Infinity key={el.id} data={el} />
      })}

    </>

  )
}

export default InfinityExecute;
