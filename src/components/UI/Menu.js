import React from 'react'
import { Link } from 'react-router-dom'

export default function UIMenu() {
  return (
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
  )
}
