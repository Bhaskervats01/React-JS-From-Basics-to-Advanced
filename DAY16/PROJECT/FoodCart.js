import { useState } from "react";
import { addItems, removeItems } from "./Slice1";
import { useDispatch } from "react-redux";


export default function FoodCart({value}){

        const [inCard, setInCart] = useState(false);
        const dispatch = useDispatch();
        
        function handleClick(){
            if(inCard){
                dispatch(removeItems())
                setInCart(false);
            }
            else
            {
                dispatch(addItems());
                setInCart(true)
            }
        }

      return (
        <>
        <h1>{value.food}</h1>
        <h2>{value.Price}</h2>
        {/* If inCard is true, show Remove; otherwise show Add */}
        <button onClick={handleClick}>{inCard ? "Remove" : "Add"}</button>
       </>
     );

}


// Add: inCart = False
// Remove: inCart(? sign) = True
