import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "./../../../utils/theme";
import { MenuDropdown } from "./../../index";

import {
  RegionFilter,
  PriceFilter,
  AreaFilter,
  BedroomFilter,
} from "./../filterForms";

import { SPannelWrapper } from "./FilterPanel.styles";
const FilterPanel = () => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <SPannelWrapper>
        <MenuDropdown heading="რეგიონების მიხედვით" label="რეგიონი">
          <RegionFilter />
        </MenuDropdown>
        <MenuDropdown label="საფასო კატეგორია">
          <PriceFilter />
        </MenuDropdown>
        <MenuDropdown label="ფართობი">
          <AreaFilter />
        </MenuDropdown>
        <MenuDropdown label="საძინებლების რაოდენობა">
          <BedroomFilter />
        </MenuDropdown>
      </SPannelWrapper>
    </ChakraProvider>
  );
};

export default FilterPanel;
