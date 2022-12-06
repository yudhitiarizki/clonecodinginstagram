import React from "react";
import { Button } from "react-bootstrap";
import './CreatePost.css';

const CreatePost = () => {

    return (
        <div className="modals">
            {/* 520x475 */}
            <div className="modal">
                <div className="modal-header">
                    <p>Create new post</p>
                </div>
                <div className="modal-body">
                    <p> Drag photos and videos here </p>
                    <Button variant="primary">Select from computer</Button>
                    <button type="button" className="btn btn-primary">Select</button>
                </div>
            </div>

            <div className="create-post">
                <div className="create-post-header">
                    <p>Create new post</p>
                    <Button variant="primary">Share</Button>
                </div>
                <div className="create-post-body">
                    <div className="create-post-image">
                        <p> Drag photos and videos here </p>
                        <input className="form-control" id="content" placeholder="Image URL" />
                    </div>
                    <div className="create-post-content">
                        <div className="user-info">
                            <img className="avatar" alt="" src="" />
                            <h5>username</h5>
                        </div>
                        <input className="form-control" id="content" placeholder="Write a caption..." />
                    </div>
                </div>

            </div>
        </div>
    )
}


export default CreatePost;