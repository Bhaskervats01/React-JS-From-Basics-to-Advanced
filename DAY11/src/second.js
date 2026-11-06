// useRef Hooks
import React, { useState, useMemo, useEffect, useCallback, useRef } from "react";
import ReactDOM from "react-dom/client";



function App(){

    const [count, setCount] = useState(0);
    //let money = 0;

    const money = useRef(0);

    // console.log(money);

    return(
        <>
        <h1>Count is: {count}</h1>
        <button onClick={() => setCount(count+1)}>Increment</button>

        <h1>Money is: {money.current}</h1>
        <button onClick={() => {money.current = money.current+1
        console.log(money.current);

        }}>Increment</button>
        </>
    )
    
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);