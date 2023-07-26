import React from "react";

import { increment, decrement } from "../post/postSlice";
import { useSelector, useDispatch } from "react-redux";

const User = () => {
    const count = useSelector((state) => state.posts.count);

    const dispatch = useDispatch();

    // console.log(count);

    return (
        <div>
            <h2>Counter App</h2>
            <h3>{count}</h3>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
};

export default User;
