import { FETCH_POSTS } from "../actions/types";
const initialState = [];

const postReducer = (posts = initialState, action) => {
    const {type, payload} = action;

    switch (type){
        case FETCH_POSTS:
            return payload;
        
        default:
            return posts;
    }
};

export default postReducer;