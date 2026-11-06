import Third from "./Third";
import GlobalContext from "./Global";
import { useContext } from "react";

export default function Second({}){

    console.log("Hello Money");

    //const {count, setCount} = useContext(GlobalContext);

    return(
        <>
        <h2>Kaise Hai App Sab Log </h2>
        <Third />
        </>
    )
}