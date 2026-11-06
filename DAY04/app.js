import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement("h1",{id:"first", className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}},"Hello Coder Army");
const element2 = React.createElement("h2",{id:"second", className:"Rahul", style:{backgroundColor:"black", fontSize:"30px", color:"pink"}},"Kaise ho aap sab");
//ReactDOM.render(element,document.getElementById('root'));

// JSX: ke ander hum JS ke expression ko bhi print kra skte h

// const newElement = (
//     <div>
// <h1 id="first" className="second">Hello Coder Army {names}</h1> 
// <h2>Maja aaya muje</h2>
// </div>
// )

const names = "Rohit";
const obj = {
    age:23,
    salary:60
}

// React Element

const newElement = (
    <>
    <h1 id="first" className="second">Hello Coder Army {names}</h1>
    <h2>Maja aaya muje {obj.age}</h2>
    </>
)

// React Component
// 1.Class Based Component:  // Phele use hota tha ab nhi:
// 2.Function Based Component: 

function greet(){
    return <h1>Aur bhai kaisa hai</h1>
};

const meet = ()=>{
    return <h2>Mera Sab Accha Hai</h2>
}

const newElement2 = greet();
const newElement3 = meet();

const newElement4 = <>{greet()} {meet()}</>

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(newElement4);


// JSX => JavaScript XML => HTML Code direct JS ke ander Likh sakte ho: