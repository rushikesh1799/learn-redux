import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

import "./style.css";

const Counter = () => {
    const count = useSelector((state) => state.counter.count); // this exact thing will return the complete state that we have created in the counterSlice.

    const [incrementedValue, setIncrementedValue] = useState(0);

    const dispatch = useDispatch();

    const addValue = Number(incrementedValue) || 0;

    const resetAll = () => {
        setIncrementedValue(0);
        dispatch(reset());
    };

    // console.log(count);

    return (
        <div>
            <h1>{count}</h1>
            <div className="counter_main">
                <div className="btns">
                    <button onClick={() => dispatch(decrement())}>-</button>
                    <button onClick={() => dispatch(increment())}>+</button>
                </div>
                <input
                    type="text"
                    value={incrementedValue}
                    onChange={(e) => setIncrementedValue(e.target.value)}
                />
                <div className="btns">
                    <button onClick={resetAll}>Reset</button>
                    <button
                        onClick={() => dispatch(incrementByAmount(addValue))}
                    >
                        increment by {incrementedValue}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
