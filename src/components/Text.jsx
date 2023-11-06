import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Text = () => {
  const randFontSize = useSelector((state) => state.fontSize.randFontSize);
  return (
    <div style={{ fontSize: `${randFontSize}px` }}>text : {randFontSize}</div>
  );
};

export default Text;
