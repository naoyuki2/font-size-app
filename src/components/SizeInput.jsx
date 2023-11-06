import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setInputFontSize } from "../redux/fontSizeSlice";
import { useEffect, useRef } from "react";

const SizeInput = () => {
  const inputFontSize = useSelector((state) => state.fontSize.inputFontSize);
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <InputGroup size="lg">
        <InputLeftAddon children="Font Size" />
        <Input
          size="lg"
          type="text"
          ref={inputRef}
          value={inputFontSize}
          onChange={(e) => dispatch(setInputFontSize(Number(e.target.value)))}
        />
        <InputRightAddon children="px" />
      </InputGroup>
      <Button colorScheme="blue">確定</Button>
    </>
  );
};

export default SizeInput;
