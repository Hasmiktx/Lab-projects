import React from 'react';
import AddPost from '../components/AddPost/AddPost';
import PostTable from '../components/PostTable/PostTable';
const Posts = () => {
    return (
        <div>
            <h2>All Posts</h2>
            <AddPost />
            <PostTable />
        </div>
    );
};
export default Posts;
