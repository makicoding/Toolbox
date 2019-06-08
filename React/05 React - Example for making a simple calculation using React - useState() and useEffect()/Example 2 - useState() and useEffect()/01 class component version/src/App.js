import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    document.getElementsByClassName("myTextHere")[0].innerHTML = `You have clicked on the button ${this.state.count}`;
  }

  componentDidUpdate() {
    document.getElementsByClassName("myTextHere")[0].innerHTML = `You have clicked on the button ${this.state.count}`;
  }

  handleBtnClick = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleBtnClick}>Click Me!</button>
        <br></br>
        <br></br>
        <p className="myTextHere"></p>
      </div>
    )
  }
}

export default App;
