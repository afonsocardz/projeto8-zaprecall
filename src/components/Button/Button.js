import Answer from "./Answer";
import start from "../../Assets/imgs/start.svg"
import flip from "../../Assets/imgs/setinha.png";


export default function Button({ cardIndex, cards, setCards, ...otherProps }) {

    const { answers } = { ...otherProps };
    let changeValue = [...cards]
    
    function changeCard() {
        let cardStep = changeValue[cardIndex]["cardStep"];
        changeValue[cardIndex]["cardStep"] += 1;
        if (cardStep === 2) changeValue[cardIndex]["cardStep"] = 0;
        setCards(changeValue);
    }

    const img = changeValue[cardIndex]["cardStep"] === 0 ? start : flip;

    return (
        <div onClick={() => changeCard()}>
            {changeValue[cardIndex]["cardStep"] > 1 ?
                answers.map((answer) => <Answer value={answer.text} color={answer.color} setCards={setCards} />) :
                <Answer value={img} type={"img"} />}
        </div>
    );
}