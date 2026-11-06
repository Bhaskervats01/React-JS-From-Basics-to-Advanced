import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"

function PasswordGenerator(){

    const [Password, setPassword] = useState("");
    const [length ,setLength] = useState(10);
    const [numberChanged, setnumberChanged] = useState(false);
    const [CharChanged, setcharChanged] = useState(false);

    const generatepassword = useCallback(()=>{

        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numberChanged)
            str+="012456789";
        if(CharChanged)
            str+="+-)(*&%$#@!~`{}";

        let pass =""
        for(let i=0;i<length;i++){
            pass+= str[Math.floor(Math.random()*str.length)]
        }

        setPassword(pass);

    },[length,CharChanged,numberChanged]);

    
    useEffect(()=>{
        generatepassword()
    }, [generatepassword])

    return(
        <>
        
        <h1>{Password}</h1>
        <div className="second">
            <input type="range" min={5} max={50} value={length} className="cursor-pointer accent-blue-600" onChange={(e)=>setLength(e.target.value)}></input>
            <label>Length({length})</label>

            <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setnumberChanged(!numberChanged)}></input>
            <label>Number</label>
            
            <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setcharChanged(!CharChanged)}></input>
            <label>Character</label>
        </div>
        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator />);