import React from "react";
import AmiiboList from "./Components/AmiiboList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Have a look at these here amiibos</p>
        <AmiiboList />
      </header>
    </div>
  );
}

export default App;
