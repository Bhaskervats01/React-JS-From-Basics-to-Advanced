import { Outlet, Link } from "react-router-dom"
export default function Details(){

    return(
        <>
        <nav>
            <Link to="/Details">Details</Link>
            <Link to="Hello">Hello</Link>
            <Link to="Hi">Hi</Link>
        </nav>
        
        <h1>Welcome to Details Page</h1>
        <Outlet></Outlet>
        {/* Outlet jo function {Hi, Hello Zero} enme se kise ek ko catch kraga 
        outlet us path ko catch kraga*/}
        </>
    )
}