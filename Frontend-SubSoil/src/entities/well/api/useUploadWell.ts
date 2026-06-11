import { useMutation, useQueryClient } from "@tanstack/react-query";
import { wellsApi } from "../../../shared/api/wells.api";

export function useUploadWell() {
   const queryClient = useQueryClient()

   return useMutation({
      mutationFn: wellsApi.upload,

      onSuccess: () => {
         queryClient.invalidateQueries({
            queryKey: ['wells']
         })
      }
   })

}