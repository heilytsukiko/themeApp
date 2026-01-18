import './App.css'

export default function Card(){
  return (
    <div className='theme-card'>
        <div className='theme-card-img'>
          <img src="public\Vector.png" alt=""/>
        </div>
        <p className="card-title">Текущая тема: </p>
        <p className="card-description">Светлая</p>
        <button className="card-button">Сменить тему</button>
    </div>
  )
}
