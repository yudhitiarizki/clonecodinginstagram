import UserService from "../../services/PostService";
import { CREATE_POSTS, FETCH_POSTS } from "./types";

export const fetchPosts = () => async dispatch => {
    try {
        const res = await UserService.getAllPosts();

        dispatch({
            type: FETCH_POSTS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
}

export const addPosts = (data) => async dispatch => {
    try {
        const res = await UserService.createPost(data);

        dispatch({
            type: CREATE_POSTS,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}