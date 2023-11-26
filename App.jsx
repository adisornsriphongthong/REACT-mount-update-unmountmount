import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('Component is being constructed.');
    this.state = { data: '1' };
  }

  componentDidMount() {
    console.log(1);
  }

  componentDidUpdate() {
    console.log('Component is updated.');
    // Perform actions after the component is updated (props or state change)
  }

  componentWillUnmount() {
    console.log('Component is about to be unmounted.');
    // Perform cleanup before the component is removed from the DOM
  }

  updateData = () => {
    this.setState({ data: 'updated data' });
    console.log('hello world')
  };

  render() {
    console.log('Component is rendering.');
    return (
      <div>
        <p>{this.state.data}</p>
        <button onClick={this.updateData}>Update Data</button>
      </div>
    );
  }
}

export default App;
