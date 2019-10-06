import React from 'react'

import UIMenu from '../../components/UI/Menu'
import ProductForm from '../../components/Product/Form'

const ScreensProductNew = () => {
  return (
    <div>
      <UIMenu />
      New Productt
      <ProductForm product={ {name: ''} } />
    </div>
  )
}

export default ScreensProductNew
