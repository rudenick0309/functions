import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import wrapper from "../store/configureStore";
import NormalExecute from "../components/NormalExecute";
import InfinityExecute from "../components/infinityExecute";
import VirtualizedExecute from "../components/VirtualizedExecute";
import PaginationExecute from "../components/PaginationExecute";


const Home = () => {
  console.log("홈");
  const [home, setHome] = useState(false);
  const [normal, setNormal] = useState(false);
  const [infinity, setInfinity] = useState(false);
  const [virtualized, setVirtualized] = useState(false);
  const [pagination, setPagination] = useState(false);

  const onClickHome = useCallback(() => {
    setHome(true)
    setNormal(true);
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
    console.log("인피니티 작동함");

    setHome(false)// dispatch(loadInfinityRequest())
    setNormal(false);
    setInfinity(true);
    setVirtualized(false);
    setPagination(false);
  }, []);

  const onClickVirtualized = useCallback(() => {
    console.log("버츄얼라이즈드 작동함");
    setHome(false)
    setNormal(false);
    setInfinity(false);
    setVirtualized(true);
    setPagination(false);
  }, []);

  const onClickPagination = useCallback(() => {
    console.log("페이지네이션 작동함");
    setHome(false)
    setNormal(false);
    setInfinity(false);
    setVirtualized(false);
    setPagination(true);
  }, []);


  return (
    <>
      <div style={styles.wrapper}>
        {/*<span onClick={onClickHome}>Home               </span>*/}
        <span onClick={onClickNormal}>Normal scrolling    </span>
        <span onClick={onClickInfinity}>Infinity Scrolling    </span>
        <span onClick={onClickVirtualized}>React virtualized    </span>
        <span onClick={onClickPagination}>Pagination     </span>
      </div>

      <div>
        devsner의 기능 연습장입니다.
        <br />
        현재 추가된 기능은,
        1. Normal scrolling -> 더미 데이터가 9,000개입니다. 초기 로딩 속도가 5초 정도 걸릴 수 있습니다.
        2. Infinity scrolling -> 모니터의 높이에 따라 새로운 데이터를 계속해서 불러들입니다. 재요청하는 시점은, 현재 출력되고 있는 데이터 개수에 따라, 전체 높이의 3분의 2 정도 되는 지점에서 데이터를 불러들입니다
        3. React virtualized ->
      </div>

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
    </>

  );
};

const styles = {
  fixed: {
    position: "fixed",
  },

  wrapper: {
    // padding: "130px",
    marginBottom:'60px',
    border: "2px solid red",
  },
};

export default wrapper.withRedux(Home);
