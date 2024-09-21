import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ChakraProvider,
} from "@chakra-ui/react";
import { chakraTheme } from "./../../../utils/theme";

const ModalComponent = ({
  isOpen,
  onClose,
  children,
  radius = "10px",
  maxW = "1009px",
  hasCloseButton = false,
}) => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Modal
        closeOnOverlayClick={true}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent maxW={maxW} borderRadius={radius}>
          {hasCloseButton && (
            <ModalCloseButton
              _focus={{ boxShadow: "none" }}
              _hover={{ bg: "transparent" }}
            />
          )}
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};
export default ModalComponent;
