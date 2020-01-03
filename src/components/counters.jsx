import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {
    console.log('Counters - Rendered');
    

    // console.log('this.props is: ', this.props);
    // object destructuring makes your code cleaner and simple
    const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props

    return (
      <div>
        <button 
          onClick={onReset}
          className="btn btn-primary btn-sm m-2">
            Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
