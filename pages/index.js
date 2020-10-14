import React, {useCallback, useEffect, useState} from "react";
import wrapper from "../store/configureStore";
import NormalExecute from "../components/NormalExecute";
import InfinityExecute from "../components/infinityExecute";
import VirtualizedExecute from "../components/VirtualizedExecute";
import PaginationExecute from "../components/PaginationExecute";
import Link  from 'next/link';
import CssMode from "../components/CssMode";
import ImageCarousel from "../components/ImageCarousel";

const Home = () => {
  const [home, setHome] = useState(true);
  const [normal, setNormal] = useState(false);
  const [infinity, setInfinity] = useState(false);
  const [virtualized, setVirtualized] = useState(false);
  const [pagination, setPagination] = useState(false);
  const [cssMode, setCssMode] = useState(false);
  const [imageCarousel, setImageCarousel] = useState(false);

  const onClickHome = useCallback(() => {
    setHome(true)
    setNormal(false);
    setInfinity(false);
    setVirtualized(false);
    setPagination(false);
    setCssMode(false);
    setImageCarousel(false);
  }, []);

  const onClickNormal = useCallback(() => {
    setHome(false)
    setNormal(true);
    setInfinity(false);
    setVirtualized(false);
    setPagination(false);
    setCssMode(false);
    setImageCarousel(false);
  }, []);

  const onClickInfinity = useCallback(() => {

    setHome(false)
    setNormal(false);
    setInfinity(true);
    setVirtualized(false);
    setPagination(false);
    setCssMode(false);
    setImageCarousel(false);

  }, []);

  const onClickVirtualized = useCallback(() => {
    setHome(false)
    setNormal(false);
    setInfinity(false);
    setVirtualized(true);
    setPagination(false);
    setCssMode(false);
    setImageCarousel(false);

  }, []);

  const onClickPagination = useCallback(() => {
    setHome(false)
    setNormal(false);
    setInfinity(false);
    setVirtualized(false);
    setPagination(true);
    setCssMode(false);
    setImageCarousel(false);
  }, []);

  const onClickCssMode = useCallback(() => {
    setHome(false)
    setNormal(false);
    setInfinity(false);
    setVirtualized(false);
    setPagination(false);
    setCssMode(true);
    setImageCarousel(false);
  }, []);

  const onClickImageCarousel = useCallback(() => {
    setHome(false)
    setNormal(false);
    setInfinity(false);
    setVirtualized(false);
    setPagination(false);
    setCssMode(false);
    setImageCarousel(true);
  }, []);

  return (
    <div id={'header'}>
      <div  style={styles.wrapper}>
        <span style={styles.content} onClick={onClickHome}>Home</span>
        <span style={styles.content} onClick={onClickNormal}>Normal scrolling</span>
        <span style={styles.content} onClick={onClickInfinity}>Infinity Scrolling</span>
        <span style={styles.content} onClick={onClickVirtualized}>React virtualized</span>
        <span style={styles.content} onClick={onClickPagination}>Pagination</span>
        <span style={styles.content} onClick={onClickCssMode}>Change css mode</span>
        <span style={styles.content} onClick={onClickImageCarousel}>Carousel</span>
      </div>

      <p style={styles.line} />

        <a style={styles.a} href={'#header'}>맨 위로</a>


      {home
      ? (<div style={styles.home}>
          devsner의 기능 연습장입니다.
          <br />
          [2020.10.13] 현재 구현 기능은, 아래와 같고, 소스 코드가 필요하신 분들은 깃헙을 참고해 주세요 ( components 폴더 -> 기능별 파일로 분류)
          <br />
          <Link href={"https://bit.ly/2GJepzS"} passhref={true} >
            <a target="_blank">깃헙 바로가기</a>
          </Link>
          <br />
          <br />
          <br />
          1. Normal scrolling -> 데이터가 9,000개입니다. ** 컴퓨터 사양에 따라 로딩 시간이 다소 걸릴 수 있습니다 **
          <br />
          <br />
          2. Infinity scrolling -> 데이터의 상한을 5,000개로 해 두었습니다. 해당 스크롤 높이를 기준으로, 3분의 2 정도 지점에서 새로운 데이터를 받아옵니다
          <br />
          <br />
          3. React virtualized -> 데이터가 10,000개입니다
          <br />
          <br />
          4. Pagination -> 100개의 데이터를 페이지화 했습니다.
          <br />
          <br />
          5. change css mode
          <br />
          <br />
          6. image carousel
          <br />
        </div>)
      : (<></>)
      }


      {normal
        ? (<NormalExecute/>)
        : (<></>)
      }

      {infinity
        ? (<InfinityExecute/>)
        : (<></>)
      }

      {virtualized
        ? (<VirtualizedExecute/>)
        : (<></>)
      }

      {pagination
        ? (<PaginationExecute/>)
        : (<></>)
      }

      {cssMode
        ? (<CssMode/>)
        : (<></>)
      }

      {imageCarousel
        ? (<ImageCarousel/>)
        : (<></>)
      }

    </div>

  );
};

const styles = {
  home:{
    marginTop:'10%',
    marginLeft:'20%',
    height:'100%',
  },

  a:{
    position: "fixed",
    bottom:'30px',
    right:'30px',
  },


  wrapper: {
    marginTop:'20px',
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
  },

  content:{
    border:'2px solid grey',
    borderRadius:'10px',
    padding:'5px',
  },

  line:{
    borderBottom:'1px solid grey',
    marginBottom:'10px',
    borderRadius: '20%',
  }
};

export default wrapper.withRedux(Home);
