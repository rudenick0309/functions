import React, {useCallback, useEffect, useState} from "react";
import wrapper from "../store/configureStore";
import NormalExecute from "../components/NormalExecute";
import InfinityExecute from "../components/infinityExecute";
import VirtualizedExecute from "../components/VirtualizedExecute";
import PaginationExecute from "../components/PaginationExecute";
// import GitHubCalendar from 'react-github-calendar';

const Home = () => {
  console.log("홈");
  const [home, setHome] = useState(true);
  const [normal, setNormal] = useState(false);
  const [infinity, setInfinity] = useState(false);
  const [virtualized, setVirtualized] = useState(false);
  const [pagination, setPagination] = useState(false);

  const onClickHome = useCallback(() => {
    setHome(true)
    setNormal(false);
    setInfinity(false);
    setVirtualized(false);
    setPagination(false);
  }, []);

  const onClickNormal = useCallback(() => {
    setHome(false)
    setNormal(true);
    setInfinity(false);
    setVirtualized(false);
    setPagination(false);
  }, []);

  const onClickInfinity = useCallback(() => {
    // console.log("인피니티 작동함");

    setHome(false)// dispatch(loadInfinityRequest())
    setNormal(false);
    setInfinity(true);
    setVirtualized(false);
    setPagination(false);
  }, []);

  const onClickVirtualized = useCallback(() => {
    // console.log("버츄얼라이즈드 작동함");
    setHome(false)
    setNormal(false);
    setInfinity(false);
    setVirtualized(true);
    setPagination(false);
  }, []);

  const onClickPagination = useCallback(() => {
    // console.log("페이지네이션 작동함");
    setHome(false)
    setNormal(false);
    setInfinity(false);
    setVirtualized(false);
    setPagination(true);
  }, []);


  return (
    <div id={'header'}>
      <div  style={styles.wrapper}>
        <span style={styles.content} onClick={onClickHome}>Home</span>
        <span style={styles.content} onClick={onClickNormal}>Normal scrolling</span>
        <span style={styles.content} onClick={onClickInfinity}>Infinity Scrolling</span>
        <span style={styles.content} onClick={onClickVirtualized}>React virtualized</span>
        <span style={styles.content} onClick={onClickPagination}>Pagination</span>
      </div>

      <p style={styles.line}></p>

      {/*<img src="http://ghchart.rshah.org/rudenick0309" alt="rudenick0309's Github chart" />*/}

      <GitHubCalendar username="rudenick0309" />

        <a style={styles.a} href={'#header'}>맨 위로</a>


      {home
      ? (<div style={styles.home}>
          devsner의 기능 연습장입니다.
          <br />
          현재 추가된 기능은,
          <br />
          1. Normal scrolling -> 데이터가 9,000개입니다. ** 컴퓨터 사양에 따라 로딩 시간이 다소 걸릴 수 있습니다 **
          <br />
          2. Infinity scrolling -> 데이터의 상한을 5,000개로 해 두었습니다. 해당 스크롤 높이를 기준으로, 3분의 2 정도 지점에서 새로운 데이터를 받아옵니다
          <br />
          3. React virtualized -> 데이터가 10,000개입니다
          <br />
          4. Pagination -> 100개의 데이터를 페이지화 했습니다.
          <br />
        {/*  여기에 앞으로 기능 더추가될 거 라는 말 넣기 + css 작업하기*/}
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
    // padding: "130px",
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
