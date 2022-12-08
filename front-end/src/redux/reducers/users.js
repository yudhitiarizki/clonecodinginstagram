import { LOGIN_USER } from "../actions/types";

const initialState = [];

const userReducer = (users = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_USER:
            return payload

        default:
            return users
    }
}

export default userReducer;