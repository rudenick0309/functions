import React from 'react';

const Pagination = ({ posts, loading }) => {
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
