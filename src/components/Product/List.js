import React, { Component } from 'react';

import ProductDetails from './Details';

export default class ProductList extends Component {
  state = {
    productLikes: {},
    showNotice: false,
  };

  onLikeProduct = (product) =>
    this.setState(
      (state) => ({
        showNotice: true,
        productLikes: {
          ...state.productLikes,
          [product.id]: (state.productLikes[product.id] || 0) + 1,
        },
      }),
      () =>
        setTimeout(() => {
          this.setState({ showNotice: false });
        }, 2000),
    );

  currentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${day}-${monthIndex + 1}-${year}`;
  };

  render() {
    const { products } = this.props;
    const { showNotice, productLikes } = this.state;
    return (
      <div>
        <div className="notice">{showNotice ? 'Product liked!' : 'Waiting for likes'}</div>
        <div className="status">State for {this.currentDate()}</div>
        {products.map((product) => (
          <ProductDetails
            key={product.id}
            product={product}
            onLike={this.onLikeProduct}
            likes={productLikes[product.id] || 0}
          />
        ))}
      </div>
    );
  }
}
