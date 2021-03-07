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
        <a href='/shop'>Shop</a>
        <a href='/review-order'>Order Review</a>
        <a href='/inventory'>Manage Inventory</a>
      </nav>
    </div>
  )
}

export default Header
