import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'

// a react component that returns JSX
// render JSX at root
// JSC only return a single parent element (others are nested inside the parent)

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
