import './App.css'
import Header from './Components/Header/Header'
import Shop from './Components/Shop/Shop'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import OrderReview from './Components/OrderReview/OrderReview'
import Inventory from './Components/Inventory/inventory'
import NoMatch from './Components/NoMatch/NoMatch'
import ProductDetials from './Components/ProductDetails/ProductDetials'

function App () {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/review-order'>
            <OrderReview></OrderReview>
          </Route>
          <Route path='/inventory'>
            <Inventory></Inventory>
          </Route>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/product/:productKey'>
            <ProductDetials></ProductDetials>
          </Route>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
