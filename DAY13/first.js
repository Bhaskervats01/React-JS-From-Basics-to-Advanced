import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./src/Home";
import Contact from "./src/Contact";
import Dashboard from "./src/DashBoard";
import Details from "./src/Details";
import Zero from "./src/Zero";
import Hello from "./src/Hello";
import Hi from "./src/Hi";


 function App(){
    return(

        <BrowserRouter> 
                    {/* BrowserRouter bolta hai koun se page per jana hai */}
        
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Contact">Contatc</Link>
            <Link to="/Dashboard">Dashboard</Link>
            <Link to="/Details">Details</Link>
        </nav>

        <Routes>
                {/* Routes bolta hai ki Ek hei containt chalega  */}

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>

        {/* Nested Routing = Routing ke ander Routing */}

        <Route path="/Details" element={<Details></Details>}>

        <Route index element={<Zero></Zero>}></Route>
        {/* By default */}
        <Route path="Hello" element={<Hello></Hello>}></Route>
         <Route path="Hi" element={<Hi></Hi>}></Route>
         </Route>
       </Routes>

       </BrowserRouter>
       
    )
 }



ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);