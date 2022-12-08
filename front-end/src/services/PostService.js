import api from '../api';

// const getAllPosts = () => {
//     return api.get('/posts')
// }


//Mockposts
const getAllPosts = () => {
    return api.get('/mockposts');
}


const createPost = data => {
    return api.post('/posts', data);
}

const PostService = {
    getAllPosts,
    createPost,
};

export default PostService;