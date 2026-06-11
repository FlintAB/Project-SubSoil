import { useQuery } from "@tanstack/react-query";
import { wellsApi } from "../../../shared/api/wells.api";

export function useWell(id: string) {
   return useQuery(
      {
         queryKey: ['wells', id],
         queryFn: () => wellsApi.getById(id),
         enabled: !!id
      }
)
}