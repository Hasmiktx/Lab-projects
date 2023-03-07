import axios from 'axios';

export const getPostsByPage = async () =>
    // console.log(import.meta.env.VITE_APP_API);
    await axios.get(
        `${import.meta.env.VITE_APP_API}/posts?_start=${0}&_limit=${8}`
    );

// /posts?_start=${0}&_limit=${8}

export const getPosts = async () =>
    await axios.get(`${import.meta.env.VITE_APP_API}/posts`);

// await axios.get(
//   `https://jsonplaceholder.typicode.com/posts?_start=${0}&_limit=${8}}`
// );
