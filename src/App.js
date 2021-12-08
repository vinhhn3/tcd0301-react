import { Component } from "react";
import "./App.css";
import Age from "./components/Age";
import Name from "./components/Name";

class App extends Component {
  state = {
    name: "Le Dinh Nghia Hung",
    age: 100000,
    address: "658 Ngo Quyen",
    showName: false,
    showLoading: true,
  };

  increaseAge = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  decreaseAge = () => {
    this.setState({
      age: this.state.age - 1,
    });
  };

  resetAge = () => {
    this.setState({
      age: 0,
    });
  };

  switchName = () => {
    this.setState({
      showName: !this.state.showName,
    });
  };

  switchLoading = () => {
    this.setState({
      showLoading: !this.state.showLoading,
    });
  };

  render() {
    return (
      <div className="App">
        <Name name={this.state.name} />
        <Age age={this.state.age} />
        <p>My Address: {this.state.address}</p>
        <button onClick={this.increaseAge}>Increase my age</button>
        <button onClick={this.decreaseAge}>Decrease my age</button>
        <button onClick={this.resetAge}>Clear my Age</button>
        <button onClick={this.switchName}>Switch the name</button>
        {this.state.showLoading ? <h4>Loading</h4> : <h4>No loading ...</h4>}
        <button onClick={this.switchLoading}>Switch the loading</button>
      </div>
    );
  }
}

export default App;
