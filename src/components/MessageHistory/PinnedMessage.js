import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

export const PinnedMessage = (props) => {
  return (
    <div>
      <span role="img" aria-label="pinned">
        📌
      </span>{' '}
      Pinned:
      <Message user={props.user} text={props.text} />
    </div>
  );
};

PinnedMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PinnedMessage;
