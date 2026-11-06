
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";

function GithubProfile() {
    return (
        <div>
            <Header></Header>
            <Body>Body Component</Body>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <GithubProfile />
);
