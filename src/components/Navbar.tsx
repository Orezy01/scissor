
import {motion} from "framer-motion"
import NavLogo from "../images/Logo.png"

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
              <a 
              href="#myurls" 
               
              
               
                
              className="mr-4 text-blue-500">
                My URLs
              </a>
              <a  
              
              href="#features" className="mx-4">
                Features
              </a>
              <a 
              
              href="#pricing" className="mx-4">
                Pricing
              </a>
              <a 
               
              href="#analytics" className="mx-4">
                Analytics
              </a>
              <a 
               
              href="#faq" className="ml-4">
                FAQs
              </a>
            </nav>

            <nav>
              <a href="/Login" className="text-blue-500 mr-2">
                Log in
              </a>

              {/* <motion.button className="mx-3 rounded-full border border-primaryBlue text-primaryBlue hover:bg-primaryBlue hover:text-white  text-sm font-medium py-2.5 px-6"
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}>
            Try for free
          </motion.button> */}
              <motion.button
                className="ml-2 mr-1 rounded-full border border-primaryBlue py-2.5 px-6  text-white bg-primaryBlue hover:bg-white hover:text-primaryBlue text-sm font-medium"
                whileHover={{
                  y: -2,
                }}
                whileTap={{ scale: 0.9 }}
              >
                Try for free
              </motion.button>
            </nav>
          </div>
        </header>
      // </Navbar>
  );
};

export default Navbar;
