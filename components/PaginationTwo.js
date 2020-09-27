import React from 'react';

const PaginationTwo = ({ postsPerPage, totalPosts , paginate}) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i +=1) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div style={styles.wrapper} className={'pagination'}>
        {pageNumbers.map(number =>
          <div style={styles.content} key={number} className={'page-item'}>
            <a onClick={() => paginate(number)}  className={"page-link"}>
              {number}
            </a>

          </div>
        )}
      </div>
    </nav>
  )
}

const styles = {
  wrapper:{
    display:'flex',
  },
  content: {
    marginRight:'10px',
    padding:'20px',
    border:'3px solid grey',
    borderRadius:'20px',
  }
}

export default PaginationTwo;
