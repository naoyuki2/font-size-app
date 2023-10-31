import { Link } from "react-router-dom";
import Timer from "../components/Timer";
import Popup from "../components/Popup";
import { useDisclosure } from "@chakra-ui/react";

const GamePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Link to="/">Top</Link>
      <Timer onOpen={onOpen} />
      <Popup isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default GamePage;
