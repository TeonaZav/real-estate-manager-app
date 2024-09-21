import { useQuery } from "@tanstack/react-query";
import { fetchEstate } from "../services/api";

export const useGetEstate = (id) => {
  const { isLoading, data, error, isFetching } = useQuery({
    queryKey: ["listing", id],
    queryFn: () => fetchEstate(id),
    onSuccess: (data) => {
      console.log("Estate data fetched:", data);
    },
    suspense: false,
  });

  const estate = data ? data : null;

  return { isLoading, isFetching, error, estate };
};
