import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../../utils/baseQuery";

export const placesApi = createApi({
  reducerPath: "placesApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
  endpoints: (builder) => ({
    getPlacesList: builder.query({
      query: () => "/nomad-list",
    }),
    getPlacesItem: builder.query({
      query: (placeId: number) => `/nomad-list/${placeId}`,
    }),
  }),
});

export const { useGetPlacesListQuery, useGetPlacesItemQuery } = placesApi;
