import { createSlice, type PayloadAction} from "@reduxjs/toolkit";

export type Theme = 'light' | 'dark';

interface ThemeState{
    currentTheme: Theme,
}

const initialState: ThemeState = {
    currentTheme: 'light',
}

const appSlice = createSlice({
    name: 'appTheme',
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<Theme>) => {
            state.currentTheme = action.payload;
        }
    }
})

export const { changeTheme } = appSlice.actions;
export default appSlice.reducer;