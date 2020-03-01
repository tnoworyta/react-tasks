import React from 'react';
import PropTypes from 'prop-types';

export const PinnedMessage = (props) => {
  return (
    <div>
      <span role="img" aria-label="pinned">
        📌
      </span>{' '}
      Pinned:
      {props.text}
    </div>
  );
};

PinnedMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PinnedMessage;
