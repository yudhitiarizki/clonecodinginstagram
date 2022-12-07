import api from '../api';

const getAllPosts = ()=>{
    return api.get('/posts')
}

const createPost = data => {
    return api.post('/posts', data);
}

const UserService = {
    getAllPosts,
    createPost,
};

export default UserService;