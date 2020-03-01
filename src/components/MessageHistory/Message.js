import React from 'react';
import PropTypes from 'prop-types';

export const Message = (props) => {
  return (
    <div>
      {props.user.name}: {props.text}
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default Message;
