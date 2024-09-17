import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addNewListing } from "../services/api";

export const useCreateListing = () => {
  const queryClient = useQueryClient();

  const { mutate: createNewListing, isLoading: isCreating } = useMutation({
    mutationFn: addNewListing,
    onSuccess: () => {
      toast.success("New listing successfully created");

      queryClient.invalidateQueries({ queryKey: ["listing"] });
    },
    onError: (error) => {
      const message = error.response?.data?.message || "An error occurred";
      toast.error(message);
    },
  });

  return { isCreating, createNewListing };
};
