import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

//! CreateAsyncThunk [en teeno ko AsyncThunk Create kar deta hai]:
//!1. {type: 'coin/fetch/pending', payload: undefined}
//!2. {type: 'Coinfetch/fullfilled', payload:data}
//!3. {type: 'Coinfetch/rejected', payload: "error message_message"}

// {type: "Coin/fetch", payload: data(jo bhi return kar rahe hai vo jata hai payload ke ander)}

 // FetchData(20); //! yahi hota h {args}

const FetchData = createAsyncThunk(

    //! Action: ke ander do chees hoti hai => type, payload 

    'Coin/fetch',

    //  function
    async (args, thunkAPI)=>{
        try{
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);

            // data ko json mai convert kar deta hai:
            const data = await response.json();
            return data;

        }
        catch(error){

            return rejectWithValue(error.message);

        }
    }

)

const slicer1 = createSlice({
    name: 'slice1',
    initialState: {data:[], loading:false, error:null},

    //! Create Reducer vo bhi khali choda hai kyuki hum async ki baat kar rahe hai: 
    reducers: {},
    extraReducers: (builder)=>{
        builder
                //!1 type: "Coin/Fetch/pending"

        .addCase(FetchData.pending, (state)=>{
            state.loading = true;
            state.error = null;
         })

           //!2 type: "Coin/Fetch/fulfilled"

        .addCase(FetchData.fulfilled, (state, action)=>{
            state.data = action.payload;
            state.loading = false;

        }) 
            //!3 type: "Coin/Fetch/rejected"

        .addCase(FetchData.rejected, (state,action)=>{
            state.error = action.payload;
            state.loading = false;
        })  
    }
})


export default slicer1.reducer;
export {FetchData};


