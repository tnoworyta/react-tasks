import React from 'react'

import UIMenu from '../../components/UI/Menu'
import ProductList from '../../components/Product/List'

export default function ScreensProductList() {
  const products = [{ id: '1', name: 'Milk', price: 10.99 }, { id: '2', name: 'Bread', price: 9.99 }]
  return (
    <div>
      <UIMenu />
      Products
      <ProductList products={products} />
    </div>
  )
}
