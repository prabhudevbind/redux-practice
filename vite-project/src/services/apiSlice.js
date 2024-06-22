
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath:"api",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://sabecho.com/api/v1' }),

  endpoints: builder => ({
    
    getNavbarDdata: builder.query({
      query: () => '/category/navbardata'
    }),
  })
})

export const {useGetNavbarDdataQuery } = apiSlice;