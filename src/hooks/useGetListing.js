import { useQuery } from "@tanstack/react-query";
import { fetchListing } from "../services/api";

export const useGetListing = () => {
  const { data, error } = useQuery({
    queryKey: ["listing"],
    queryFn: fetchListing,
    suspense: true,
  });

  const listing = (data || []).sort((a, b) => b.id - a.id);
  return { listing, error };
};
