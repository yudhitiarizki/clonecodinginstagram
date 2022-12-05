import api from '../api';

const getAllPosts = ()=>{
    return api.get('/')
}

const UserService = {
    getAllPosts,
};

export default UserService;