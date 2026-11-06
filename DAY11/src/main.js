import React, { useState, useMemo, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";

// useMemo hook
// 1: Counter button: increase
// 2: Input field: Fibonnaci number
// 0 1 1 2 3 5 8 13 21... sum of last two privious
// Recursive Code : Time Complexity 2^n; using useMemo





function App() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState("");
    //const [result, setResult] = useState(null);

    // Counter

    const Fibbonnaci = useCallback((n)=>{
        if(n<=1)
            return n;

        return Fibbonnaci(n-1)+Fibbonnaci(n-2);

},[]);

    
    
     // Use of useMemo and callback functions:
      const result = useMemo(()=>Fibbonnaci(number),[number]);

     // use of useEffect Hooks
    //  useEffect(()=>{
    //     setResult(Fibbonnaci(number));

    //  },[number]);

    return (
        <>
            <h1>Counter is: {count}</h1>

            <button onClick={() => setCount(count+1)}>Increment</button>

            <button onClick={() => setCount(count-1)}>Decrement</button>

            <div>
                <h2>Fibbonacci number is:{result}</h2>

                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}></input>
            </div>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);