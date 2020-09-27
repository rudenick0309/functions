import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import wrapper from "../store/configureStore";
import NormalExecute from "../components/NormalExecute";
import InfinityExecute from "../components/infinityExecute";
import VirtualizedExecute from "../components/VirtualizedExecute";
import PaginationExecute from "../components/PaginationExecute";


const Home = () => {
  console.log("홈");
  const [normal, setNormal] = useState(false);
  const [infinity, setInfinity] = useState(false);
  const [virtualized, setVirtualized] = useState(false);
  const [pagination, setPagination] = useState(false);

  const onClickNormal = useCallback(() => {
    setNormal(true);
    setInfinity(false);
    setVirtualized(false);
    setPagination(false);
  }, []);

  const onClickInfinity = useCallback(() => {
    console.log("인피니티 작동함");
    // dispatch(loadInfinityRequest())
    setNormal(false);
    setInfinity(true);
    setVirtualized(false);
    setPagination(false);
  }, []);

  const onClickVirtualized = useCallback(() => {
    console.log("버츄얼라이즈드 작동함");
    setNormal(false);
    setInfinity(false);
    setVirtualized(true);
    setPagination(false);
  }, []);

  const onClickPagination = useCallback(() => {
    console.log("페이지네이션 작동함");
    setNormal(false);
    setInfinity(false);
    setVirtualized(false);
    setPagination(true);
  }, []);


  return (
    <>
      <div>
        <span onClick={onClickNormal}>Normal scrolling    </span>
        <span onClick={onClickInfinity}>Infinity Scrolling    </span>
        <span onClick={onClickVirtualized}>React virtualized    </span>
        <span onClick={onClickPagination}>Pagination     </span>
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
    padding: "130px",
    border: "2px solid red",
  },
};

export default wrapper.withRedux(Home);
