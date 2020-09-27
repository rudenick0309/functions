import React, {useCallback} from "react";
import Head from 'next/head';
import {loadJsonRequest} from "../reducers/infinity";
import {useDispatch, useSelector} from "react-redux";
import wrapper from '../store/configureStore'
import Infinity from "../components/infinity";

const Functions = ({ Component }) => {

  return (
    <>
      <Head>
        <meta charSet={'utf-8'}/>
        <title>Functions</title>
      </Head>

      <Component />

    </>

  )
}

export default wrapper.withRedux(Functions)
