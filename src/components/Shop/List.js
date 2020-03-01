import React, { Component } from 'react';
import axios from 'axios';

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

    axios
      .all([axios.get('http://localhost:3005/a'), axios.get('http://localhost:3005/b')])
      .then((responseArr) => {
        console.log(responseArr);
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
