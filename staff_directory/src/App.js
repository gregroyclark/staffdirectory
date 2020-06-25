import React from 'react';
import './App.css';
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="container">
      <Card />
      <Jumbotron />
      <NavBar />
    </div>
  );
}

export default App;
