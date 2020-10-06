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

  useEffect(() => {
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
