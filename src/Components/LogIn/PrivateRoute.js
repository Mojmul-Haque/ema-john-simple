import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { UserContext } from '../../App';
import { useContext } from 'react'

const PrivateRoute = ({children, ...rest}) => {
    const [logedInUser, setLogedInUser] = useContext(UserContext)
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
        logedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )
        }
      />
    </div>
  )
}

export default PrivateRoute

// email: demo1@gmail.com; pass: Demo1234;
