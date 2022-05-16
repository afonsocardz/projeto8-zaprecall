import Answer from "./Answer";
import start from "../../Assets/imgs/start.svg"
import flip from "../../Assets/imgs/setinha.png";
import './style.css'


export default function Button({ cardIndex, cards, setCards, ...otherProps }) {

    const { answers, setAnswers, orderedAnswers } = { ...otherProps };
    let changeValue = [...cards]
    console.log(cards);

    function changeCard(icon = false, color) {
        let cardStep = changeValue[cardIndex]["cardStep"];

        icon ? changeValue[cardIndex]["option"] = icon : changeValue[cardIndex]["cardStep"] += 1;;

        if (cardStep === 2) {
            changeValue[cardIndex]["color"] = color;
            changeValue[cardIndex]["cardStep"] = 0;
            setAnswers([...orderedAnswers, icon])
        }

        setCards(changeValue);
    }

    const icon = changeValue[cardIndex]["option"] === false ?

        (changeValue[cardIndex]["cardStep"] === 0 ? start : flip) :

        changeValue[cardIndex]["option"]

        ;




    return (
        <div className="button-container" onClick={changeValue[cardIndex]["cardStep"] !== 2 ? () => changeCard() : undefined}>
            {changeValue[cardIndex]["cardStep"] > 1 ?
                answers.map((answer, index) => <Answer cardIndex={cardIndex} index={index} value={answer.text} color={answer.color} icon={answer.icon} changeCard={changeCard} />) :
                <Answer value={icon} type={"img"} />
            }
        </div>
    );
}