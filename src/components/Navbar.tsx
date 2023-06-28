
import {motion} from "framer-motion"
import NavLogo from "../images/Logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="glass w-full  py-2 font-medium flex items-center justify-between bg-gradient-to-r from-blue-50 to-white fixed backdrop:blur z-10 ">
          <div className="w-full flex justify-around items-center">
            <nav>
              <a href="#myurls">
              <img src={NavLogo} alt="logo" />
              </a>
              
            </nav>

            <nav>
              <Link 
              to="myurls" 
              spy={true}  
              smooth={true}
              
              className="mr-4 text-blue-500 cursor-pointer">
                My URLs
              </Link>
              <Link
              spy={true}  
              smooth={true}
              to="features" className="mx-4 cursor-pointer">
                Features
              </Link>
              <Link 
              
              to="pricing"
              spy={true}  
              smooth={true}
               className="mx-4 cursor-pointer">
                Pricing
              </Link>
              <a 
               
              href="#analytics" className="mx-4 cursor-pointer">
                Analytics
              </a>
              <Link
               
              to="faq"
              spy={true}  
              smooth={true}
              offset={50}
               className="ml-4 cursor-pointer">
                FAQs
              </Link>
            </nav>

            <nav>
              <Link 
              to="Login" 
              spy={true}  
              smooth={true}
              className="text-blue-500 mr-2 cursor-pointer">
                Log in
              </Link>

              <Link
              to="SignUp" 
              spy={true}  
              smooth={true}
                className="ml-2 mr-1 rounded-full border border-primaryBlue py-2.5 px-6  text-white bg-primaryBlue hover:bg-white hover:text-primaryBlue text-sm font-medium cursor-pointer"
                
              >
                Signup
              </Link>
            </nav>
          </div>
        </header>
      // </Navbar>
  );
};

export default Navbar;
