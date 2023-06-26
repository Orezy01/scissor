import React from 'react'

const Login = () => {
  return (
    <section className="container forms">
            <div className="form login">
                <div className="form-content">
                    <header>Login</header>

                    <form action="#">
                        <div className="field input-field">
                            <input type="email" className="input" placeholder="Email" />
                        </div>

                        <div className="field input-field">
                            <input type="password" className="input" placeholder="Password" />
                        </div>

                        <div className='form-link'>
                          <a href="#" className='forgot-pass'>Forgot Password?</a>
                        </div>

                        <div className="field button-field">
                            <button>Login</button>
                        </div>

                        <div className='form-link'>
                          <span>Already have an account?
                            <a href="#" className='signup-link'>Signup</a>
                          </span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
  )
}

export default Login
