// App.js
import React from 'react';
import { Slider } from './Slider';
// Udemy's code editor is a little weird... 
// We do *not* need an 'import {useState}' line

function App() {
  const [age, setAge] = useState(50);
  
  const handleAgeChange = (newAge) => {
    setAge(newAge);
  };
  
  return <Slider value={age} onChange={handleAgeChange} />
}

const useState = React.useState;
export default App;

// Slider.js
// You do *not* need to change this file
// You do *not* need to change this file

import React from 'react';

function Slider({ value, onChange }) {
  return (
    <div>
      <h1>Current Age: {value}</h1>
      <input type="range" min={1} max={120} value={value || 50} onChange={(e) => onChange && onChange(e.target.value)} />
    </div>
  );
}

// Don't change the export
export { Slider };