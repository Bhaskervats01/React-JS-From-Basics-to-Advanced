import React, {useState} from "react";
import ReactDOM from "react-dom/client"
import Add from "./Add"

function App(){

    const arr =  [0,1,2,3];

    return(
        <>
        {/* Parent hai "App" and child hai "Add" */}
         {arr.map((value)=><Add key={value}></Add>)}
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);