import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MessageHistory extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

MessageHistory.propTypes = {
  children: PropTypes.element.isRequired,
};
