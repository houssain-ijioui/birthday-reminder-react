import React, { useState } from 'react';
import Contact from './components/Contact';
import './App.css';
import data from './data';



function App() {

  const [ people, setPeople ] = useState(data);
  return (
    <div className='container'>
      <h1>{people.length} birthdays today</h1>
      <Contact people={people} />
      <button onClick={() => setPeople([])}>Clear All</button>
    </div>
  );
}

export default App;
