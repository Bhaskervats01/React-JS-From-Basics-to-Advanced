import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Github(){


    // const data = useParams();
    // console.log(data);

    const {name} = useParams();

    const [Profile, setProfile] = useState("null");

    async function fetchuser(){
        const response = await fetch(`https://api.github.com/users/${name}`);
        const data = await response.json();
        setProfile(data);
    }

    useEffect(()=>{
        fetchuser();

    })

    return(
        <>
        <h1>My GitHub Profile</h1>
        {/* Display the user data */}
        <div>
            {/* ? if value is null don't move  */}
            <img src={Profile?.avatar_url}></img>
            <h2>{Profile?.login}</h2>
        </div>
        </>
    )
}