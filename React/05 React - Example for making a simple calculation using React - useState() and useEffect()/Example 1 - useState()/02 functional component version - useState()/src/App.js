import React, {useState} from "react";

/*
Functional Component - useState()
useState() is the most important React Hook introduced as part of React 16.8 (ES2019), stable version released on February 6, 2019.
Note that not all older React projects will support useState().
All React projects version 16.3 and above will supprt useState().
Most browsers should be able to support useState (because React manages the app itself. So as long as the 
React app itself is version 16.3 or above, when you deploy the React project, React converts the app to be
both ES5 and ES6(ES2015), and so should be compatible with most browsers)
*/
function App() {

  const[count, setCount] = useState(0);

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
    </div>

  )
}



// Class Component version (the below code does the same thing as the above code)

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//   }

//   handleButtonClick = () => {
//     this.setState({count: this.state.count + 1})
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={() => this.setState({count: this.state.count + 1})}>Click Me!</button>
//       </div>
//     )
//   }
// }

export default App;
