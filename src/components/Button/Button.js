export default function Button ({cardIndex, cards,  setCards, ...otherProps}) {

    let changeCard = [...cards]
    function changeStep(){
        changeCard[cardIndex]["cardStep"] = 1;
        setCards(changeCard)
    }
    
    console.log(changeCard);
    return(
        <div className={`button`} onClick={() => changeStep()}>
            botão
        </div>
        
    );
}