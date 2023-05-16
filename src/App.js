import React from "react";
import PersonCard from "./Components/PersonCard.js";
import './App.css';


function App() {
  return (
    <div className="container">
      <PersonCard
      firstName = "Jane"
      lastName = "Doe"
      age = {45}
      hairColor = "Black"
      />
      <PersonCard
      firstName = "Jhon"
      lastName = "Smith"
      age = {88}
      hairColor = "Brown"
      />
      <PersonCard
      firstName = "Millard"
      lastName = "Fillmore"
      age = {50}
      hairColor = "Brown"
      />
      <PersonCard
      firstName = "María"
      lastName = "Smith"
      age = {62}
      hairColor = "Brown"
      />      
    </div>
  );
}

export default App;
