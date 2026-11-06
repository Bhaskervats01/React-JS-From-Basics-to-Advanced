import React, {useState, useMemo, useCallback, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Second from "./src/second";
import GlobalContext from "./src/Global";
import { useContext } from "react";
import Fifth from "./src/fifth";

 function App(){

    const [count, setCount] = useState(10);
    console.log(GlobalContext);



    return(
        <>
        {/* Hum Bhar se bhi access kar sakte hai or ander se bhi
        <Fifth></Fifth>
        */}

        {/* //Ma Kuch provide karne wala hu: */}
        <GlobalContext.Provider value={{count, setCount}}>


        <h1>Hello Coder Army {count}</h1>
        <Second />
        <Fifth />
        </GlobalContext.Provider>

        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);