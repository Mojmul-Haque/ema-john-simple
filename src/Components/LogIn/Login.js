import firebase from 'firebase/app'
import 'firebase/auth'
import { useState } from 'react'
// import LogOut from './Components/LogOut/LogOut'
import firebaseConfig from './firebaseAuth.config'
import { useContext } from 'react'
import { UserContext } from '../../App'
import { useHistory, useLocation } from 'react-router-dom'
// import "firebase/firestore";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

function Login () {
  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState({
    isSingdIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    errorMsg: '',
    success: false
  })
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  const fbProvider = new firebase.auth.FacebookAuthProvider()

  const [logedInUser, setLogedInUser] = useContext(UserContext)
  const history = useHistory()
  const location = useLocation()

  let { from } = location.state || { from: { pathname: '/' } }

  const handleSingIn = providerName => {
    firebase
      .auth()
      .signInWithPopup(providerName)
      .then(res => {
        console.log(res)
        const { displayName, email, photoURL } = res.user
        const SignIndUser = {
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(SignIndUser)
      })
      .catch(error => {
        const errorCode = error.code
        const errorMsg = error.message
        const errorEmail = error.email
        console.log(errorCode, errorMsg, errorEmail)
      })
  }

  // user logOut
  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(res => {
        const isLogOut = {
          isSignOut: true
        }
        setUser(isLogOut)
      })
      .catch(error => console.log(error))
  }

  console.log(user)

  // user sign in or sing up
  const handleSubmit = e => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user }
          newUserInfo.errorMsg = ''
          newUserInfo.success = true
          setUser(newUserInfo)
          updateUser(user.name)
        })
        .catch(error => {
          var errorCode = error.code
          var errorMessage = error.message
          const newUserInfo = { ...user }
          newUserInfo.errorMsg = error.message
          newUserInfo.success = false
          setUser(newUserInfo)
          console.log('eroro code ', errorCode, errorMessage)
        })
    }
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user }
          newUserInfo.errorMsg = ''
          newUserInfo.success = true
          setUser(newUserInfo)
          setLogedInUser(newUserInfo)
          const getUser = res.user
          setLogedInUser(user)
          history.replace(from)

          console.log(getUser, 'login successful')
        })
        .catch(error => {
          var errorCode = error.code
          var errorMessage = error.message
          const newUserInfo = { ...user }
          newUserInfo.success = false
          setUser(newUserInfo)

          console.log(errorCode, errorMessage)
        })
    }
    e.preventDefault()
    console.log('submit data')
  }
  // input and password handle blur area;
  const handleBlur = e => {
    let isFormValied = true
    if (e.target.name === 'email') {
      isFormValied = /\S+@\S+\.\S+/.test(e.target.value)
    }
    if (e.target.name === 'password') {
      const passwordLength = e.target.value.length > 6
      const isNumberRequried = /\d{1}/.test(e.target.value)
      isFormValied = passwordLength && isNumberRequried
    }
    if (isFormValied) {
      const newUserInfo = { ...user }
      newUserInfo[e.target.name] = e.target.value
      setUser(newUserInfo)
    }
  }
  console.log(newUser)

  const updateUser = name => {
    var user = firebase.auth().currentUser

    user
      .updateProfile({
        displayName: name
      })
      .then(res => {
        console.log(res, 'userName successfully posted')
      })
      .catch(error => {
        console.log(error, 'user name dont posted')
      })
  }

  return (
    <div style={{ textAlign: 'center' }}>
      {user.isSignIn ? (
        <button onClick={handleLogOut}>Log out</button>
      ) : (
        <button onClick={() => handleSingIn(googleProvider)}>Sign in</button>
      )}
      {user.isSignIn ? (
        <div>
          {' '}
          <h3>Welcome: {user.name}</h3> <h3>Your Email: {user.email}</h3>{' '}
          <img src={user.photo} alt={user.photo} />
        </div>
      ) : null}
      <button
        onClick={() => handleSingIn(fbProvider)}
        style={{ marginLeft: '10px' }}
      >
        SignIn with facebook
      </button>
      <div>
        <h3>Your Name:{user.name}</h3>
        <h3>Your Email:{user.email}</h3>
        <h3>Your Password: {user.password}</h3>
        <input
          type='checkbox'
          name='checkSign'
          onChange={() => setNewUser(!newUser)}
          id='checkSign'
        />
        <label htmlFor='checkSign'>New User </label>
        <form onSubmit={handleSubmit}>
          {newUser && (
            <input
              type='text'
              onBlur={handleBlur}
              name='name'
              placeholder='Your Name'
              required
            />
          )}
          <br />
          <input type='text' onBlur={handleBlur} name='email' required />
          <br />
          <input type='password' onBlur={handleBlur} name='password' required />
          <br />
          <input type='submit' value='Submit' />
        </form>
        <div>
          <p style={{ color: 'red' }}>{user.errorMsg}</p>
          {user.success && (
            <p style={{ color: 'green' }}>
              Yeeeeh!!! User Account Created Successfully
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
