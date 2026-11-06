import { createSlice } from "@reduxjs/toolkit";

 //! Initial State kya hogi as an object usma count ki value 0 kar di[aLatest Value]:

 const initialState = {
    count:0
 }

// Immer => {New Draft Create karta hai:
// new object return karo poora || draft diya hai usko update karo]


const reactslicer = createSlice({
    // App es slicer ka kya name rakna chiyte ho:
    name:"slice1",
    initialState,
    // reducer ma function hote hai inc,dec etc:
    reducers:{
        // Direct mutated
        Increment:(state) =>{state.count = state.count+1},
        Decrement: (state) => {state.count = state.count-1},
        Reset: (state) => {state.count = 0},
        //create new function
        CustomIncreaser: (state, action) => {state.count+= action.payload}
    }

})

export const{Increment, Decrement, Reset, CustomIncreaser} = reactslicer.actions

export {reactslicer};

export default reactslicer.reducer;
