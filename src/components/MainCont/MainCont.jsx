import Card from "../Card/Card";
import Info from "../Info/Info";
import style from './MainCont.module.css'
import { CARDS } from "../../constants/cards";

const MainCont = () => {
    return (
        <div>
		<Info/>
        <div className={style['main-container']}>
		{CARDS.map(card => (
			<Card key={card.id} {...card}/>
	))}
		</div>
        </div>
    )
}

export default MainCont