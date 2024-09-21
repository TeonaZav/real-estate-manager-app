import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import { chakraTheme } from "./../utils/theme.js";
import { Link, useParams } from "react-router-dom";
import { useGetEstate } from "../hooks/useGetEstate";
import { useGetListing } from "../hooks/useGetListing";

import { Carousel, EstateDetail } from "../components";
import { Heading } from "../components/UI/Shared.jsx";
import { IconPrev } from "../assets/index.js";
const Details = () => {
  const { id } = useParams();
  console.log(id);
  const { isLoading, error, estate } = useGetEstate(id);
  const { listing } = useGetListing();

  console.log(estate);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const relatedEstates = listing.filter(
    (item) => item.city.region_id === estate.city.region_id
  );

  return (
    <ChakraProvider theme={chakraTheme}>
      <Link to="/">
        <IconPrev />
      </Link>
      <EstateDetail estate={estate} />
      <Heading>ბინები მსგავს ლოკაციაზე</Heading>
      <Carousel data={relatedEstates} />
    </ChakraProvider>
  );
};

export default Details;
