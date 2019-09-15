import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class UserNew extends Component {
  static propTypes = {
    handleAddUserClick: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = { name: '', surname: '' }
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value })
  }

  handleSurnameChange = event => {
    this.setState({ surname: event.target.value })
  }

  handleOnclick = () => {
    this.props.handleAddUserClick(this.state)
  }

  render() {
    return (
      <div>
        Name <input onChange={this.handleNameChange} />
        Surname <input onChange={this.handleSurnameChange} />
        <button onClick={this.handleOnclick}>Add</button>
      </div>
    )
  }
}
