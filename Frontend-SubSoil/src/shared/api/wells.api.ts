import type { Well } from "../../entities/well/types/types";
import { apiFetch } from "./client";

export const wellsApi = {
   getAll: () => apiFetch<Well[]>('wells'),
   getById: (id: string) => apiFetch<Well>(`wells/${id}`),

   delete: (id: string) => apiFetch<void>(`wells/${id}`, { method: 'DELETE' }),

   upload: (file: FormData) => apiFetch<Well>('wells/upload', 
      {
         method: 'POST',
         body: file
      }
   ),

}