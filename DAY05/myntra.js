import React from "react";
import ReactDOM from "react-dom/client"
function Card(props) { 
    return (
        <div className="Card" style={{ border: "2px solid black", padding:"2px"}}>
            <img src="https://printify.com/wp-content/uploads/2022/07/Custom-T-Shirts-Womens-T-Shirts.jpg" height="200px" 
                width="200px"/>
                
            <div style={{ textAlign: "center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
    );
}

    function Header() {
    return (
        <div className="heading">
            
                <img className="images" src="https://images.indianexpress.com/2021/01/myntra.png?" height="50px" width="50px" alt="logo" />
            
            <div className="option">
                <button className="but">Men</button>
                <button className="but">Women</button>
                <button className="but">Kids</button>
                <button className="but">Home and Living</button>
                <button className="but">Beauty</button>
                <button className="but">Studio</button>
            </div>

            <input className="searchbar" placeholder="Search for products brands and more"></input>

            <div className="Profile">
                <button className="pro">Profile</button>
                <button className="pro">Wishlist</button>
                <button className="pro">Bag</button>
            </div>
        </div>
    );
}


function Footer() {
    return (
        <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/18/CH3OJp88_77193d7b8a4c4a2289a48f5bbda182de.jpg" width="1500px" ></img>
    );
}





function App(){
    return(<>
    <Header />
    <div className="middle" style={{display:"flex", gap:"10px" , flexWrap:"wrap"}}>
        {
            arr.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.Offer}/>)   
        }
    
    </div>
    <Footer/>
    </>
    )
}




const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);