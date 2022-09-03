import React from 'react';
import PersonCard from './components/PersonCard';
import lux from "./lux.css";
import "./App.css";
import { person } from './data/person';

const App = () => {
  return (
<div className="container">
  <div className="row">
    <div className="col">
      {
        person.map((person, idx) => {
          return (
            <PersonCard
              key = {idx}
              name = {person.name}
              age = {person.age}
              hairColor = {person.hairColor}
            />
          )
        })
      }
    </div>
  </div>
</div>
  )
}

export default App