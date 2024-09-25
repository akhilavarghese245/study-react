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
const AppLayout = () => {
    return (
        <div id="app">
            <Header />  
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);



