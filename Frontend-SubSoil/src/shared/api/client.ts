const BASE_URL = import.meta.env.VITE_API_URL

export async function apiFetch<T> (path: string, init?: RequestInit): Promise<T> {
   const url = new URL(path, BASE_URL)

   const response = await fetch(url, init)

   if (!response.ok) {
      throw new Error(
         `Ошибка запроса: ${response.status} | ${response.statusText}`,
      )
   }

   return response.json() as Promise<T>
}