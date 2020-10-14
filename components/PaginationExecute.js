import React, {useState, useEffect} from "react";
import Pagination from "./Pagination";
import PaginationTwo from "./PaginationTwo";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_PAGINATION_REQUEST} from "../reducers/pagination";

const PaginationExecute = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);
  const dispatch = useDispatch();
  const paginationData = useSelector((state) => state.pagination?.paginationData);

  useEffect(() => {

    dispatch({
      type: LOAD_PAGINATION_REQUEST
    });

  }, []);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;  // 10 = 1 * 10 ///  16 = 2 * 8
  const indexOfFirstPost = indexOfLastPost - postsPerPage;  // 0 = 10 - 10 /// 8 = 16 - 8
  const currentPosts = paginationData?.slice(indexOfFirstPost, indexOfLastPost); // cP = posts.slice(0, 10) // cP = posts.slice(8, 16)

  //Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>

      <h1>Random name</h1>
      <Pagination posts={currentPosts}/>
      <PaginationTwo postsPerPage={postsPerPage} totalPosts={paginationData?.length} paginate={paginate}/>

    </div>
  );
};

export default PaginationExecute;
