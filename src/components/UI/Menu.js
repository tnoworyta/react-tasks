import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const UIMenu = ({ title }) => {
  return (
    <React.Fragment>
      <div className="title">{title || 'Some test app'}</div>
      <ul>
        <li>
          <Link to="/user/list">Users</Link>
        </li>
        <li>
          <Link to="/user/48342/edit">Edit some user</Link>
        </li>
        <li>
          <Link to="/product/list">Products</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

UIMenu.propTypes = {
  title: PropTypes.string,
};

export default UIMenu;
