import ReactDOM from "react-dom/client";

/**
 * for dev build: npx parcel index.html
 * for prod build: npx parcel build index.html
 */

const heading1 = (
    <h1 id="title" key="h1">
        Namaste everyone! from h1
    </h1>
);


//Functional Component
const Heading = () => {
    return (
        <div>
            {heading1}
            <h2>
                Namaste everyone! from h2
            </h2>
            <Heading3 />
        </div>
    )
};

const Heading3 = () => {
    return (
        <h3>
            Namaste everyone! from h3
        </h3>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);