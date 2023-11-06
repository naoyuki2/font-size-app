import React from "react";
import { useSelector } from "react-redux";

const Judge = () => {
  const randFontSize = useSelector((state) => state.fontSize.randFontSize);
  const inputFontSize = useSelector((state) => state.fontSize.inputFontSize);

  return <>{randFontSize === inputFontSize ? "true" : ""}</>;
};

export default Judge;
