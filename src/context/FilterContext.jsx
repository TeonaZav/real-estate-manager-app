import {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetListing } from "../hooks/useGetListing";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const navigate = useNavigate();

  const saveFiltersToSession = (url) => {
    sessionStorage.setItem("filterURL", url);
  };

  const restoreFiltersFromSession = () => {
    const savedUrl = sessionStorage.getItem("filterURL");
    if (savedUrl) {
      navigate(savedUrl, { replace: true });
    }
  };

  const [selectedRegions, setSelectedRegions] = useState(
    searchParams.getAll("region") || []
  );
  const [selectedMinPrice, setSelectedMinPrice] = useState(
    searchParams.get("minPrice") || ""
  );
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(
    searchParams.get("maxPrice") || ""
  );
  const [selectedMinArea, setSelectedMinArea] = useState(
    searchParams.get("minArea") || ""
  );
  const [selectedMaxArea, setSelectedMaxArea] = useState(
    searchParams.get("maxArea") || ""
  );
  const [selectedBedrooms, setSelectedBedrooms] = useState(
    searchParams.get("bedrooms") || ""
  );

  const { listing: estates } = useGetListing();
  const [filteredEstates, setFilteredEstates] = useState([]);

  useEffect(() => {
    const params = {};
    if (selectedRegions.length > 0) params.region = selectedRegions.join(",");
    if (selectedMinPrice) params.minPrice = selectedMinPrice;
    if (selectedMaxPrice) params.maxPrice = selectedMaxPrice;
    if (selectedMinArea) params.minArea = selectedMinArea;
    if (selectedMaxArea) params.maxArea = selectedMaxArea;
    if (selectedBedrooms) params.bedrooms = selectedBedrooms;

    setSearchParams(params);
  }, [
    selectedRegions,
    selectedMinPrice,
    selectedMaxPrice,
    selectedMinArea,
    selectedMaxArea,
    selectedBedrooms,
    setSearchParams,
  ]);

  const handleFiltering = useCallback(() => {
    let filtered = [];

    if (selectedRegions.length > 0) {
      const regionFiltered = estates.filter((estate) =>
        selectedRegions.includes(String(estate.city.region_id))
      );
      filtered = [...new Set([...filtered, ...regionFiltered])];
    }

    if (selectedMinPrice || selectedMaxPrice) {
      const priceFiltered = estates.filter((estate) => {
        const matchesMinPrice =
          selectedMinPrice === "" || estate.price >= Number(selectedMinPrice);
        const matchesMaxPrice =
          selectedMaxPrice === "" || estate.price <= Number(selectedMaxPrice);
        return matchesMinPrice && matchesMaxPrice;
      });
      filtered = [...new Set([...filtered, ...priceFiltered])];
    }

    if (selectedMinArea || selectedMaxArea) {
      const areaFiltered = estates.filter((estate) => {
        const matchesMinArea =
          selectedMinArea === "" || estate.area >= Number(selectedMinArea);
        const matchesMaxArea =
          selectedMaxArea === "" || estate.area <= Number(selectedMaxArea);
        return matchesMinArea && matchesMaxArea;
      });
      filtered = [...new Set([...filtered, ...areaFiltered])];
    }

    if (selectedBedrooms) {
      const bedroomFiltered = estates.filter(
        (estate) => estate.bedrooms === Number(selectedBedrooms)
      );
      filtered = [...new Set([...filtered, ...bedroomFiltered])];
    }

    if (
      !selectedRegions.length &&
      !selectedMinPrice &&
      !selectedMaxPrice &&
      !selectedMinArea &&
      !selectedMaxArea &&
      !selectedBedrooms
    ) {
      filtered = estates;
    }

    return filtered;
  }, [
    estates,
    selectedRegions,
    selectedMinPrice,
    selectedMaxPrice,
    selectedMinArea,
    selectedMaxArea,
    selectedBedrooms,
  ]);

  const filteredEstatesMemo = useMemo(
    () => handleFiltering(),
    [handleFiltering]
  );

  useEffect(() => {
    setFilteredEstates(filteredEstatesMemo);
  }, [filteredEstatesMemo]);

  const clearFilters = () => {
    setSelectedRegions([]);
    setSelectedMinPrice("");
    setSelectedMaxPrice("");
    setSelectedMinArea("");
    setSelectedMaxArea("");
    setSelectedBedrooms("");
    setSearchParams({});
  };

  const value = useMemo(
    () => ({
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
      saveFiltersToSession,
      restoreFiltersFromSession,
      searchParams,
      filteredEstates: filteredEstatesMemo,
    }),
    [
      selectedRegions,
      selectedMinPrice,
      selectedMaxPrice,
      selectedMinArea,
      selectedMaxArea,
      selectedBedrooms,
      filteredEstatesMemo,
    ]
  );

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
