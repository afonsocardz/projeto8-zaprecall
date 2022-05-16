import "./style.css"

export default function Card({ cardColor, cardStep, cardQuestion, cardAnswer, cardIndex, children }){
    
    const text = cardStep === 0 ?  `Pergunta ${cardIndex + 1}` : cardStep === 1 ? cardQuestion : cardAnswer;

    const disabled = !cardColor ? "" : "disabled"

    return(
        <div className={`card ${cardStep} ${disabled}`} >
            <span className={cardColor}>{text}</span>
            {children}
            
        </div>
    );
}