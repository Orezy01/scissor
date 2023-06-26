import React from "react";
import FooterLogo from "../images/FtLogo.png"
import InstaIcon from "../images/svg.feather.png"
import TweetIcon from "../images/i.fi-social-twitter.png"
import LinkedIcon from "../images/i.fi-social-linkedin.png"
import FbIcon from "../images/i.fi-social-facebook.png"

const Footer = () => {
  return (
    <div className=" bg-transparent flex flex-row justify-center w-full">
      <div className=" border-0 h-400px w-[1440px]">
        <div className="footersec flex h-[550px] w-[1440px] rectangleFour justify-center items-center gap-4">
            <div className="inline-flex flex-col p-[80px] items-start gap-[22px]">
                    <div className="">
                        <img src={FooterLogo} alt="FooterLogo" />
                    </div>

                    <div className="flex pl-5">
                    <img src={TweetIcon} alt="TweetIcon" />
                    <img src={InstaIcon} alt="InstaIcon" />
                    <img src={LinkedIcon} alt="LinkedIcon" />
                    <img src={FbIcon} alt="FbIcon" />
                    </div>
                
                </div>

                <div className="flex">

                <div className="inline-flex flex-start gap-[24px]">
                    <div className=" text-lg">
                        <h3 className=" font-bold">Resources</h3>
                        <p>Blog</p>
                        <p>Resource Library</p>
                        <p>Developers</p>
                        <p>App Connectors</p>
                        <p>Support</p>
                        <p>Trust Center</p>
                        <p>Browser Extension</p>
                        <p>Mobile App</p>
                    </div>
                    <div className="text-lg">
                        <h3 className=" font-bold">Features</h3>
                        <p>Branded Links</p>
                        <p>Mobile Links</p>
                        <p>Campaign</p>
                        <p>Management &</p>
                        <p>Analytics</p>
                        <p>QR Code generation</p>
                    </div>
                    <div className="text-lg">
                        <h3 className=" font-bold">Legal</h3>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                        <p>Terms of Service</p>
                        <p>Acceptable Use Policy</p>
                        <p>Code of Conduct</p>
                    </div>
                    <div className="text-lg">
                        <h3 className=" font-bold">Company</h3>
                        <p>About Scissor</p>
                        <p>Careers</p>
                        <p>Partners</p>
                        <p>Press</p>
                        <p>Contact</p>
                        <p>Reviews</p>
                    </div>
                </div>


                <div className="inline-flex flex-start gap-[24px]">
                    <div className="text-lg">
                        <h3 className=" font-bold">Why Scissor?</h3>
                        <p>Scissor 101</p>
                        <p>Integrations & API</p>
                        <p>Pricing</p>
                    </div>
                    <div className="text-lg">
                        <h3 className=" font-bold">Solutions</h3>
                        <p>Social Media</p>
                        <p>Digital Marketing</p>
                        <p>Customer Service</p>
                        <p>For Developers</p>
                    </div>
                    <div className="text-lg">
                        <h3 className=" font-bold">Products</h3>
                        <p>Link Management</p>
                        <p>QR Codes</p>
                        <p>Link-in-bio</p>
                    </div>
                    <div className="text-lg">
                        <h3 className=" font-bold">Company</h3>
                        <p>About Scissor</p>
                        <p>Careers</p>
                        <p>Partners</p>
                        <p>Press</p>
                        <p>Contact</p>
                        <p>Reviews</p>
                    </div>
                </div>
                </div>
        </div>
        <div className="flex justify-items-end items-end">
                <div>Term Of Service | Security | ⓒ Scissor 2023</div>
                
        </div>
      </div>
    </div>
  );
};

export default Footer;
