import style from './Info.module.css'

const Info = () => {
    return (
        <div className={style['info-container']}>
            <h1 className={style['info-title-sub']}>Reliable, efficient delivery</h1>
            <h1 className={style['info-container']}>Powered by Technology</h1>
            <p className={style['info-text']}>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
        </div>
    )
}

export default Info