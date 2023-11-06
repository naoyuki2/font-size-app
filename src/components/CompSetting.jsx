import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const CompSetting = () => {
  return (
    <Link to="/">
      <Button colorScheme="teal" size="lg">
        設定完了
      </Button>
    </Link>
  );
};

export default CompSetting;
