import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addNewAgent } from "../services/api";

export const useCreateAgent = () => {
  const queryClient = useQueryClient();

  const { mutate: createNewAgent, isLoading: isCreating } = useMutation({
    mutationFn: addNewAgent,
    onSuccess: () => {
      toast.success("აგენტი წარმატებით შეიქმნა");

      queryClient.invalidateQueries({ queryKey: ["agents"] });
    },
    onError: (error) => {
      const message = error.response?.data?.message || "An error occurred";
      toast.error(message);
    },
  });

  return { isCreating, createNewAgent };
};
