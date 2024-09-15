import { useQueries } from "@tanstack/react-query";
import { fetchCities, fetchRegions } from "../services/api";
import { convertSelectOptions } from "../utils/formUtils";

export const useAddressData = (region_id) => {
  const [citiesQuery, regionsQuery] = useQueries({
    queries: [
      {
        queryKey: ["cities", region_id],
        queryFn: fetchCities,
        enabled: !!region_id,
      },
      {
        queryKey: ["regions"],
        queryFn: fetchRegions,
      },
    ],
  });

  const isLoading = citiesQuery.isLoading || regionsQuery.isLoading;
  const error = citiesQuery.error || regionsQuery.error;

  const citiesData =
    citiesQuery.isSuccess && region_id
      ? citiesQuery.data.filter((city) => city.region_id === region_id)
      : [];
  const cities = convertSelectOptions(citiesData);

  const regions = regionsQuery.isSuccess
    ? convertSelectOptions(regionsQuery.data)
    : [];

  return {
    isLoading,
    error,
    cities,
    regions,
  };
};
