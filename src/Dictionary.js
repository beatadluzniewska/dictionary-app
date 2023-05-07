import { useState } from "react";
import React from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);

        let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/sunset";
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    // https://api.dictionaryapi.dev/api/v2/entries/en/<word>

    return (
        <>
            <div className="Dictionary">Hello from dictionary</div>
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}></input>
            </form>
        </>
    );
}
