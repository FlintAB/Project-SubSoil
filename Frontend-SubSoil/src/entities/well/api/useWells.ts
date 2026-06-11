import { useQuery } from "@tanstack/react-query";
import { wellsApi } from "../../../shared/api/wells.api";

export function useWells() {
   return useQuery(
      {
         queryKey: ['wells'], 
         queryFn: wellsApi.getAll
      }
   )
}