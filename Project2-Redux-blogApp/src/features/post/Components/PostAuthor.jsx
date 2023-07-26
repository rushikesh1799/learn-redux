import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../user/userSlice";

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);

    const postUser = users.find((user) => user.id === userId);

    // console.log("postUser", postUser);

    return (
        <>
            <h3>- {postUser?.fullName}</h3>
        </>
    );
};

export default PostAuthor;
