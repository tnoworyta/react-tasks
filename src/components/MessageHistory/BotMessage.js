import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

export const BotMessage = (props) => {
  return (
    <div>
      <span role="img" aria-label="bot">
        🤖
      </span>{' '}
      <Message user={{ name: 'SlackBot' }} text={props.text} />
    </div>
  );
};

BotMessage.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default BotMessage;
