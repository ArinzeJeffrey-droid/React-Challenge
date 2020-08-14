import React, { useState, useEffect } from 'react';
import './App.css';
import { getPosts } from './API';
import Post from './components/post/post.component';

function App() {
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

        if (scrollHeight - scrollTop === clientHeight) {
        setPage(prev => prev + 1);
        console.log(page)
        }
    };

    const validatePageNum = () => {
        if(page > 10){
            return true
        }else{
            return false;
        }
    }

    const message = validatePageNum()

    useEffect(() => {
        const loadPosts = async () => {
        setLoading(true);
        const newPosts = await getPosts(page);
        setPosts((prev) => [...prev, ...newPosts]);
        setLoading(false);
        };


        loadPosts();
    }, [page]);

    return (
        <div className='App'>
        <h1>Loads Posts Data On Scroll</h1>
        <div className="content" onScroll={handleScroll}>
            {posts && posts.map((post) => <Post key={post.id} post={post} />)}
        </div>
        {loading && <h1>Loading ...</h1>}
        {
            message ? <h1>No more Posts</h1>
            :
            ""
        }
        </div>
    );
}

export default App;
