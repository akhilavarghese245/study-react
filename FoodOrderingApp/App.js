import React from "react";
import ReactDOM from "react-dom";



const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://thumbs.dreamstime.com/b/creative-food-delivery-logo-icon-design-modern-vector-icon-illustration-creative-food-delivery-logo-design-312369055.jpg" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Address</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};


// restaurant cards
const RestCard = () => {
    return (
        <div className="res-card">
            <img  className="res-logo" alt = "res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r5mfli8wbcxukj0ehbit"/>
            <h4>Hotel Mithila</h4>
            <h6>North indian, Chinese</h6>
            <h6>4.5 stars</h6>
            <h6>35-40 mins</h6>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <h3>Search</h3>
            </div>
            <div className="res-container">
                <RestCard />
                <RestCard />
            </div>
        </div>
    );
};
const AppLayout = () => {
    return (
        <div id="app">
            <Header />  
            <Body />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);



