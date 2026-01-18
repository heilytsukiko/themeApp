import { configureStore } from "@reduxjs/toolkit";
import LanguageReducer from './Language';

const store = configureStore({
    reducer: {
        lang: LanguageReducer,
    },
})
export type TRootState = ReturnType<typeof store.getState>;
export default store;