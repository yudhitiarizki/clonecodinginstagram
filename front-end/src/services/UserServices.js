import api from '../api';

const login = (data) => {
    return api.post('/login', data)
}

const register = (data) => {
    return api.post('/users', data)
}

const logout = (data) => {
    return api.post('/logout', data)
}

const UserService = {
    login,
    register,
    logout
};

export default UserService;