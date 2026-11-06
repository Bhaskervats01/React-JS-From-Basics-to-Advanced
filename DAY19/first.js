import React, {useState} from "react";
import ReactDOM from "react-dom/client"
import Add from "./Add";


function App(){

    const [language, setLanguage]  = useState(["TS", "JS", "Java"])

    function handleClick(){
        // Mein ma ek new language add karna chiyta hu 
        setLanguage(["C++",...language]); 

    }

    //! VirtualDOM is a "lightweight" Created by Raect
    // Create with the help of React
     const VDom = <h1>Hello Coder Army</h1>
     
     //! RealDOM is a "HeavyWeight" Created by JavaScript: 
     // Create With the help of JavaScript
     const RDom = document.createElement('h1');
     RDom.innerText = "Hello Coder Army";
     

     console.log(VDom);
     console.log(RDom);


    return(
        <>

            <div style={{display:"flex", justifyContent:"center", gap:"20px", margin:"50px"}}>
                {
                    language.map((value, index)=> <Add key={value} value={value}></Add>)
                }
            </div>
            <br></br> 
            <br></br>
            <br></br>
            <br></br>

            <button onClick={handleClick}>Add language</button>
        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);