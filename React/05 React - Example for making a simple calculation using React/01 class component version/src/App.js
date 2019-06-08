import React, {useState} from "react";

// Class Component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  handleButtonClick = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Click Me!</button>
      </div>
    )
  }
}

export default App;
