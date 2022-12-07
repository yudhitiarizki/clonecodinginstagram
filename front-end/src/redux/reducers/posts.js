import { CREATE_POSTS, FETCH_POSTS } from "../actions/types";
const initialState = [];

const postReducer = (posts = initialState, action) => {
    const {type, payload} = action;

    switch (type){
        case FETCH_POSTS:
            return payload;
        
        case CREATE_POSTS:
            return [...posts, payload]
        
        default:
            return posts;
    }
};



export default postReducer;