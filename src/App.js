import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo img-fluid" alt="logo" />
            </header>
            <Dictionary />
            <footer className="text-center">Coded by Beata</footer>
        </div>
    );
}

export default App;
