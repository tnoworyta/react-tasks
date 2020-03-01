import React, { Component } from 'react';

import { getShops } from '../../utils/api';
import { map } from 'lodash';

export default class ShopList extends Component {
  state = {
    shops: [],
  };
  componentDidMount() {
    getShops().then((shops) => {
      this.setState({ shops });
    });
  }

  render() {
    return (
      <div>
        {map(this.state.shops, (shop) => (
          <div className="shop">
            {shop.name} ({shop.location})
          </div>
        ))}
      </div>
    );
  }
}
