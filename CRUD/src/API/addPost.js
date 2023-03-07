import axios from 'axios';
export const addPost = async (post) =>
    await axios.post(
        `${import.meta.env.VITE_APP_API}/posts`,
        {
            body: post,
        },
        {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
    );

export const PutPost = async (post, id) =>
    await axios.put(`${import.meta.env.VITE_APP_API}/posts/${id}`, {
        body: post,
    });
