import React from 'react';
import ReactDOM from 'react-dom';

// a react component that returns JSX
// render JSX at root
// JSC only return a single parent element (others are nested inside the parent)
function getPage() {
    <div>
        <img src='./logo512.png' width='40px' />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div >
}

ReactDOM.render(
    getPage(),
    document.querySelector("#root")
);
