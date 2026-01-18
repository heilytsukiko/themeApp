import { createSlice, type PayloadAction }  from '@reduxjs/toolkit';

export type Language = 'ru' | 'en';

interface LanguageState{
    currentLanguage: Language,
}

const initialState: LanguageState = {
    currentLanguage: 'ru',
}

const appSlice = createSlice({
    name: 'appLanguage',
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<Language>) => {
            state.currentLanguage = action.payload;
        }
    }
})

export const { changeLanguage } = appSlice.actions;
export default appSlice.reducer;