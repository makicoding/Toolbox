// import React from "react";
// The below line must be used instead of the above line if using useState() and useEffect() 
import React, {useState, useEffect} from "react";

// Functional Component - useState() and useEffect()
function App() {
  const[count, setCount] = useState(0);

  useEffect(() => {
  document.getElementsByClassName("myTextHere")[0].innerHTML = `You have clicked on the button ${count} times`;
  })

  return (
      <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
      <br></br>
      <br></br>
      <p className="myTextHere"></p>
    </div>
  )

}



// Class Component version (the below code does the same thing as the above code):

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//   }

//   componentDidMount() {
//     document.getElementsByClassName("myTextHere")[0].innerHTML = `You have clicked on the button ${this.state.count}`;
//   }

//   componentDidUpdate() {
//     document.getElementsByClassName("myTextHere")[0].innerHTML = `You have clicked on the button ${this.state.count}`;
//   }

//   handleBtnClick = () => {
//     this.setState({count: this.state.count + 1})
//   }

//   render() {
//     return(
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleBtnClick}>Click Me!</button>
//         <br></br>
//         <br></br>
//         <p className="myTextHere"></p>
//       </div>
//     )
//   }
// }

export default App;
