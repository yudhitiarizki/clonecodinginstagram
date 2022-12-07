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
        const res = await UserService.createPost();

        dispatch({
            type: CREATE_POSTS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
}