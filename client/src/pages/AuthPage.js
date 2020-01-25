import React, { useState } from 'react';
import {useHttp} from '../hooks/http.hook';



export const AuthPage = () =>{
  const location = window.location

  const { request } = useHttp()
  const [form, setForm] = useState({
    email:'',
    password:''
  })

  const handleChange = (event) => {
    setForm ({...form, [event.target.name]: event.target.value})
}


 const registerHandler = async (e) => {
    e.preventDefault()
   try {
      const data = await request('/api/auth/register', 'POST', {...form})
      if(data) {
        location.pathname = '/admin'
      }

   } catch (e) {
      console.log(e.message)
   }

}


    return (
      <div className="row">
        <div className="col s6 offset-s3">
          <h1>Authentification</h1>
          <div className="card transparent darken-1">
            <div className="card-content white-text">

              <span className="card-title">Authentification</span>

              <form onSubmit={registerHandler}>

                <div className="input-field">
                  <input
                    placeholder="Email"
                    id="email"
                    type="email"
                    name="email"
                    className="yellow-input"
                    onChange={handleChange}
                  />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="input-field">
                  <input
                    placeholder="Password"
                    id="password"
                    type="password"
                    name="password"
                    className="yellow-input"
                  onChange={handleChange}/>
                  <label htmlFor="password">Password</label>
                </div>
                <button type='submit'>Login</button>
              </form>

              </div>
            </div>
          </div>
        </div>
    )



}