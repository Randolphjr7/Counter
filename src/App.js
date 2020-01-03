import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log('App - Constructor');
  }

  // perfect place to make API/Ajax calls to get data from the server
  componentDidMount() {
    // Ajax Call
    console.log('App - Mounted');
  }

  handleIncrement = counter => {
    // console.log("handleIncrement = counter => {}", counter);
    const counters  = [...this.state.counters];
    const index     = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    console.log("handleDecrement = counter => {}", counter);
    const counters  = [...this.state.counters];
    const index     = counters.indexOf(counter);
    counters[index] = { ...counter };

/*     if(counters[index].value === 0){
        console.log('button should now be disabled')
        return;
    }  */

    counters[index].value--;
    this.setState({ counters })
  }

  isDisabled = () => {
    return true;
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    // console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    console.log('App - Rendered');
    

    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
