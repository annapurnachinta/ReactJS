// 1. Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App, {message} from './App';

// 2. Get Reference to the div with ID root
const element = document.getElementById('root')

// 3. Tell React to take control of the element
const root = ReactDOM.createRoot(element)

// 4. Create a componement
// function App() {
  // const message = 'Hi React'
  // const sum = 2+2
  // const date = new Date()
  // const time = date.toLocaleTimeString()
  // const ary = [1,2,3]
  // return <h1>message = {message}, sum = {sum}, time = {time}, array={ary}, date = {new Date().toLocaleDateString()}</h1>

  // const name = 'Annapurna';
  // const age = 27

  // return (
  //   <div>
  //     <div>
  //     My name is: {name}, 
  //     </div>
  //     <div>
  //       My age is {age}
  //     </div>
      
  //   </div>
  // );

  // return <input type='number' min={5} max={10}/>

  // const inputType = 'number';
  // const minValue = 5
  // const maxValue = 20

  // return <input type={inputType} min={minValue} max={maxValue}/>

  // return <input type={inputType} style={{border: '3px solid red'}}/>

  // code 1:
  // const message = 'Enter age'

  // return (
  //   <input 
  //     type={inputType}
  //     min={minValue}
  //     max={10}
  //     list={[1,2,3]}
  //     style={{ color: 'red'}}
  //     placeholder={message}
  //   />
  // )

// convert HTML to JSX

// return <textarea autoFocus={true}/>

// return <input spellCheck={false} style={{backgroundColor: 'gray'}}/>

// code 2:

// return (
//   <div className="wrapper">
//     <textarea
//       readOnly
//       maxLength={3}
//       spellCheck
//       style={{backgroundColor: 'gray' }}
//     />
//   </div>
// );

// }

// 5. Show the componement on the screen
root.render(<App/>)  