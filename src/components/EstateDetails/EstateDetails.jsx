import { Box, Flex, Text } from "@chakra-ui/react";
import { useDeleteEstate } from "./../../hooks/useDeleteEstate";
import AgentDetails from "../AgentDetails/AgentDetails";
import { useModal } from "../../context/ModalContext";
import {
  SInfoList,
  SInfoListItem,
  SDescription,
  SDeleteButton,
  SBanner,
  SPrice,
  SWatningQuestion,
} from "./EstateDetails.styled";
import { LocationIcon, AreaIcon, BedIcon, PostalIndexIcon } from "../../assets";
import { formatPrice } from "../../utils/helpers";
import { Button } from "../UI/Shared";
import { formatDate } from "../../utils/helpers";

const EstateDetail = ({ estate }) => {
  const { mutate: deleteEstate, isLoading: isDeleting } = useDeleteEstate();
  const { openModal, closeModal } = useModal();

  const handleDelete = () => {
    deleteEstate(estate.id, {
      onSuccess: () => {
        console.log("Estate successfully deleted!");
        closeModal();
      },
      onError: (error) => {
        console.error("Error deleting estate:", error);
      },
    });
  };

  const triggerDeleteModal = () => {
    openModal(
      <Flex direction="column" alignItems="center" p="4">
        <SWatningQuestion>გსურთ წაშალოთ ლისტინგი?</SWatningQuestion>
        <Flex gap="2">
          <Button onClick={handleDelete} isLoading={isDeleting} $small>
            დადასტურება
          </Button>

          <Button onClick={closeModal} $variant="outline" $small>
            გაუქმება
          </Button>
        </Flex>
      </Flex>
    );
  };

  return (
    <Flex margin="0 auto" gap="6.8rem" mb={"5.3rem"} mt="2.4rem">
      <SBanner>
        <img src={estate.image} alt="Estate Image" />
        <figcaption>
          {formatDate(estate.created_at)}გამოქვეყნების თარიღი
        </figcaption>
      </SBanner>

      <Box basis={"1"}>
        <SPrice>{formatPrice(estate.price)}</SPrice>
        <SInfoList>
          <SInfoListItem>
            <LocationIcon /> {estate.city.name}, {estate.address}
          </SInfoListItem>
          <SInfoListItem>
            <AreaIcon /> {estate.area} მ²
          </SInfoListItem>
          <SInfoListItem>
            <BedIcon />
            საძინებელი {estate.bedrooms}
          </SInfoListItem>
          <SInfoListItem>
            <PostalIndexIcon />
            საფოსტო ინდექსი{estate.zip_code}
          </SInfoListItem>
        </SInfoList>
        <SDescription>{estate.description}</SDescription>

        <AgentDetails agent={estate.agent} />

        <SDeleteButton onClick={triggerDeleteModal}>
          ლისტინგის წაშლა
        </SDeleteButton>
      </Box>
    </Flex>
  );
};

export default EstateDetail;
