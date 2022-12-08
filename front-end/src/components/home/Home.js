import React, { useEffect } from "react";
import { Bookmark, Chat, EmojiSmile, Heart, Send, ThreeDots } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/posts";
import SwitchAcc from "../switchaccount/SwitchAcc";
import './Home.css';


const Home = () => {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div className="home">
            <div className="middle-section">
                <div className="stories">

                </div>

                <div className="posts">
                    {posts.map((post, index) => (

                        <div className="post" key={index}>
                            <div className="post-header">
                                <div className="user-info">
                                    <img className="avatar" alt="" src={post.avatar} />
                                    <h6>{post.username}</h6>
                                </div>
                                <ThreeDots type="button" className="post-more" />
                            </div>
                            <img src={post.image} className="card-img-top" alt="..." />
                            <div className="button-group">
                                <div className="left-buttons">
                                    <Heart type="button" className="icon" />
                                    <Chat type="button" className="icon-chat" />
                                    <Send type="button" className="icon-send" />
                                </div>
                                <Bookmark type="button" className="icon-save" />
                            </div>
                            <div className="post-body">
                                <h6>{post.numlikes}{" "}likes</h6>
                                <p className="post-content"><span className="username">{post.username}</span>{" "}{post.content}</p>
                                <p type="button" className="view-comments">View all {post.numcomments} comments</p>
                                <p className="post-time"><small className="text-muted">{post.createdAt}</small></p>
                            </div>
                            <div className="post-footer">
                                <div className="comment-group">
                                    <EmojiSmile className="add-emoticon" />
                                    <input className="comment-form" placeholder="Add a comment..." />
                                </div>
                                <h5 type="button" className="add-comment">Post</h5>
                            </div>
                        </div>

                    ))}
                </div>

            </div>
            <div className="right-section">
                <div>
                    <SwitchAcc />
                </div>

            </div>
        </div>
    )
}

export default Home;