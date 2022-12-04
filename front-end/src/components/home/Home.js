import React from "react";
import { Bookmark, Chat, EmojiSmile, Heart, Send, ThreeDots } from "react-bootstrap-icons";
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="middle-section">
                <div className="stories">
                    <h6>Stories</h6>
                </div>

                <div className="posts">
                    <div className="card">
                        <div class="card-header">
                            <div className="user-info">
                                <img className="avatar" alt="80x80" src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" />
                                <h5>Username</h5>
                            </div>
                            <ThreeDots className="post-more" />
                        </div>
                        <img src="https://assets.pikiran-rakyat.com/crop/143x135:825x660/x/photo/2022/06/22/2094370291.png" className="card-img-top" alt="..." />
                        <div className="btn-group" role="group" aria-label="First group">
                            <div className="left">
                                <Heart type="button" className="icon" />
                                <Chat type="button" className="icon" />
                                <Send type="button" className="icon" />
                            </div>
                            <Bookmark type="button" className="icon" />
                        </div>
                        <div className="card-body">
                            <h4 className="username">Username</h4>
                            <p className="post-content">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="view-comments">View all comments</p>
                            <p className="post-time"><small class="text-muted">3 MINUTES AGO</small></p>
                        </div>
                        <div class="card-footer">

                            <div className="user-info">
                                <EmojiSmile className="add-emoticon" />
                                <input className="form-control" id="comment" placeholder="Add a comment..." />
                            </div>
                            <h4 type="button" className="add-comment">Post</h4>
                        </div>
                    </div>

                    <div className="card">
                        <div class="card-header">
                            <div className="user-info">
                                <img className="avatar" alt="80x80" src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" />
                                <h5>Username</h5>
                            </div>
                            <ThreeDots className="post-more" />
                        </div>
                        <img src="https://assets.pikiran-rakyat.com/crop/143x135:825x660/x/photo/2022/06/22/2094370291.png" className="card-img-top" alt="..." />
                        <div className="btn-group" role="group" aria-label="First group">
                            <div className="left">
                                <Heart type="button" className="icon" />
                                <Chat type="button" className="icon" />
                                <Send type="button" className="icon" />
                            </div>
                            <Bookmark type="button" className="icon" />
                        </div>
                        <div className="card-body">
                            <h4 className="username">Username</h4>
                            <p className="post-content">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="view-comments">View all comments</p>
                            <p className="post-time"><small class="text-muted">3 MINUTES AGO</small></p>
                        </div>
                        <div class="card-footer">

                            <div className="user-info">
                                <EmojiSmile className="add-emoticon" />
                                <input className="form-control" id="comment" placeholder="Add a comment..." />
                            </div>
                            <h4 type="button" className="add-comment">Post</h4>
                        </div>
                    </div>

                    <div className="card">
                        <div class="card-header">
                            <div className="user-info">
                                <img className="avatar" alt="80x80" src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" />
                                <h5>Username</h5>
                            </div>
                            <ThreeDots className="post-more" />
                        </div>
                        <img src="https://assets.pikiran-rakyat.com/crop/143x135:825x660/x/photo/2022/06/22/2094370291.png" className="card-img-top" alt="..." />
                        <div className="btn-group" role="group" aria-label="First group">
                            <div className="left">
                                <Heart type="button" className="icon" />
                                <Chat type="button" className="icon" />
                                <Send type="button" className="icon" />
                            </div>
                            <Bookmark type="button" className="icon" />
                        </div>
                        <div className="card-body">
                            <h4 className="username">Username</h4>
                            <p className="post-content">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="view-comments">View all comments</p>
                            <p className="post-time"><small class="text-muted">3 MINUTES AGO</small></p>
                        </div>
                        <div class="card-footer">

                            <div className="user-info">
                                <EmojiSmile className="add-emoticon" />
                                <input className="form-control" id="comment" placeholder="Add a comment..." />
                            </div>
                            <h4 type="button" className="add-comment">Post</h4>
                        </div>
                    </div>
                </div>

            </div>
            <div className="right-section">
                <h1>Switch Account</h1>
                <h2>Suggestions</h2>
            </div>
        </div>
    )
}

export default Home;