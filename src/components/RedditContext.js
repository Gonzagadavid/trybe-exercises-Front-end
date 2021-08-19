import React, {  createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getPostsBySubreddit } from '../services/redditAPI';

const Context = createContext();
const { Provider, Consumer } = Context;

const  RedditProvider = ({ children }) => {
  const [ postsBySubreddit, setPostsBySubreddit] = useState({});
  const [ selectedSubreddit, handleSubredditChange ] = useState('reactjs');
  const [ shouldRefreshSubreddit, setShouldRefreshSubreddit] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  

  const handleFetchError = () => {
    setIsFetching(false)
    setPostsBySubreddit({  error: 'error 404', items: [] })
  }

  useEffect(() => {
   
    const fetchPosts = async ()  => {
      setIsFetching(true)
      try {
        const resp = await getPostsBySubreddit(selectedSubreddit)
        setIsFetching(false)
        setShouldRefreshSubreddit(false)
        const lastUpdated = Date.now()
        const items = resp.data.children.map((child) => child.data)
        setPostsBySubreddit({ items, lastUpdated }) 
      } catch (e) {
        return handleFetchError()
      }
    }

    fetchPosts()
  }, [ selectedSubreddit, shouldRefreshSubreddit])
 


  const handleRefreshSubreddit = () => setShouldRefreshSubreddit(true);

    const context = {
      postsBySubreddit,
      selectSubreddit: handleSubredditChange,
      selectedSubreddit,
      isFetching,
      refreshSubreddit: handleRefreshSubreddit,
      availableSubreddits: ['reactjs', 'frontend'],
      posts: postsBySubreddit.items,
    };
    return (
      <Provider value={context}>
        {children}
      </Provider>
    );
}

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RedditProvider as Provider, Consumer, Context };