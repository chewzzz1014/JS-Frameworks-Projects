import React from 'react';
import ReactDOM from 'react-dom';

// a react component that returns JSX
// render JSX at root
// JSC only return a single parent element (others are nested inside the parent)
function Header() {
    return (
        <header>
            <nav className="nav">
                <img src='./react-logo.png' />

                {/* Add style */}
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
function MainContent() {
    return (
        <div>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>
                &copy; 2022 chewzzz development. All rights reserved
            </small>
        </footer>
    )
}

function Page() {
    return (
        < div >
            <Header />
            <MainContent />
            <Footer />
        </div >
    )
}

ReactDOM.render(
    <Page />,
    document.querySelector("#root")
);
