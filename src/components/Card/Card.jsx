import style from './Card.module.css'

const Card = ({text,title,src, color, grid}) => {
    return (
        <div className={`${style.card} ${style[grid]}`}>
            <div className={`${style['card-deco']} ${style[color]} `}></div>
            <h1 className={style['card-title']}>{title}</h1>
            <h2 className={style['card-subtitle']}>{text}</h2>
            <img className={style['card-icon']} src={src} alt="" />
        </div>
    )
}

export default Card