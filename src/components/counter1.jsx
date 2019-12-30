import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [/* "tag1", "tag2", "tag3" */]
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>No more Tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        { this.state.tags.length === 0 && 'Please create a new Tag'}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
