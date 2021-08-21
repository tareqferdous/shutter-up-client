import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }else {
        firebase.app();
      }
}


export const handleGoogleSignIn = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then((result) => {
    const {displayName, photoUrl, email} = result.user; 

    const signedInUser = {
      isLoggedIn: true,
      name: displayName,
      email: email,
      photo: photoUrl,
      success: true
    }
    return(signedInUser);
  })
  .catch((error) => {
    console.log(error);
    console.log(error.message)
  })
  }

  export const handleSignOut = () =>{
    return firebase.auth().signOut().then((result) => {
      const signedOutUser = {
        isLoggedIn: false,
        name: '',
        email: '',
        photo: ''
      }
      return(signedOutUser)
    }).catch((error) => {
      console.log(error.message);
    });
  }


  export const createUserWithEmailAndPassword = (name, email, password) =>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      const newUserInfo = result.user;
      newUserInfo.success = true;
      newUserInfo.error = '';
      updateUserName(name)
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
  }

  export const signInWithEmailAndPassword = (email, password) =>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.success = true;
      newUserInfo.error = '';
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
  }

  const updateUserName = name =>{
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
    }).then(() => {
      console.log('user name updated successfully')
    }).catch((error) => {
      console.log(error.message)
    });  
  }
