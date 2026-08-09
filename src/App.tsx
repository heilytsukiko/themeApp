import { AppContext } from './context/AppContext';
import Card from './components/Card';
import ColorBlock from './components/ColorBlock';
import { useState } from "react";
import './App.css';

export interface IAppData {
  content: string;
  color: string;
}

function App() {
  const [mockData, setMockData] = useState<IAppData>({content: 'mockData', color: '#aa1010'})

  return (
    <AppContext.Provider value={mockData}>
      <Card />
      <ColorBlock/>
    </AppContext.Provider>
  )
}

export default App
