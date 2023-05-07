import { useState } from "react";
import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <>
            <div className="Dictionary">Hello from dictionary</div>
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}></input>
            </form>
        </>
    );
}
