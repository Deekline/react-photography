import React from "react"



export const AuthPage = () => {



  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Authentification</h1>
        <div className="card transparent darken-1">
          <div className="card-content white-text">

            <span className="card-title">Authentification</span>

            <div>

              <div className="input-field">
                <input
                  placeholder="Email"
                  id="email"
                  type="email"
                  name="email"
                  className="yellow-input"
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Password"
                  id="password"
                  type="password"
                  name="password"
                  className="yellow-input" />
                <label htmlFor="password">Password</label>
              </div>

            </div>
            <div className="card-action">
              <button
                className='btn yellow darken-4'
              >
                Enter
              </button>
              <button
                className="btn grey lighten-1 black-text"
              >
                Registration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}