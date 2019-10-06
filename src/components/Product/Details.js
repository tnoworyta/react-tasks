import React from 'react'

const ProductDetails = ({ product: { name, price }, onLike, product, likes }) => {
  return (
    <div>
      {name}, {price} USD
      <button onClick={() => onLike(product)}>Like</button>
      <span className="like-count">{likes} likes</span>
    </div>
  )
}

export default ProductDetails
