import React from 'react'
import {Outlet, Link} from 'react-router-dom'
const Product = () => {
  return (
    <div>
      <Link to='/product/smart'>Smart Phone</Link>
      <h1>Product Page</h1>
      <Outlet />
    </div>
  )
}

export default Product