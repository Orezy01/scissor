import Plus from "../images/plus.png"
import Line from "../images/Vector 4.png"
import LineTwo from "../images/Line 70.png"
import Minus from "../images/minus.png"

const Faq = () => {
  return (
    <div id="faq" className=" mt-2">
       <div className="boxTwo">
      <div className="FA-qs-wrapperTwo">
        <div className="FA-qsTwo">
          <div className="overlap-groupTwo">
            <div className="frameTwo">
              <div className="divTwo">
                <img className="lineTwo" alt="Line" src={LineTwo} />
                <h1 className="text-wrapperTwo">FAQs</h1>
              </div>
              <div className="frame-2Two">
                <div className="frame-3Two">
                  <div className="frame-4Two">
                    <p className="pTwo">How does URL shortening work?</p>
                    <img className="minusTwo" alt="Minus" src={Minus} />
                  </div>
                  <p className="text-wrapper-2Two">
                    URL shortening works by taking a long URL and creating a shorter, condensed version that redirects
                    to the original URL. When a user clicks on the shortened link, they are redirected to the intended
                    destination.
                  </p>
                  <img className="vectorTwo" alt="Vector" src="vector-4.png" />
                </div>
                <div className="frame-5Two">
                  <div className="frame-6Two">
                    <p className="text-wrapper-3Two">
                      Is it necessary to create an account to use the URL shortening service?
                    </p>
                    <img className="plusTwo" alt="Plus" src={Plus} />
                  </div>
                  <img className="img" alt="Vector" src={Line} />
                </div>
                <div className="frame-7Two">
                  <div className="frame-8Two">
                    <p className="text-wrapper-4Two">Are the shortened links permanent? Will they expire?</p>
                    <img className="plus-2Two" alt="Plus" src={Plus} />
                  </div>
                  <img className="vector-2Two" alt="Vector" src={Line} />
                </div>
                <div className="frame-9Two">
                  <div className="frame-10Two">
                    <p className="text-wrapper-5Two">Are there any limitations on the number of URLs I can shorten?</p>
                    <img className="plus-3Two" alt="Plus" src={Plus} />
                  </div>
                  <img className="vector-3Two" alt="Vector" src={Line} />
                </div>
                <div className="frame-11Two">
                  <div className="frame-12Two">
                    <p className="text-wrapper-6Two">Can I customize the shortened URLs to reflect my brand or content?</p>
                    <img className="plus-4Two" alt="Plus" src={Plus} />
                  </div>
                  <img className="vector-4Two" alt="Vector" src={Line} />
                </div>
                <div className="frame-13Two">
                  <div className="frame-14Two">
                    <p className="text-wrapper-7Two">Can I track the performance of my shortened URLs?</p>
                    <img className="plus-5Two" alt="Plus" src={Plus} />
                  </div>
                  <img className="vector-5Two" alt="Vector" src={Line} />
                </div>
                <div className="frame-15Two">
                  <div className="frame-16Two">
                    <p className="text-wrapper-8Two">
                      How secure is the URL shortening service? Are the shortened links protected against spam or
                      malicious activity?
                    </p>
                    <img className="plus-6Two" alt="Plus" src={Plus} />
                  </div>
                  <img className="vector-6Two" alt="Vector" src={Line} />
                </div>
                <div className="frame-17Two">
                  <div className="frame-18Two">
                    <p className="text-wrapper-9Two">What is a QR code and what can it do?</p>
                    <img className="plus-7Two" alt="Plus" src={Plus} />
                  </div>
                  <img className="vector-7Two" alt="Vector" src={Line} />
                </div>
                <div className="frame-19Two">
                  <div className="frame-20Two">
                    <p className="text-wrapper-10Two">
                      Is there an API available for integrating the URL shortening service into my own applications or
                      websites?
                    </p>
                    <img className="plus-8Two" alt="Plus" src={Plus} />
                  </div>
                  <img className="vector-8Two" alt="Vector" src={Line} />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>

    
        
        <div className="boxThree">
      <div className="rectangle-wrapperThree">
        
        {/* <div className="rectangleThree justify-center items-center gap-4" >
          <div className="inline-flex flex-col items-center gap-[32px]">
          <h1 className="text-white text-5xl  font-semibold flex w-[806px] h-[57px] flex-col">Revolutionizing Link Optimization</h1>
        <button className=" flex w-[200px] h-[48px] items-center  bg-primaryBlue text-white border rounded-full py-[12px] px-[24px]">ljll</button>
          </div>
        
        </div> */}
        

      </div>
    </div>

    </div>
  )
}

export default Faq;
