import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

const ModalComponent = ({
  isOpen,
  onClose,
  children,
  radius = "10px",
  maxW = "1009px",
  hasCloseButton = false,
}) => {
  return (
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
  );
};
export default ModalComponent;
