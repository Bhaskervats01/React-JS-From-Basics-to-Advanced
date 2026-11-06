import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// useMemo hook
// 1: Counter button: increase
// 2: Input field: Fibonnaci number
// 0 1 1 2 3 5 8 13 21... sum of last two privious

function App() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(null);

    return (
        <>
            <h1>Counter is: {count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>

            <div>
                <h2>Fibonacci number is: {number}</h2>

                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);