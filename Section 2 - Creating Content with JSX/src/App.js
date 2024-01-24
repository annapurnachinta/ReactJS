// 1. create a new file. (By convention) File should start with a capital letter
// App.js

// 2. Make a component. Should be a function that return JSX
const message = 'React!'

function App() {
    return <h1>Hi</h1>
}
console.log(message);

// 3. Export the component at the bottom of the file.
export {message}
export default App

// 4. Import the component into another file.
//  In index.js just inport app.js file

// 5. Use the component 