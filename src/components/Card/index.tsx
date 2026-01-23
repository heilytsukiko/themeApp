import { useSelector, useDispatch } from 'react-redux';
import type {TRootState} from '@store/index';
import {changeTheme, type Theme} from '@store/slices/Theme';
import './styles.css'

const Card = () => {
  const dispatch = useDispatch();
  const currentThemeStore: Theme = useSelector((state:TRootState) => state.theme.currentTheme)
  const theme = currentThemeStore === 'light' ? 'dark' : 'light'

  const toggle = () => {
    dispatch(changeTheme(theme))
  }

  return (
    <div className={`card`}>
      <div className='card-img'>
        <img src={import.meta.env.BASE_URL + 'BgImage.svg'} alt=""/>
      </div>
      <p className="card-title">Текущая тема: </p>
      <p className="card-description">{currentThemeStore === 'light' ? 'Светлая' : 'Темная'}</p>
      <button className="card-button" onClick={toggle}> Сменить тему</button>
    </div>
  )
}
export default Card;