import React, { useEffect, useState, useCallback } from 'react';
import { getPostsBySubreddit } from './services/redditAPI';
import Posts from './components/Posts';
import Selector from './components/Selector';
import RefreshButton from './components/RefreshButton';
import LastUpdatedAt from './components/LastUpdatedAt';

const App = () => {
  const [selectedSubreddit, setSelected] = useState('reactjs')
  const [posts, setPosts ] = useState([])
  const [isFetching, setFetching] = useState(false)
  const [lastUpdated, setUpDate] = useState('')
  
  const fetchPosts = useCallback(async () => {
    setFetching( true )
    const { data }  = await getPostsBySubreddit(selectedSubreddit)
    const posts = data.children.map((child) => child.data);
    const lastUpdated =  Date.now()
    setPosts(posts) 
    setUpDate(lastUpdated)
    setFetching(false)
  }, [selectedSubreddit])
  
  useEffect(() => {                                  
     fetchPosts()
  }, [fetchPosts])
  
  return (
    <div>
      <Selector
        value={selectedSubreddit}
        onChange={(nextSubreddit) => setSelected(nextSubreddit)}
        options={['frontend', 'reactjs']}
      />
      <div>
        {lastUpdated && <LastUpdatedAt lastUpdated={lastUpdated} />}
        <RefreshButton fetchPosts={fetchPosts} isFetching={isFetching} /> 
      </div>
      {isFetching && <h2>Loading...</h2>}
      {!isFetching && !!!posts.length && <h2>Empty.</h2>}
      {!isFetching && !!posts.length && <Posts posts={posts} />}
    </div>
  );
}

export default App;
