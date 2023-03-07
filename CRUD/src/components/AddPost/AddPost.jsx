import React, { useState } from 'react';
import { addPost } from '../../API/addPost';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
const AddPost = () => {
    const [id, setId] = useState(101);
    const [tiltle, setTiltle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const postData = {
        id: id,
        title: tiltle,
        body: body,
    };
    const addPostHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await addPost(postData);
            console.log(res, 'res  after await in addpost');
            dispatch({
                type: 'SET_POST',
                payload: {
                    posts: res.data.body,
                },
            });

            setId(id + 1);
            setTiltle('');
            setBody('');
            toast.success('successfuly added');
        } catch (err) {
            toast.error(err);
        }
    };
    return (
        <>
            <h3>Add Post</h3>
            <form onSubmit={addPostHandler}>
                <label>
                    Title
                    <input
                        value={tiltle}
                        onChange={(e) => setTiltle(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Body
                    <input
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Add</button>
            </form>
        </>
    );
};
export default AddPost;
