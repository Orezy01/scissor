// import { Link } from "react-scroll";
import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../Auth/Firebase';
import { NavLink, useNavigate } from 'react-router-dom'
// import Google from "../images/google.png"
import "../form.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const onLogin = (e : any) => {

    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast('Logged in successfully')
        navigate("../Pages/MyUrls")
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
   
}

  const forms = document.querySelector('.forms')!;
   const passWordShowHide = document.querySelectorAll('.eye-icon');
   const links = document.querySelectorAll('.linked') ; 

   passWordShowHide.forEach(eyeIcon =>   {
    eyeIcon.addEventListener('click', () => {
       alert('hh')
      let pwFields = eyeIcon?.parentElement?.parentElement?.querySelectorAll('.password');
      pwFields?.forEach((password : any) => {
        if(password?.type === 'password') {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          password?.type === "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        password?.type === "password";
          eyeIcon?.classList?.replace("bx-show", "bx-hide");
      })
    })
   })

   links.forEach(link => {
    link.addEventListener('click', (e: any) => {
      e.preventDefault();
      forms.classList.toggle('show-signup')
    })
   })


  return (
    <section className="containers forms m-20" id='Login'>
            <div className="form login">
              <div className="form-content">
                <header className="header">Login</header>

                <form action="#">
                  <div className="field input-field">
                    <input 
                    type="email" 
                    placeholder="Email" 
                    className="input"
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                     />
                    </div>

                    <div className="field input-field">
                    <input 
                    type="password" 
                    placeholder="Password" 
                    required
                    className="password"
                    onChange={(e)=>setPassword(e.target.value)}
                     />
                    <i className='bx bx-hide eye-icon'></i>
                  </div>

                  <div className="form-link">
                    <a href="#" className='forgot-pass'>Forgot Password?</a>
                  </div>

                  <div className="field button-field">
                    <button onClick={onLogin}  >Login
                    <ToastContainer />
                    </button>
                  </div>

                  <div className="form-link">
                    <span>Already have an account? <NavLink to="/signup"
                    
                     className='link signup-link'>Signup</NavLink>
                    </span>
                  </div>

                  {/* <div className="line "></div> */}

                  {/* <div className='media-options'>
                    <a href="/signup" className="field google">
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

export default Login
// function querySelector(arg0: string): Iterable<unknown> | ArrayLike<unknown> {
//   throw new Error('Function not implemented.');
// }

