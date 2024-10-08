import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import { chakraTheme } from "../../../utils/theme";
import { useFilter } from "../../../context/FilterContext";
import { ListCard } from "./../../index";
import { SNotFound } from "./RealEstateList.styled";

const RealEstateList = () => {
  const { filteredEstates } = useFilter();
  const { restoreFiltersFromSession } = useFilter();

  useEffect(() => {
    restoreFiltersFromSession();
  }, []);

  if (!filteredEstates || filteredEstates?.length === 0) {
    return <SNotFound>აღნიშნული მონაცემებით განცხადება არ იძებნება</SNotFound>;
  }

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
        {filteredEstates.map((item) => (
          <GridItem w="100%" p={0} key={item.id}>
            <ListCard {...item} />
          </GridItem>
        ))}
      </Grid>
    </ChakraProvider>
  );
};

export default RealEstateList;
