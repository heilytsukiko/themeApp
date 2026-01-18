import { useSelector, useDispatch } from 'react-redux';
import type {TRootState} from '../store/index';
import {changeTheme, type Theme} from '../store/slices/Theme';
import './App.css'

interface ITheme{
  bgColor: string,
  cardBgColor: string,
  titleColor: string,
  descriptionColor: string,
  buttonColor: string,
}

const localeTheme = {
  light: {
    bgColor: 'rgba(255, 255, 255, 1)',
    cardBgColor: 'rgba(255, 255, 255, 1)',
    titleColor: 'rgba(0, 0, 0, 0.87)',
    descriptionColor: 'rgba(0, 0, 0, 0.6)',
    buttonColor: 'rgba(56, 112, 201, 1)',
  },
  dark: {
    bgColor: 'rgba(46, 46, 46, 1)',
    cardBgColor: 'rgba(210, 189, 0, 1)',
    titleColor: 'rgba(71, 0, 184, 0.87)',
    descriptionColor: 'rgba(71, 0, 184, 0.6)',
    buttonColor: 'rgba(255, 255, 255, 1)',
  }
} satisfies Record<string, ITheme>;
export default function ThemeCard(){
  const dispatch = useDispatch();

  const currentThemeStore: Theme = useSelector((state:TRootState) => state.theme.currentTheme)
  const style = localeTheme[currentThemeStore];
  const toggle = () => {
    dispatch(changeTheme(currentThemeStore === 'light' ? 'dark' : 'light'))
  }
  return (
    <div className='theme-card-wrapper' style={{backgroundColor: style.bgColor}}>
      <div className='theme-card' style={{backgroundColor: style.cardBgColor}}>
        <div className='theme-card-img'>
          <img src="public\Vector.png" alt=""/>
        </div>
        <p className="card-title" style={{color: style.titleColor}}>Текущая тема: </p>
        <p className="card-description" style={{color: style.descriptionColor}}>Светлая</p>
        <button 
          className="card-button" style={{color: style.buttonColor}}
          onClick={toggle}
        > 
          Сменить тему 
        </button>
      </div>
    </div>
  )
}
