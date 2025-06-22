import ReactDOM from "react-dom/client";
import Header from "/src/components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/**
 * for dev build: npx parcel index.html
 * for prod build: npx parcel build index.html
 */


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