import { createSlice, type PayloadAction} from "@reduxjs/toolkit";

export type Theme = 'light' | 'dark';

interface ThemeState{
    currentTheme: Theme,
}

const localTheme = window.localStorage.getItem('theme') as Theme; 

const initialState: ThemeState = {
    currentTheme: localTheme,
}

const appSlice = createSlice({
    name: 'appTheme',
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<Theme>) => {
            state.currentTheme = action.payload;
            window.localStorage.setItem('theme', state.currentTheme)
        }
    }
})

export const { changeTheme } = appSlice.actions;
export default appSlice.reducer;