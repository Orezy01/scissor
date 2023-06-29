import { useState } from "react";
import magicWand from "../images/magic wand.png";
// import {
//   Ripple,
//   initTE,
// } from "tw-elements";

// initTE({ Ripple });

type Props = {
  setInputValue: (value: string) => void;
};

const InputShortener = ({ setInputValue }: Props) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };
  return (
    <div id="urlshort">
      <div className="w-[1440px] h-[523px] flex justify-center items-center A-section mt-24">
        <div className="inline-flex flex-col p-[42px] justify-center items-center gap-6 rounded-xl bg-white ">
          <input
            type="text"
            placeholder="Paste URL here..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
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

          <button
            type="button"
            onClick={handleClick}
            className="flex w-[392px] py-3 px-6 justify-center items-center gap-[10px] btnTrim"
          >
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

export default InputShortener;
