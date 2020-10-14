import React, {useCallback} from "react";
import Head from 'next/head';
import wrapper from '../store/configureStore'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Functions = ({ Component }) => {
  console.log('실행 시작')
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
