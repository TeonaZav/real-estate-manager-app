import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import { chakraTheme } from "../../utils/theme";
import { useGetListing } from "../../hooks/useGetListing";
import { ListCard } from "./../index";

const RealEstateList = () => {
  const { listing } = useGetListing();
  console.log(listing);
  return (
    <ChakraProvider theme={chakraTheme}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
          "2xl": "repeat(4, 1fr)",
        }}
        height="100%"
        gap={"2rem"}
        mt={"3.2rem"}
      >
        {listing.map((item) => (
          <GridItem w="100%" p={0} key={item.id}>
            <ListCard {...item} />
          </GridItem>
        ))}
      </Grid>
    </ChakraProvider>
  );
};

export default RealEstateList;
