import { useQuery } from "@tanstack/react-query";
import { fetchAgents } from "../services/api";
import { convertAgentOptions } from "../utils/formUtils";

export const useGetAgents = () => {
  const { data, error } = useQuery({
    queryKey: ["agents"],
    queryFn: fetchAgents,
    suspense: true, 
  });

  const agents = data ? convertAgentOptions(data) : [];
  return { agents, error };
};
