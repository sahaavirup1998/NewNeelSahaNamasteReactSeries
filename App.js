import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id:"heading"}, "Welcome to React by react!");
// reactelement is an object and becomes a html for browser to understand
const parent = React.createElement(
    "div", {id:"parent"}, [
        React.createElement("div", {id:"chid"}, [
            React.createElement("h1", {}, "I am the new heading"),
            React.createElement("h2", {}, "I am the new heading2")]
        ),
        React.createElement(
            "div", {id:"chid2"}, [
                React.createElement("h1", {}, "I am the new heading3"),
                React.createElement("h2", {}, "I am the new heading4")]
        )]
    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);