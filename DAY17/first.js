import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";
import stores from "./store";
import {Provider} from "react-redux";
import CoinCreate from "./CoinCreate";



function App(){
    return(
        <Provider store={stores}>
        <CoinCreate></CoinCreate>

        </Provider>

    )
       
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);


// Object:{type: 'slice/LoadingData', payload:true};
// {type: 'slice/UpdateData', payload:data};
// {type: 'slice/ErrorData', paylaod:"Error Occurd"}