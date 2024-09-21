import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEstateFromDb } from "../services/api";

export const useDeleteEstate = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => deleteEstateFromDb(id),
    onSuccess: () => {
      toast.success("Estate successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["listing"],
      });
    },
    onError: (error) => {
      toast.error("Failed to delete estate: " + error.message);
    },
  });

  return mutation;
};
