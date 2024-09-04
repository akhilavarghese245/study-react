const parent = React.createElement('div', {id: 'parent'}, [
        React.createElement('div', {id: "div1"}, [
            React.createElement('h1', {}, "Heading1"),
            React.createElement('h2',{}, "Heading2")
        ]),
        React.createElement('div', {id: "div2"},[
            React.createElement('h1', {}, "Heading 3"),
            React.createElement('h2', {}, "Heading 4")

        ]),
]);
      

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
