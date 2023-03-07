import React, { useState } from 'react';
import './Style.css';
import { useDispatch, useSelector } from 'react-redux';
import { PutPost } from '../../API/addPost';
const EditPost = ({ post, setEditMode }) => {
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const dispatch = useDispatch();
    const posts = useSelector((s) => s.posts);
    const onEditHandle = async (e, id) => {
        e.preventDefault();
        try {
            const edited = posts.map((el) => {
                return el.id === id
                    ? {
                          id: new Date().getTime(),
                          //   id: id,
                          title,
                          body,
                      }
                    : {
                          ...el,
                      };
            });

            console.log(edited, 'edited', post.id, 'id');
            const res = await PutPost(edited, post.id);
            console.log(res.data.body, 'res.data.body');
            dispatch({
                type: 'EDIT',
                payload: {
                    content: res.data.body,
                },
            });

            setTitle('');
            setBody('');
            setEditMode(false);
        } catch (err) {
            console.log(err);
        }
    };
    console.log('EditPost Comp');
    return (
        <div className="edit_post_div">
            <h3>Edit Post</h3>
            <form
                className="edit_post_div"
                onSubmit={(e) => onEditHandle(e, post.id)}
            >
                <label>Title</label>
                <input
                    value={title}
                    placeholder={post.title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Body</label>
                <input
                    value={body}
                    placeholder={post.body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <button>Save</button>
            </form>
        </div>
    );
};
export default EditPost;
