import React, { useState } from "react";
import { EmojiSmile } from "react-bootstrap-icons";
import './CreatePost.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import { addPosts } from "../../redux/actions/posts";

const CreatePost = () => {
    const initialPostState = {
        image: '',
        content: '',
    }
    const dispatch = useDispatch();
    const [post, setPost] = ([initialPostState]);
    const [submitted, setSubmitted] = useState(false);

    const handleFieldChange = e => {
        console.log(e.target);
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    }

    const createPost = () => {
        dispatch(addPosts(post))
            .then(data => {
                setSubmitted(true);
            })
            .catch(err => console.log(err))
    };

    const resetForm = () => {
        setPost(initialPostState);
        setSubmitted(false);
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            {submitted ? (
                <div>
                    <h4>Post successfully shared</h4>
                    <button className="btn btn-success" onClick={resetForm}>Reset Form</button>
                </div>
            ) :
                (<div>
                    <Button variant="primary" onClick={handleShow}>
                        Create
                    </Button>

                    <Modal show={show} className="modals" onHide={handleClose}>
                        <div className="create-post">
                            <div className="create-post-header">
                                <h5>Create new post</h5>
                                <h6 type="button" onClick={createPost}>Share</h6>
                            </div>

                            <div className="create-post-body">
                                <div className="create-post-image">
                                    <p> Add a photo here </p>
                                    <input className="form" name="image" value={post.image}
                                        placeholder="Image URL" onChange={handleFieldChange} />
                                </div>

                                <div className="create-post-content">
                                    <div className="user-info">
                                        <h6><img className="avatar" alt="" src="/public/default_pfp.svg" />username</h6>
                                    </div>

                                    <textarea className="form" id="content" name="content" value={post.content}
                                        placeholder="Write a caption..." onChange={handleFieldChange} />

                                    <div className="emoticounter">
                                        <EmojiSmile type="button" className="add-emoticon" />
                                        <p>Counter</p>
                                    </div>

                                    <div className="settings">
                                        <p className="">Add location</p>
                                        <p className="">Accessibility</p>
                                        <p className="">Advanced settings</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Modal>
                </div>
                )}

        </div>
    )
}


export default CreatePost;