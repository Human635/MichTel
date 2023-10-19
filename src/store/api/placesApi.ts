import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../../utils/baseQuery";

// baseQuery: fetchBaseQuery({
//   baseUrl: '.....',
//   prepareHeaders: (headers, { getState }) => {
//       headers.set('Access-Control-Allow-Origin', '*')
//       return headers
//   }
// }),

export const placesApi = createApi({
  reducerPath: "placesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseQuery,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "ca58d66530msh2cb4599043cf03fp15c0b8jsn6f8360a17224"
      );
      headers.set("X-RapidAPI-Host", "nomad-list-cities.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPlacesList: builder.query({
      query: () => "/nomad-list?size=30",
    }),
    getPlacesItem: builder.query({
      query: (placeId: number) => `/nomad-list/${placeId}`,
    }),
  }),
});

export const { useGetPlacesListQuery, useLazyGetPlacesItemQuery } = placesApi;
