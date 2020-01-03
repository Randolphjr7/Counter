import React, { Component } from "react";

class Counter extends Component {

  // Compare new with old
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if(prevProps.counter.value !== this.props.counter.value){
      // Ajax call and get new data from the server
      console.log('componentDidUpdate(){} => make an Ajax call');
    }
    if(this.props.counter.value === 0){
      console.log('componentDidUpdate() => BUTTON SHOULD BE DISABLED');
      
    }
  }

  componentWillUnmount() {
    console.log('Counter - Unmount')
  }

  render() {
    /* Every React Component has a property called props */
    console.log('Counter - Rendered');
    

    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeStyle()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>

          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? 'disabled' : ''}
          >
            -
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getBadgeStyle() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  getDisabledColor() {
    let classes = "badge m-2 badge-light";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
