import React, { useState } from "react";
import { postAdded } from "../postSlice";
import "../styles.css";

import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { selectAllUsers } from "../../user/userSlice";

const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState();
    const dispatch = useDispatch();

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUserId(Number(e.target.value));

    // selecting users from userSlice reducer using useSelector
    const users = useSelector(selectAllUsers);

    const usersOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.fullName}
        </option>
    ));

    // console.log(usersOptions);

    const onSavePostClicked = () => {
        // creating the post object
        const postToAdd = {
            _id: nanoid(),
            title: title,
            content: content,
            userId: userId,
        };

        // dispatching the created post object using "postAdded" action from postSlice.

        dispatch(postAdded(postToAdd));
        setTitle("");
        setContent("");
        setUserId("");
    };

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    return (
        <section>
            <h2>Add a New Post</h2>
            <form className="postform_container">
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select
                    id="postAuthor"
                    value={userId}
                    onChange={onAuthorChanged}
                >
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >
                    Save Post
                </button>
            </form>
        </section>
    );
};

export default AddPostForm;
