import { useMutation, useQueryClient } from "@tanstack/react-query";
import { wellsApi } from "../../../shared/api/wells.api";

export function useDeleteWell() {
   const queryClient = useQueryClient()

   return useMutation({
      mutationFn: wellsApi.delete,

      onSuccess: () => {
         queryClient.invalidateQueries({
            queryKey: ['wells']
         })
      }
   })
}