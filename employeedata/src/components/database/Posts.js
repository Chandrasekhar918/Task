import React from 'react';

const Posts = ({ db, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {db.map(post => (
        <li key={db.id} className='list-group-item'>
          {post.emp_id}
          {post.address}
          {post.emp_name}
          
          
        </li>
      ))}
    </ul>
  );
};

export default Posts;