import { AppContext } from './context/AppContext';
import Card from './components/Card';
import ColorBlock from './components/ColorBlock';
import { useState } from "react";
import './App.css';

export interface IAppData {
  content: string;
  color: string;
}

export interface IAppContextData {
  value: IAppData;
  setValue: React.Dispatch<React.SetStateAction<IAppData>>;
}

function App() {
  const [mockData, setMockData] = useState<IAppData>({content: 'mockData', color: '#aa1010'})

  return (
    <AppContext.Provider value={{ value: mockData, setValue: setMockData }}>
      <Card />
      <ColorBlock/>
    </AppContext.Provider>
  )
}

export default App
