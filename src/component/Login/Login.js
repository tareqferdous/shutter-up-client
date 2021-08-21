import { useContext, useRef, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { userContext } from "../../App";
import './Login.css';
import { createUserWithEmailAndPassword, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from "./LoginManager";

initializeLoginFramework();

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [error, setError] = useState("")
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [user, setUser] = useState({
    isLoggedIn: false,
    name: '',
    email: '',
    password: '',
    success: false,
    error: '',
    photo: ''
  })

  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () =>{
      handleGoogleSignIn()
      .then((res) => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
      })
  }

  const signOut = () =>{
      handleSignOut()
      .then((res) =>{
        setUser(res);
        setLoggedInUser('');
      })
  }

  const btnStyle = {
    color: "white",
    backgroundColor: 'tomato',
    padding: '8px 30px',
    marginTop: '20px',
    marginLeft: '40px',
    borderRadius: '5px',
    border: '1px solid tomato',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer'
  }

  // Authentication using email and password 
 
  const handleBlur = (event) =>{
    let isFormValid = true;
    //email validation
    if(event.target.name === 'email'){
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
      console.log(isFormValid)
    }
    //password validation
    if(event.target.name === 'password' && event.target.name === 'passwordConfirm'){
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }
    if(isFormValid){
      const newUserInfo = {...user};
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }

  const handleSubmit = (e) =>{
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then((res) => {
        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Password do not matched')
          }
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
      })
    }
    e.preventDefault();
  }

  return (
    <div className="App login-background">  
      {
        user.isLoggedIn && <div>
          <p style={{color: 'green', fontSize: '20px', fontWeight: '500'}}>Welcome, {user.name}</p>
          <p style={{color: 'blue', fontSize: '16px', fontWeight: '500'}}> {user.email}</p>
          <img src={user.photo} alt="" />
        </div>      
      }

      {/* Email and Password Authentication */}
      
        <div class="login-box">
          {
            newUser ? <h2 style={{fontSize: '30px', marginLeft:'40px', color: 'deepskyblue'}}>Sign Up</h2> : <h2  style={{fontSize: '30px', color: 'deepskyblue', marginLeft:'40px'}}>Login</h2>
          }
          <form onSubmit={handleSubmit}>
            {
              newUser && <input 
                onBlur={handleBlur} name="name" placeholder="Enter your Name" type="text" required />
            
            }
            <br />
            <input className="login-form"  onBlur={handleBlur} name="email" placeholder="Enter your email" type="text" required /> <br />
            <input className="login-form"  onBlur={handleBlur} name="password" placeholder="Enter your password" ref={passwordRef} type="password" required /> <br />
            {
              newUser && <input className="login-form"  onBlur={handleBlur} name="passwordConfirm" ref={passwordConfirmRef} placeholder="Confirm your password" type="password" required />
            }
            <br />
            <input className="submit-btn" type="submit" value="Submit" /> 
            <input onChange={()=> setNewUser(!newUser)} type="checkbox" name="newUser" id="" />
            <label style={{color: 'darkblue', fontWeight: '500', fontSize: '16px'}}  htmlFor="newUser">New User</label> <br />
          </form>
          {
          user.isLoggedIn ? <button onClick={signOut} style={btnStyle}> Sign Out</button> :
          <button style={btnStyle} onClick={googleSignIn}> LOGIN WITH GOOGLE</button>
        }
        </div>

        
        {
          user.success ? <p style={{color: 'green', fontWeight:'500'}}>{newUser ? "New User Created" : "Login"} Successfully</p>:
          <p style={{color: 'red', fontWeight:'500'}}>{user.error}</p>
        }

       
        <p style={{color: 'red', fontWeight:'500'}}>{error}</p>
    </div>
  );
}

export default Login;
