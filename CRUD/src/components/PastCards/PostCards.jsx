import React, { useEffect, useState } from 'react';
import { getPostsByPage } from '../../API/getPosts';
import { toast } from 'react-toastify';

const PostCards = () => {
    const [post, setPost] = useState([]);

    const getPostFunc = async () => {
        try {
            const res = await getPostsByPage();
            if (res.data) {
                setPost(res.data);
            }
        } catch (err) {
            toast.error(err);
        }
    };
    useEffect(() => {
        getPostFunc();
    }, []);
    console.log(post);
    return post && post.length ? (
        post.map((post) => {
            return (
                <div key={post.id}>
                    <h2>{`${post.title
                        .charAt(0)
                        .toUpperCase()}${post.title.slice(1)} `}</h2>
                    <p>{post.body}</p>
                </div>
            );
        })
    ) : (
        <p>No posts</p>
    );
};
export default PostCards;
