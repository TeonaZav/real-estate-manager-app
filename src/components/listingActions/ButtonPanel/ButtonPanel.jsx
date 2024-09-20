import { Link } from "react-router-dom";
import { useModal } from "../../../context/ModalContext";
import { Button } from "./../../UI/Shared";
import { AgentForm } from "../../index";
import { PlusIcon } from "../../../assets";
import { SButtonPanelWrapper } from "./ButtonPanel.styled";

const ButtonPanel = () => {
  const { openModal, closeModal } = useModal();

  const handleOpenModal = () => {
    openModal(<AgentForm onClose={closeModal} />);
  };

  return (
    <SButtonPanelWrapper>
      <Button as={Link} to="add-listing" $variant="solid" $colorType="primary">
        <PlusIcon />
        ლისტინგის დამატება
      </Button>
      <Button
        $variant="outline"
        $colorType="primary"
        type="button"
        onClick={handleOpenModal}
      >
        <PlusIcon /> აგენტის დამატება
      </Button>
    </SButtonPanelWrapper>
  );
};

export default ButtonPanel;
