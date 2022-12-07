import React, { useState } from "react";
import { EmojiSmile } from "react-bootstrap-icons";
import './CreatePost.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CreatePost = () => {
    const initialPostState = {
        image: '',
        content: '',
    }
    const [post, setPost] = (initialPostState);

    const sendPost = ()=>{
        
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create
            </Button>
            <Modal show={show} className="modals" onHide={handleClose}>
                <div className="create-post">
                    <div className="create-post-header">
                        <h5>Create new post</h5>
                        <h6 type="button" onClick={sendPost}>Share</h6>
                    </div>
                    <div className="create-post-body">
                        <div className="create-post-image">
                            <p> Add a photo here </p>
                            <input className="form" value={post.image} placeholder="Image URL" />
                        </div>
                        <div className="create-post-content">
                            <div className="user-info">
                                <h6><img className="avatar" alt="" src="/public/default_pfp.svg" />username</h6>
                            </div>
                            <textarea className="form" id="content" placeholder="Write a caption..." />
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
        </>
    )
}


export default CreatePost;