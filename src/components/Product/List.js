import React, { Component } from 'react'

import ProductDetails from './Details'

export default class ProductList extends Component {
  state = {
    productLikes: {}
  }

  onLikeProduct = (product) =>
    this.setState((state) =>
      ({ productLikes: { ...state.productLikes, [product.id]: (state.productLikes[product.id] || 0) + 1 } }))

  render() {
    const { products } = this.props
    const { productLikes } = this.state
    return (
      <div>
        {products.map(product =>
          <ProductDetails
           key={product.id}
           product={product}
           onLike={this.onLikeProduct}
           likes={productLikes[product.id] || 0}
          />
        )}
      </div>
    )
  }
}
