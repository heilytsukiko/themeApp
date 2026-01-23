import { useSelector } from 'react-redux'
import type { TRootState } from '@store/index'
import { type Theme } from '@store/slices/Theme'
import Home from '@pages/Home'
import './styles.css'

const App = () => {
  const currentTheme: Theme = useSelector((state:TRootState) => state.theme.currentTheme)
  return (
    <div className={`app ${currentTheme === 'light' ? 'dark' : 'light'}`}>
      <Home/>
    </div>
  )
}

export default App
