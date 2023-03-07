import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getPosts } from '../../API/getPosts';
import DeletePost from '../DeletePost/DeletePost';
import EditPost from '../EditPost/EditPost';
import './Style.css';
const PostTable = () => {
    const [editMode, setEditMode] = useState(false);

    const [postEdit, setPostEdit] = useState('');
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const getAllPosts = async () => {
        try {
            const res = await getPosts();
            if (res.data) {
                window.localStorage.setItem('posts', JSON.stringify(res.data));
                dispatch({
                    type: 'GET_ALL_POSTS',
                    payload: {
                        posts: res.data,
                    },
                });
            }
        } catch (err) {
            toast.error(err);
        }
    };
    useEffect(() => {
        getAllPosts();
    }, []);
    console.log(posts, 'posts in PostTable');
    return (
        <>
            {editMode && <EditPost post={postEdit} setEditMode={setEditMode} />}
            {posts && posts.length ? (
                posts.map((post, i) => {
                    return (
                        <div key={post.id} className="post_table_div">
                            <h3>{`${post?.title
                                .charAt(0)
                                .toUpperCase()}${post?.title.slice(1)}`}</h3>
                            <p>{post?.body}</p>
                            <button
                                onClick={() => {
                                    setEditMode(true);
                                    setPostEdit(post);
                                    console.log('onEditBTn', post);
                                }}
                            >
                                Edit
                            </button>
                            <DeletePost id={post.id} />
                        </div>
                    );
                })
            ) : (
                <p>no posts</p>
            )}
        </>
    );
};
export default PostTable;
