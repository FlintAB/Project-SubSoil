import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         retry: 3,
         refetchOnWindowFocus: false,
         },
      },
})

type Props = {
   children: ReactNode
}

export const QueryProvider = ({ children }: Props) => {
   return (
      <QueryClientProvider client={queryClient}>
         {children}
      </QueryClientProvider>
   )
}