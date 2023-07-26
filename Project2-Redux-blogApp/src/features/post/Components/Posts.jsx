import React from "react";

import { useSelector } from "react-redux";

import { selectAllPosts } from "../postSlice";
import PostAuthor from "./PostAuthor";

const Posts = () => {
    const posts = useSelector(selectAllPosts);

    return (
        <div>
            {posts.map((post) => (
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>- {post.content}</p>
                    {post.userId ? (
                        <PostAuthor userId={post.userId} />
                    ) : (
                        <h3>- {post.fullName}</h3>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Posts;
