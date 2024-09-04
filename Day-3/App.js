import React from "react";
import ReactDOM from "react-dom";


// Creating react elements using JSX
const heading = <h1 className="head">Hai react</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
//Functional Components

const Title = () => {
    return (
        <h1 id="title">This is title</h1>
    );
};

// Can use return statement
const Heading1 = () => {
    return <h2>Heading with return statement</h2> 
};

// Can also use return statement
const Heading2 = () => {
    <h2>Heading without return stmt</h2>
};



const elem = <span>An element</span>
const number = 100;
//Component Composition
//React element inside a component
const Heading3 = () => {
    return (
        <div id="container">
            <Title />
            <h3 id="head3">This is heading under title</h3>
            <p>{elem}</p>
            <p>{number + 10}</p>    
        </div>
    );
};




root.render(<Heading3 />);



