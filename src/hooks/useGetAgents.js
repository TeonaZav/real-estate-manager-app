import { useQuery } from "@tanstack/react-query";
import { fetchAgents } from "../services/api";
import { convertAgentOptions } from "../utils/formUtils";

export const useGetAgents = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["agents"],
    queryFn: fetchAgents,
  });

  const agents = !isLoading && data ? convertAgentOptions(data) : [];

  return { isLoading, error, agents };
};
