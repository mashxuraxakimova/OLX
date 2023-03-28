import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'


function Login() {
  document.title = "Ro'yhatdan o'tish"

  return (
    <>
    <div className='inp'>
    <h2>Login</h2>
    <input type="text" /><br /><br />
    <input type="text" /><br /><br />
    <input type="text" /><br /><br />
    <input type="text" /><br /><br />
    <div className="dum">
    <button>Submit</button>
    <button><Link to={'/'}> Home </Link></button>
    </div>

    </div>
    </>
  )
}

export default Login