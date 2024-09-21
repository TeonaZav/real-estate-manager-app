import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "../../../utils/theme";
import { useFilter } from "../../../context/FilterContext";
import { useAddressData } from "../../../hooks/useAddressData";
import {
  STag,
  STagLabel,
  STagCloseButton,
  SChips,
  SClearFilters,
} from "./FilterChips.styled";

const Chip = ({ label, onRemove }) => (
  <STag variant="outline">
    <STagLabel>{label}</STagLabel>
    <STagCloseButton onClick={onRemove} />
  </STag>
);

const FilterChips = () => {
  const {
    selectedRegions,
    setSelectedRegions,
    selectedMinPrice,
    setSelectedMinPrice,
    selectedMaxPrice,
    setSelectedMaxPrice,
    selectedMinArea,
    setSelectedMinArea,
    selectedMaxArea,
    setSelectedMaxArea,
    selectedBedrooms,
    setSelectedBedrooms,
    clearFilters,
  } = useFilter();

  const { regions } = useAddressData();

  const getRegionLabel = (regionId) => {
    const region = regions.find((r) => String(r.value) === String(regionId));
    return region ? region.label : regionId;
  };

  const removeRegion = (region) => {
    setSelectedRegions(selectedRegions.filter((r) => r !== region));
  };

  const removePrice = () => {
    setSelectedMinPrice("");
    setSelectedMaxPrice("");
  };

  const removeArea = () => {
    setSelectedMinArea("");
    setSelectedMaxArea("");
  };

  const removeBedrooms = () => {
    setSelectedBedrooms("");
  };

  const handleClearFilters = () => {
    sessionStorage.removeItem("filterURL");
    clearFilters();
  };

  return (
    <ChakraProvider theme={chakraTheme}>
      <SChips display="flex" gap="0.8rem" flexWrap="wrap" alignItems="center">
        {selectedRegions.map((region, index) => (
          <Chip
            key={index}
            label={getRegionLabel(region)}
            onRemove={() => removeRegion(region)}
          />
        ))}

        {(selectedMinPrice || selectedMaxPrice) && (
          <Chip
            label={`${selectedMinPrice || "0"} ₾ - ${
              selectedMaxPrice || " "
            } ₾`}
            onRemove={removePrice}
          />
        )}

        {(selectedMinArea || selectedMaxArea) && (
          <Chip
            label={`${selectedMinArea || "0"} მ² - ${
              selectedMaxArea || " "
            } მ²`}
            onRemove={removeArea}
          />
        )}

        {selectedBedrooms && (
          <Chip
            label={`${selectedBedrooms} საძინებელი`}
            onRemove={removeBedrooms}
          />
        )}

        <SClearFilters onClick={handleClearFilters}>გასუფთავება</SClearFilters>
      </SChips>
    </ChakraProvider>
  );
};

export default FilterChips;
