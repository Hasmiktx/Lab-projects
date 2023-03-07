const posts = localStorage.getItem('posts');
let postState = posts ? JSON.parse(posts) : null;

export const postReducer = (state = postState, action) => {
    if (action.type === 'GET_ALL_POSTS') {
        return [...action.payload.posts];
    }
    if (action.type === 'SET_POST') {
        return [...state, action.payload.posts];
    }
    if (action.type === 'EDIT') {
        console.log(action.payload.content, 'content');
        return [...action.payload.content];
    }
    if (action.type === 'DELETE') {
        return [...action.payload.posts];
    }
    return state;
};
