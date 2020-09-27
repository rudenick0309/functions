import React from 'react';


const Pagination = ({ posts, loading }) => {
  console.log('f c pagination posts;', posts)
  // console.log('f c pagination loading;', loading)
  // if(loading) {
  //   return <h2>Loading...</h2>
  // }

  return (
    <ul >
      {posts?.map(post =>(
        <li key={post.id} >
          {post.name}
        </li>
      ))}
    </ul>
  )
}

export default Pagination;
