import React, { useState } from "react";
import InputShortener from "./InputShortener";
import UrlShortenResult from "./UrlShortenResult";



type Props = {};

const UrlShortener = (props: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <div className="">
      <InputShortener setInputValue={setInputValue} />
      <UrlShortenResult inputValue={inputValue} />
    </div>
  );
};

export default UrlShortener;