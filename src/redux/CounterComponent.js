import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./slices/counterSlice";

function CounterComponent() {
    const count = useSelector(State => State.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Counter</h2>
            <div>
                <span>{count}</span>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
            <div>
                <input
                type="text"
                onChange={(e) => dispatch(incrementByAmount(parseInt(e.target.count) || 0))}
                placeholder="Enter value" 
                />
                <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
            </div>
        </div>
    );
}

export default CounterComponent;