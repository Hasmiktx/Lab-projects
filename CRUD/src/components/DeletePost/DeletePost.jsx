import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const DeletePost = ({ id }) => {
    const dispatch = useDispatch();
    const posts = useSelector((s) => s.posts);
    const onDelete = (id) => {
        dispatch({
            type: 'DELETE',
            payload: {
                posts: posts.filter((post) => post.id !== id),
            },
        });
        toast.success('deleted your choice');
    };
    return <button onClick={() => onDelete(id)}>Delete</button>;
};
export default DeletePost;
