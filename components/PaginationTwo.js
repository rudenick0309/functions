import React from "react";

const PaginationTwo = ({postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div style={styles.wrapper}>
      {pageNumbers.map(number =>
        <div  className={"pagination"} onClick={() => paginate(number)}>
          <div style={styles.content} key={number} className={"page-item"}>
            <a className={"page-link"}>
              {number}
            </a>

          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    border:'2px solid red',
  },
  content: {
    marginRight: "10px",
    padding: "20px",
    border: "3px solid grey",
    borderRadius: "20px",
  }
};

export default PaginationTwo;
