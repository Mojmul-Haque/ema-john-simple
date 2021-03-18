import './App.css'
import Header from './Components/Header/Header'
import Shop from './Components/Shop/Shop'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import OrderReview from './Components/OrderReview/OrderReview'
import Inventory from './Components/Inventory/inventory'
import NoMatch from './Components/NoMatch/NoMatch'
import ProductDetials from './Components/ProductDetails/ProductDetials'
import Login from './Components/LogIn/Login'
import Shipment from './Shipment/Shipment'
import firebase from 'firebase/app'
import 'firebase/auth'
import { createContext, useState } from 'react'
import PrivateRoute from './Components/LogIn/PrivateRoute'

export const UserContext = createContext()

function App () {
  const [logedInUser, setLogedInUser] = useState({})

  return (
    <UserContext.Provider value={[logedInUser, setLogedInUser]}>
      <p>Email: {logedInUser.email}</p>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/review-order'>
            <OrderReview></OrderReview>
          </Route>
          <PrivateRoute path='/inventory'>
            <Inventory></Inventory>
          </PrivateRoute>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/shipment'>
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path='/product/:productKey'>
            <ProductDetials></ProductDetials>
          </Route>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default App
