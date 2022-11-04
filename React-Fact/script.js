// render JSX at root
// JSC only return a single parent element (others are nested inside the parent)
const myJSX = (
    <div>
        <h1>Hello React!</h1>
        <p>This is a paragraph</p>
    </div>
);

const navBar = (
    <nav>
        <h1>My Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

ReactDOM.render(
    myJSX,
    document.querySelector("#root")
);
