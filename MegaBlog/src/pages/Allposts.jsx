import React, { useState, useEffect } from 'react';
import appwritService from "../appwrite/config"
import { Container , PostCard } from '../components'
function Allposts() {
    const [posts, setPosts] = useState([])
    useEffect(() =>{},[])
    appwritService.getPosts([]).then((posts) => {
        if (posts){
            setPosts(posts.documents)
        }
    })
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} post={post} className='p-2 w-1/4'>
                    <PostCard post={post} />
                    </div>
                ))}
                </div>
            </Container>

        </div>
    )
}

export default Allposts
