import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from './slices/Theme'

const store = configureStore({
    reducer: {
        theme: ThemeReducer,
    },
})
export type TRootState = ReturnType<typeof store.getState>;
export default store;