import React, { useState } from "react";
import InputShortener from "../components/InputShortener";
import UrlShortenResult from "../components/UrlShortenResult";

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
