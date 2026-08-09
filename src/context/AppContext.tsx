import { createContext } from "react";
import { type IAppData } from '../App'

export const AppContext = createContext<IAppData | null>(null);