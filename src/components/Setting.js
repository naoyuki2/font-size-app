import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInitialTime } from "../redux/initialTimeSlice";
import { Link } from "react-router-dom";

const Setting = () => {
  const initialTime = useSelector((state) => state.initialTime.value);
  const dispatch = useDispatch();
  const [changeTime, setChangeTime] = useState(initialTime);

  return (
    <>
      <Stack spacing={5}>
        <InputGroup size="lg">
          <InputLeftAddon children="制限時間" />
          <Input
            size="lg"
            type="number"
            value={changeTime}
            onChange={(e) => setChangeTime(e.target.value)}
          />
          <InputRightAddon children="秒" />
        </InputGroup>
        <Link to="/">
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => dispatch(setInitialTime(Number(changeTime)))}
          >
            設定完了
          </Button>
        </Link>
      </Stack>
    </>
  );
};

export default Setting;
