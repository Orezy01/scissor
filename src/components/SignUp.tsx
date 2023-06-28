import Google from "../images/google.png"
import "../form.css"
import React, {useState} from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../Auth/Firebase';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {

  const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async (e : any) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user.email;
            console.log(user);
            toast('signed up successfully')
            navigate("/Login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }


    return(
        <section className="containers forms" id="SignUp">
            <div className="form signup">
              <div className="form-content">
                <header className="header">Signup</header>

                <form action="#">
                  <div className="field input-field">
                    <input 
                    type="email"
                     placeholder="Email"
                      value={email} 
                      className="input" 
                      onChange={(e) => setEmail(e.target.value)}  
                      required 
                      />
                    </div>


                  <div className="field input-field">
                    <input 
                    type="password" 
                    placeholder="Password" 
                    className="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                     />
                    <i className='bx bx-hide eye-icon'></i>
                  </div>
   

                  <div className="field button-field">
                    <button onClick={onSubmit} >Signup</button>
                    <ToastContainer />
                  </div>

                  <div className="form-link">
                    <span>Already have an account? <NavLink to="/login" className=' link signup-link' >Login</NavLink>
                    </span>
                  </div>

                  {/* <div className="line "></div> */}
                  {/* <div className='media-options'>
                    <a href="#" className="field google">
                      <img src={Google} alt='Google' className='google-img' />
                      <span>Login with Google</span>
                    </a>
                  </div> */}
                 
                </form>
              </div>

              
            </div>
        </section>
    )
}

export default SignUp;