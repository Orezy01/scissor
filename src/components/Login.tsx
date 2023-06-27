import React from 'react'
import "boxicons"
const Login = () => {
  return (
    <section className="containers forms" id='Login'>
            <div className="form login">
                <div className="form-content">
                    <header>Login</header>

                    <form action="#">
                        <div className="field input-field">
                            <input type="email" className="input" placeholder="Email" />
                        </div>

                        <div className="field input-field">
                            <input type="password" className="input" placeholder="Password" />
                            
                            <i className='bx bx-hide eye-icon' />
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
                <div className='line'></div>
                
            </div>

            

            
              <div className='media-options'>
                <a href="#" className='field facebook'>
                  <i className='bx bxl-facebook facebook-icon'>
                    <span>Login With Facebook</span>
                  </i>
                </a>
              </div>

              <div className='media-options'>
                <a href="#" className='field google'>
                  <img src='images/google.png' alt='google' className='google-img' />
                    <span>Login With Google</span>
                  
                </a>
              </div>
            
        </section>
  )
}

export default Login
