import { Progress } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import React from "react";

const TimeBar = ({ time }) => {
  const initialTime = useSelector((state) => state.initialTime.value);
  return (
    <Progress
      hasStripe
      colorScheme="green"
      height="32px"
      value={time / initialTime / 10}
    />
  );
};

export default TimeBar;
