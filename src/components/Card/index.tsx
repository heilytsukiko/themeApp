import { useSelector, useDispatch } from 'react-redux';
import type {TRootState} from '../../store/index';
import {changeTheme, type Theme} from '../../store/slices/Theme';
import './styles.css'

const ThemeCard = () => {
  const dispatch = useDispatch();
  const currentThemeStore: Theme = useSelector((state:TRootState) => state.theme.currentTheme)
  
  const toggle = () => {
    dispatch(changeTheme(currentThemeStore === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className={`theme-card ${currentThemeStore === 'light' ? 'light' : 'dark'}`}>
      <div className='theme-card-img'>
        <img src="/themeApp/BgImage.png" alt=""/>
      </div>
      <p className="card-title">Текущая тема: </p>
      <p className="card-description">{currentThemeStore === 'light' ? 'Светлая' : 'Темная'}</p>
      <button className="card-button" onClick={toggle}> Сменить тему</button>
    </div>
  )
}
export default ThemeCard;