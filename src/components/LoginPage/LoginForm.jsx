
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import ErrorBar from 'components/ErrorComponents/ErrorBar';
import loadingGif from "assets/loading.gif"
import store from 'store/store';
import fetchAuthData from 'api/tokenRetriever';
import "./LoginForm.css"


function LoginForm() {

  const [loginFormData, setLoginFormData] = useState({
    "username": "",
    "password": "",
  })
  const loading = useSelector(state => state.auth.loading)
  const errorMessage = useSelector(state => state.auth.errorMessage)
  const navigate = useNavigate()


  async function handleLogInClick(event) {
    event.preventDefault()    
    let username = loginFormData["username"];
    let password = loginFormData["password"];
    try {
      await store.dispatch(fetchAuthData({"username": username, "password": password})).unwrap()
      return navigate("/")
    } catch (err) {
      console.error(err)
    }
  }

  return <div className="login-form">
    {errorMessage !== null && <ErrorBar errorString={errorMessage}></ErrorBar>}
    {loading && <img className="loading-gif" src={loadingGif} alt='Chargement' />}
    <form>
      <div className="login-form-row">
        {/* <UsernameRow username={loginFormData["username"]} setUsername={a => setLoginFormData({...loginFormData, "username": a})}></UsernameRow> */}
        <label htmlFor="username"> Username </label>
        <input type="text" id="username" value={loginFormData["username"]} required onInput={
          e => setLoginFormData({...loginFormData, "username": e.target.value})}
          />
      </div>
      <div className="login-form-row">
        <label htmlFor="password"> Password </label>
        <input type="text" id="password" value={loginFormData["password"]} required onInput={
          e => setLoginFormData({...loginFormData, "password": e.target.value})} 
          />
      </div>
      <input type="submit" value="Log in" onClick={handleLogInClick}/>
    </form>


  </div>
}

export default LoginForm;
