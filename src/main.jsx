import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalProvider from "./context/GlobalProvider.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </React.StrictMode>
);
