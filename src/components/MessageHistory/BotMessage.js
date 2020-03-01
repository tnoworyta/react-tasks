import React from 'react';
import PropTypes from 'prop-types';

export const BotMessage = (props) => {
  return (
    <div>
      <span role="img" aria-label="bot">
        🤖
      </span>{' '}
      Hey {props.user.name}, {props.text}
    </div>
  );
};

BotMessage.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default BotMessage;
