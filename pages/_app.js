import React, {useCallback} from "react";
import Head from 'next/head';
import {loadJsonRequest} from "../reducers/infinity";
import {useDispatch, useSelector} from "react-redux";
import wrapper from '../store/configureStore'

const Functions = ({ Component }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.loadJsonBucket)
  console.log('f -app, data;',data);

  const onClickInfinity = useCallback(() => {
    console.log('인피니티 작동함')
    dispatch(loadJsonRequest())
  }, [])

  const onClickVirtualized = useCallback(() => {
    console.log('버츄얼라이즈드 작동함')
  }, [])

  return (
    <>
      <Head>
        <meta charSet={'utf-8'}/>
        <title>Functions</title>
      </Head>

      <div>
        <span onClick={onClickInfinity}>버튼1</span>
        <span onClick={onClickVirtualized}>버튼2</span>
      </div>

      <Component />

    </>

  )
}

export default wrapper.withRedux(Functions)
