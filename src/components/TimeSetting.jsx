import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setInitialTime } from "../redux/initialTimeSlice";

const Setting = () => {
  const initialTime = useSelector((state) => state.initialTime.value);
  const dispatch = useDispatch();

  return (
    <>
      <Stack spacing={5}>
        <InputGroup size="lg">
          <InputLeftAddon children="制限時間" />
          <Input
            size="lg"
            type="number"
            value={initialTime}
            onChange={(e) => dispatch(setInitialTime(Number(e.target.value)))}
          />
          <InputRightAddon children="秒" />
        </InputGroup>
      </Stack>
    </>
  );
};

export default Setting;
