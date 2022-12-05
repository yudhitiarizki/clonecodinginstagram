import UserService from "../../services/PostService";
import { FETCH_POSTS } from "./types";

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