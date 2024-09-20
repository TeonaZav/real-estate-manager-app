import {
  SListCard,
  SPrice,
  SAddress,
  SInfoList,
  SInfoItem,
  STag,
} from "./ListCard.styled";
import { CardBody, Stack, Image } from "@chakra-ui/react";
import { LocationIcon, BedIcon, AreaIcon, PostalIndexIcon } from "../../assets";
import { formatPrice } from "../../utils/helpers";

const InfoItem = ({ icon: Icon, label }) => (
  <SInfoItem>
    <Icon /> {label}
  </SInfoItem>
);

const ListCard = ({
  image,
  price,
  city,
  bedrooms,
  area,
  zip_code,
  is_rental,
  address,
}) => {
  const listingType = is_rental ? "ქირავდება" : "იყიდება";

  return (
    <SListCard>
      <CardBody p={0}>
        <Image
          src={image}
          alt={`${listingType} უძრავი ქონება`}
          borderRadius="lg"
          h={307}
        />
        <STag>{listingType}</STag>
        <Stack py={22} px={25} spacing="0" width="100%">
          <SPrice>{formatPrice(price)}</SPrice>
          <SAddress>
            <LocationIcon />
            {city.name}, {address}
          </SAddress>
          <SInfoList>
            <InfoItem icon={BedIcon} label={bedrooms} />
            <InfoItem icon={AreaIcon} label={area} />
            <InfoItem icon={PostalIndexIcon} label={zip_code} />
          </SInfoList>
        </Stack>
      </CardBody>
    </SListCard>
  );
};

export default ListCard;
