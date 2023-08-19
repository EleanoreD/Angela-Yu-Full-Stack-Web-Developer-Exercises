import React from "react";
import ReactDOM from "react-dom";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<h1>Hello World</h1>);

// During an update, there is no need to pass the container again
