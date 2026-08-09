import { createContext } from "react";
import { type IAppContextData } from '../App'

export const AppContext = createContext<IAppContextData | undefined>(undefined);