import { useState, useEffect } from "react";
export default function useFetch(){
    
        const [Profile, setProfile] = useState([]);
        const [numberofProfile, setnumberofProfile] = useState("");
        async function generateProfile(count){
            const ran = Math.floor(1+Math.random()*10000);
            const response = await fetch("https://api.github.com/users?per_page=10");
            const data = await response.json();
    
            setProfile(data)
        }
     
        useEffect(()=>{
            generateProfile(10);
    
        },[]);

        console.log("Custom hook");
    
       return {generateProfile, numberofProfile, setnumberofProfile, Profile };
        
    }
