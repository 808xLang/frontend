import { useState, useEffect, createContext, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import useLocalStorage from './hooks/useLocalStorage'
import NAV from './nav/nav'
import JoblyApi from "./api/api";
import Routes from './routes/routes';
import UserContext from './users/userContext'
import { jwtDecode } from 'jwt-decode'
import Login from './users/login'



export const TOKEN_STORAGE_ID = "jobly-token";

const HomeDebug = () => {
  return <div>
      <Link to="/login">Login</Link>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aut! Perspiciatis, eveniet maiores commodi reiciendis voluptas incidunt cum illo architecto possimus repellat nemo tempora dolores atque, in eaque eos porro.</p>
    </div>
}

function App() {

  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);



  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      console.log({ token })
      if (token) {
        try {
          let { username } = jwtDecode(token);
          console.log({ username, token })
          // The token is put on the Api class and used to call the API.
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  /** Handles signup and set token. */

  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  /** Handles login. */

  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }



  return (


    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Router>
        <NAV logout={logout}/> 
        <Routes login={login} signup={signup}/> 
      </Router>
    </UserContext.Provider>



  )
}

export default App
