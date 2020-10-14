import React, {useEffect,useState} from 'react';
import Normal from './Normal'
import {LOAD_NORMAL_REQUEST} from "../reducers/normal";
import {useDispatch, useSelector} from "react-redux";

const NormalExecute = () => {
  const dispatch = useDispatch();
  const normalBucket = useSelector((state) => state.normal?.normalBucket)

  useEffect(() => {
    dispatch({
      type:LOAD_NORMAL_REQUEST,
    })
  }, [])

  return (
    <div>
      {normalBucket?.map((el) => {
        return <Normal data={el}/>
      })}
    </div>
  )
}



export default NormalExecute;
