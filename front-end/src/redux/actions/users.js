import UserService from "../../services/UserServices";
import { LOGIN_USER } from "./types";

export const loginUser = (data) => async dispatch => {
    try {
        const res = await UserService.login(data);
        console.log('data', data);
        dispatch({
            type: LOGIN_USER,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
}