import { useQueries } from "@tanstack/react-query";
import { fetchCities, fetchRegions } from "../services/api";
import { convertSelectOptions } from "../utils/formUtils";

export const useAddressData = () => {
  const [citiesQuery, regionsQuery] = useQueries({
    queries: [
      {
        queryKey: ["cities"],
        queryFn: fetchCities,
        suspense: true,
      },
      {
        queryKey: ["regions"],
        queryFn: fetchRegions,
        suspense: true,
      },
    ],
  });

  const cities = citiesQuery.isSuccess ? citiesQuery.data : [];
  const regions = regionsQuery.isSuccess
    ? convertSelectOptions(regionsQuery.data)
    : [];

  return {
    cities,
    regions,
  };
};
