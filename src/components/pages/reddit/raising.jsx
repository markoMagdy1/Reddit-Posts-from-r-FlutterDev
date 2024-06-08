import React, { useState, useEffect } from 'react';
import { fetchRedditPosts } from '../../../services/redditService';
import { Post } from './post';

export const Raising = () => {

    const [posts, setPosts] = useState([]);
    const [after, setAfter] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await fetchRedditPosts('rising');
                setPosts(data.children);
                setAfter(data.after);
            } catch (error) {
                // Handle error
            }
        };

        fetchPosts();
    }, []);

    const loadMorePosts = async () => {
        try {
            const data = await fetchRedditPosts('rising', after);
            setPosts(prevPosts => [...prevPosts, ...data.children]);
            setAfter(data.after);
        } catch (error) {
            // Handle error
        }
    };

  return (
<>
<div className='posts-container'>
        {posts.map(post => (<Post key={post.data.id} post={post}/>))}
    </div> 
    
    <div className="more">
        {posts.length>0 && <button className='' onClick={loadMorePosts}>Load More</button>}
    </div>

</>

  )
}

