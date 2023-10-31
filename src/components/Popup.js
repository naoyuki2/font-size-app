import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Modal,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Popup = ({ isOpen, onClose }) => {
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Finish!</ModalHeader>
          <ModalBody>aaa</ModalBody>
          <ModalFooter>
            <Link to="/game">
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => {
                  onClose();
                }}
              >
                もう一回
              </Button>
            </Link>
            <Button variant="ghost" onClick={onClose}>
              <Link to="/">戻る</Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Popup;
