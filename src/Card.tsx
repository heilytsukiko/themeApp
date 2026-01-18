import { useSelector, useDispatch } from 'react-redux';
import type {TRootState} from './store';
import type { Language } from './store/Language';
import { changeLanguage } from './store/Language';
import './App.css'

interface ILanguage {
  title: string,
  description: string,
  button: string,
}

const localeContent = {
  ru: {
    title: 'Текущий язык',
    description: 'русский',
    button: 'Поменять тему',
  },
  en: {
    title: 'Сurrent language',
    description: 'enlgish',
    button: 'Change theme',
  }
} satisfies Record<string, ILanguage>;

export default function Card(){
  const dispatch = useDispatch();

  const currentLangStore: Language = useSelector((state: TRootState) => state.lang.currentLanguage);
  const content = localeContent[currentLangStore];
  const toggle = () => { 
    dispatch(changeLanguage(currentLangStore === 'en' ? 'ru' : 'en'))
  }

  return (
    <div className="card">
        <h2 className="card-title">{content.title}:</h2>
        <p className="card-description">{content.description}</p>
        <button className="card-button" onClick={toggle}>{content.button}</button>
    </div>
  )
}
