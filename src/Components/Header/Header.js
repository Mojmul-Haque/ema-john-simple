import React from 'react'
import logo from '../../images/logo.png'
import './Header.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Shop from '../Shop/Shop'
import OrderReview from '../OrderReview/OrderReview'
import Inventory from '../Inventory/inventory'
const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='' />
      <nav>
        <Link to='/shop'>Shop</Link>
        <Link to='/review-order'>Order Review</Link>
        <Link to='/inventory'>Manage Inventory</Link>
      </nav>
    </div>
  )
}

export default Header
