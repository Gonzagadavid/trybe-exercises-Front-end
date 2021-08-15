import React from 'react';
import MyContext from '../MyContext';

const Posts = () => (
  <MyContext.Consumer>
    {({ posts }) => (
      <ul>
        {posts.map(({ id, title }) => <li key={id}>{title}</li>)}
      </ul>
    )}
  </MyContext.Consumer>
);

export default Posts;