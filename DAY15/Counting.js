import { useDispatch, useSelector } from "react-redux"
import { Increment, Decrement, Reset } from "./Slicer1";


export default function Counting(){

    // Suscribing to the event52
    const count = useSelector((state)=>state.slice1.count);


    const dispatch = useDispatch();

    // console.log(Increment());
    // console.log(Decrement());


    return(
        <>
        <h1>Counter is {count}</h1>
        <button onClick={()=>dispatch(Increment())}>Incerment</button>
        <button onClick={()=>dispatch(Decrement())}>Decrement</button>
        <button onClick={()=>dispatch(Reset())}>Reset</button>
        </>
    )
}