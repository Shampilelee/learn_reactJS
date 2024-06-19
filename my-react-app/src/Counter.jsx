import React, {useState} from "react";

function Counter() {

    const [count, set_Count] = useState(0);
    
    const increment = () => {
        set_Count(count + 1);
    }

    const decrement = () => {
        set_Count(count - 1);
    }
    
    const reset = () => {
        set_Count(0);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increase</button>
            <button onClick={reset}>reset</button>
            <button onClick={decrement}>decrease</button>
        </div>
    );
}

export default Counter
