import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../firebaseAuth.config'
// import LogOut from './Components/LogOut/LogOut'
// import firebaseConfig from './'
// import firbase
export const InitializeApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
}

export const handleGoogleSingIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(res => {
      console.log(res)
      const { displayName, email, photoURL } = res.user
      const SignIndUser = {
        isSignIn: true,
        name: displayName,
        email: email,
        photo: photoURL
      }
      return SignIndUser
    })
    .catch(error => {
      const errorCode = error.code
      const errorMsg = error.message
      const errorEmail = error.email
      console.log(errorCode, errorMsg, errorEmail)
    })
}

// fb sign in
export const handleFbSingIn = () => {
  const fbProvider = new firebase.auth.FacebookAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then(res => {
      console.log(res)
      const { displayName, email, photoURL } = res.user
      const SignIndUser = {
        isSignIn: true,
        name: displayName,
        email: email,
        photo: photoURL
      }
      return SignIndUser
    })
    .catch(error => {
      const errorCode = error.code
      const errorMsg = error.message
      const errorEmail = error.email
      console.log(errorCode, errorMsg, errorEmail)
    })
}

// user logOut
export const handleLogOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(res => {
      const isLogOut = {
        isSignOut: true
      }
      return isLogOut
    })
    .catch(error => console.log(error))
}

//   create user with email and password
// export const CreateUserWithEmailAndPassword = () => {
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(user.email, user.password)
//     .then(res => {
//       const newUserInfo = { ...user }
//       newUserInfo.errorMsg = ''
//       newUserInfo.success = true
//       setUser(newUserInfo)
//       updateUser(user.name)
//     })
//     .catch(error => {
//       var errorCode = error.code
//       var errorMessage = error.message
//       const newUserInfo = { ...user }
//       newUserInfo.errorMsg = error.message
//       newUserInfo.success = false
//       setUser(newUserInfo)
//       console.log('eroro code ', errorCode, errorMessage)
//     })
// }

// // sign in with email and password
// export const signInWithEmailAndPassword = () => {
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(user.email, user.password)
//     .then(res => {
//       const newUserInfo = { ...user }
//       newUserInfo.errorMsg = ''
//       newUserInfo.success = true
//       setUser(newUserInfo)
//       setLogedInUser(newUserInfo)
//       const getUser = res.user
//       setLogedInUser(user)
//       history.replace(from)

//       console.log(getUser, 'login successful')
//     })
//     .catch(error => {
//       var errorCode = error.code
//       var errorMessage = error.message
//       const newUserInfo = { ...user }
//       newUserInfo.success = false
//       setUser(newUserInfo)

//       console.log(errorCode, errorMessage)
//     })
// }

// const updateUser = name => {
//   var user = firebase.auth().currentUser

//   user
//     .updateProfile({
//       displayName: name
//     })
//     .then(res => {
//       console.log(res, 'userName successfully posted')
//     })
//     .catch(error => {
//       console.log(error, 'user name dont posted')
//     })
// }
