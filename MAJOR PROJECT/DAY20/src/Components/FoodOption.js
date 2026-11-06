import { imageGridCards } from "../Utils/FoodData"
import Foodcard from "./FoodCard"

export default function FoodOption(){
    
    return(
        <>

        <div className="w-[80%] mx-auto flex flex-wrap gap-4 mt-20 ">
            {
                imageGridCards.map((foodData)=><Foodcard key={foodData.id} foodData={foodData}></Foodcard>)
            }
        </div>

        </>
    )
}