import React from "react"
import "./post.styles.css"
const Post = ({post}) => {
    return (
        <div className="post__container">
            <h1>{post.title} - <span>{post.id}</span></h1>
            <p>{post.body}</p>
        </div>
    );
}

export default Post;