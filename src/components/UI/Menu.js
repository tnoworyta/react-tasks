import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import LocaleContext from 'localeContext';

const UIMenu = ({ title }) => {
  return (
    <React.Fragment>
      <div className="title">{title || 'Some test app'}</div>
      <LocaleContext.Consumer>{(locale) => <div>Locale: {locale}</div>}</LocaleContext.Consumer>
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
        <li>
          <Link to="/shops/list">Shops</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

UIMenu.propTypes = {
  title: PropTypes.string,
};

export default UIMenu;
