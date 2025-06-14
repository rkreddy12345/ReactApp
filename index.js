import ReactDOM from "react-dom/client";

/**
 * for dev build: npx parcel index.html
 * for prod build: npx parcel build index.html
 */

const Title = () => (
    <a href="/">
        <img alt="logo" className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbS295BL3xdJwXWwh7cTytVNtCwa-0r5TI9UviYdDmsnDk15ovoj2HcZlusgDiYkuo4o&usqp=CAU"
        />
    </a>
);


const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>

    )
}

const Body = () => {
    return (
        <h4>body</h4>
    )
}

const Footer = () => {
    return (
        <h4>footer</h4>
    )
}

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);