import React, { useEffect } from "react";
import { Bookmark, Chat, EmojiSmile, Heart, Send, ThreeDots } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/posts";
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

                        <div className="card">
                            <div className="card-header">
                                <div className="user-info">
                                    <img className="avatar" alt="" src={post.avatar} />
                                    <h5>{post.username}</h5>
                                </div>
                                <ThreeDots className="post-more" />
                            </div>
                            <img src={post.image} className="card-img-top" alt="..." />
                            <div className="btn-group" role="group" aria-label="First group">
                                <div className="left">
                                    <Heart type="button" className="icon" />
                                    <Chat type="button" className="icon" />
                                    <Send type="button" className="icon" />
                                </div>
                                <Bookmark type="button" className="icon" />
                            </div>
                            <div className="card-body">
                                <h4>{post.numlikes}{" "}likes</h4>
                                <h4 className="username">{post.username}</h4>
                                <p className="post-content">{post.content}</p>
                                <p className="view-comments">View all {post.numcomments} comments</p>
                                <p className="post-time"><small className="text-muted">{post.createdAt}</small></p>
                            </div>
                            <div className="card-footer">

                                <div className="user-info">
                                    <EmojiSmile className="add-emoticon" />
                                    <input className="form-control" id="comment" placeholder="Add a comment..." />
                                </div>
                                <h4 type="button" className="add-comment">Post</h4>
                            </div>
                        </div>

                    ))}
                </div>

            </div>
            <div className="right-section">
                <h4>Switch Account</h4>
                <h4>Suggestions</h4>
            </div>
        </div>
    )
}

export default Home;