import React, { useState } from "react";
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
    
    
    <div className="flex flex-col items-center box-border h-90 w-100 p-4  m8 " id="urlshort" data-testid="urlshort-1">
      <h1 className="">Shorten your Url</h1>
      <div>
        <input
          type="text "
          placeholder="Paste URL here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="mt-1 px-2 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        />
        <br />
        <button
        onClick={handleClick}
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className="inline-block rounded bg-sky px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
  Trim URL
</button>
      </div>
    </div>
  );
};

export default InputShortener;