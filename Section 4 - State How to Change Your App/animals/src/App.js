import {useState} from 'react'
import AnimalShow from './AnimalShow'
import './App.css'

function getRondamAnimal() {
  const animals = ['bird', 'cow', 'cat', 'dog', 'horse', 'gator']

  return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
  const [animals, setAnimals] = useState([])

  const handleClick = () =>{
    setAnimals([...animals, getRondamAnimal()])
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  })

  return (
    <><div className='app'>
          <button onClick={handleClick}>Add animal</button>
          <div className='animal-list'>{renderedAnimals}</div>
      </div></>
  );
}

export default App;


// using function
/* <button onClick={function (){ console.log('Button clicked');}}>Add animal</button> */

// using arrow function
// <button onClick={() => {console.log('Button clicked');}}>Add animal</button>

// using different arrow function
// <button onClick={() => console.log('Button clicked')}>Add animal</button>

// example of console log

// const dosomething = () => {return 'hi there'}

// console.log(dosomething)
// () => {return 'hi there'}

// console.log(dosomething())
// hi there

// destructing Array
// function makeArray(){
//   return [1,10, 30,40]
// }

// const myArray = makeArray()
// const firstelement = myArray[0]
// const secondelement = myArray[1]
// console.log(firstelement, secondelement);

// const [firstelement, secondelement] = makeArray()
// console.log(firstelement, secondelement);


// count increment
// const [count, setCount] = useState(0)

// console.log(useState(50));

// const handleClick = () =>{
//   setCount(count+1)
// }

// return (
//   <><div>Show animal list here!</div>
//     <div>
//         <button onClick={handleClick}>Add animal</button>
//         <div>Number is: {count}</div>
//     </div></>
// );