import checkCircle from "../images/check-circle.png";
import checkCircleTwo from "../images/check-circle2.png";
import magicWand from "../images/magic wand.png";


const Pricing = () => {
  return (
    <div
      id="pricing"
      className="w-full flex flex-col items-center self-center mt-[80px]"
    >
      {/* <div className="flex flex-col justify-center items-center mt-5 h-20">
        <div className=" bg-blue-600" />
        <div className="w-2 h-96 black-gradient" />
      </div> */}

      <h1 className=" items-center !text-5xl font-semibold">
        A <span className="text-blue-600">price perfect</span> for your needs.
      </h1>

      <p className="my-6 text-base text-center font-medium flex-col flex w-[556px]">
        From catering for your personal, business, event, socials needs, you can
        be rest assured we have you in mind in our pricing.
      </p>

      <div className="flex gap-4 mt-12">
        <div className="boxOne !inline-flex">
          <div className="desktop-wrapperOne">
            <div className="desktopOne">
              <div className="text-wrapperOne">Basic</div>
              <div className="frameOne">
                <div className="divOne">
                  <h1 className="h-1One">Free</h1>
                  <p className="pOne">Free plan for all users</p>
                </div>
                <div className="frame-2One">
                  <div className="frame-3One">
                    <img
                      className="check-circleOne"
                      alt="Check circle"
                      src={checkCircle}
                    />
                    <div className="text-wrapper-2One">
                      Unlimited URL Shortening
                    </div>
                  </div>
                  <div className="frame-4One">
                    <img
                      className="imgOne"
                      alt="Check circle"
                      src={checkCircle}
                    />
                    <div className="text-wrapper-3One">
                      Basic Link Analytics
                    </div>
                  </div>
                  <div className="frame-5One">
                    <img
                      className="check-circle-2One"
                      alt="Check circle"
                      src={checkCircle}
                    />
                    <div className="text-wrapper-4One">
                      Customizable Short Links
                    </div>
                  </div>
                  <div className="frame-6One">
                    <img
                      className="check-circle-3One"
                      alt="Check circle"
                      src={checkCircle}
                    />
                    <div className="text-wrapper-5">Standard Support</div>
                  </div>
                  <div className="frame-7One">
                    <img
                      className="check-circle-4One"
                      alt="Check circle"
                      src={checkCircle}
                    />
                    <div className="text-wrapper-6One">Ad-supported</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="boxOne !inline-flex">
          <div className="desktop-wrapperOne ">
            <div className="desktopOne middleCard !text-white">
              <div className="text-wrapperOne !text-white">Professional</div>
              <div className="frameOne">
                <div className="divOne">
                  <h1 className="h-1One !text-white">$15/month</h1>
                  <p className="pOne !text-white">
                    Ideal for business creators
                  </p>
                </div>
                <div className="frame-2One">
                  <div className="frame-3One">
                    <img
                      className="check-circleOne"
                      alt="Check circle"
                      src={checkCircleTwo}
                    />
                    <div className="text-wrapper-2One !text-white">
                      Enhanced Link Analytics
                    </div>
                  </div>
                  <div className="frame-4One">
                    <img
                      className="imgOne"
                      alt="Check circle"
                      src={checkCircleTwo}
                    />
                    <div className="text-wrapper-3One !text-white">
                      Custom Branded Domains
                    </div>
                  </div>
                  <div className="frame-5One">
                    <img
                      className="check-circle-2One"
                      alt="Check circle"
                      src={checkCircleTwo}
                    />
                    <div className="text-wrapper-4One !text-white">
                      Advanced Link Customization
                    </div>
                  </div>
                  <div className="frame-6One">
                    <img
                      className="check-circle-3One"
                      alt="Check circle"
                      src={checkCircleTwo}
                    />
                    <div className="text-wrapper-5 !text-white">
                      Priority Support
                    </div>
                  </div>
                  <div className="frame-7One">
                    <img
                      className="check-circle-4One"
                      alt="Check circle"
                      src={checkCircleTwo}
                    />
                    <div className="text-wrapper-6One !text-white">
                      Ad-free Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="boxOne !inline-flex">
          <div className="desktop-wrapperOne">
            <div className="desktopOne">
              <div className="text-wrapperOne">Teams</div>
              <div className="frameOne">
                <div className="divOne">
                  <h1 className="h-1One">$25/month</h1>
                  <p className="pOne">Share with up to 10 users</p>
                </div>
                <div className="frame-2One">
                  <div className="frame-3One">
                    <img
                      className="check-circleOne"
                      alt="Check circle"
                      src={checkCircle}
                    />
                    <div className="text-wrapper-2One">Team Collaboration</div>
                  </div>
                  <div className="frame-4One">
                    <img
                      className="imgOne"
                      alt="Check circle"
                      src={checkCircle}
                    />
                    <div className="text-wrapper-3One">
                      User Roles and Permissions
                    </div>
                  </div>
                  <div className="frame-5One">
                    <img
                      className="check-circle-2One"
                      alt="Check circle"
                      src={checkCircle}
                    />
                    <div className="text-wrapper-4One">Enhanced Security</div>
                  </div>
                  <div className="frame-6One">
                    <img
                      className="check-circle-3One"
                      alt="Check circle"
                      src={checkCircle}
                    />
                    <div className="text-wrapper-5">API Access</div>
                  </div>
                  <div className="frame-7One">
                    <img
                      className="check-circle-4One"
                      alt="Check circle"
                      src={checkCircle}
                    />
                    <div className="text-wrapper-6One">
                      Dedicated Account Manager
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-12">
        <button className="border border-primaryBlue rounded-full py-2.5 px-8  text-primaryBlue">
          Get Custom Pricing
        </button>
        <button className="bg-primaryBlue text-white border rounded-full py-2.5 px-8 ">
          Select Pricing
        </button>
      </div>

      <div className="w-[1440px] h-[523px] flex justify-center items-center A-section mt-24">
        <div className="inline-flex flex-col p-[42px] justify-center items-center gap-6 rounded-xl bg-white ">
          <input
            type="text"
            placeholder="Paste URL here..."
            className=" flex flex-col justify-center items-start gap-[10px] rounded-xl w-[392px] h-[55px] py-2 px-3 inputTxt placeholder:text-blue-300"
          />
          <div className="flex justify-center items-center gap-3">
            <select className="flex w-[202px] h-[48px] items-center gap-[10px] rounded-xl inputTxt py-2 px-3 text-blue-300">
              <option value="Demo Domain">Choose Domain</option>
            </select>
            <input
              type=""
              placeholder="Type Alias here"
              className="flex w-[178px] h-[48px] flex-col justify-center items-start gap-[10px] inputTxt rounded-xl py-2 px-3 placeholder:text-blue-300"
            />
          </div>

          <button className="flex w-[392px] py-3 px-6 justify-center items-center gap-[10px] btnTrim">
            Trim URL
            <img className="magicWand" src={magicWand} alt="magic wand" />
          </button>
          <p className="flex flex-col justify-center shrink-0 w-[373px] text-sm termsColor">
            By clicking TrimURL, I agree to the{" "}
            <span className=" font-semibold">
              Terms of Service, Privacy Policy
            </span>{" "}
            and Use of Cookies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
