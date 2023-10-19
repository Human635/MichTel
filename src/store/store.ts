import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { placesApi } from "./api/allCitiesApi"
import userSlice from "./userSlice"

export const store = configureStore({
    reducer: {
        userSlice,
        [placesApi.reducerPath]: placesApi.reducer,

    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
        placesApi.middleware,
    ])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch