import GlobalContext from "./Global";
import { useContext } from "react";

export default function Third(){

    //const data = useContext(GlobalContext);
    //console.log(GlobalContext);  // store data in object form

    const {count, setCount} = useContext(GlobalContext); //destructuring
    return(
        <>
        <h2>I am printing {count}</h2>
        <button onClick={()=>setCount(count+5)}>Incerment</button>
        <button onClick={()=>setCount(count-5)}>Decrement</button>
        
        </>
    )
}