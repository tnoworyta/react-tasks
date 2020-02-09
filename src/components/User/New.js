import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserNew extends Component {
  static propTypes = {
    handleAddUserClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { name: '', surname: '', success: false, counter: 0 };
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState((state) => ({ counter: state.counter + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSurnameChange = (event) => {
    this.setState({ surname: event.target.value });
  };

  handleOnclick = () => {
    this.setState({ success: true });
    this.props.handleAddUserClick(this.state);
  };

  render() {
    return (
      <div>
        Your are here for {this.state.counter} seconds
        <br />
        Name <input name="name" onChange={this.handleNameChange} />
        Surname <input name="surname" onChange={this.handleSurnameChange} />
        <button onClick={this.handleOnclick}>Add</button>
        {this.state.success && <div className="notice">User added!</div>}
      </div>
    );
  }
}
