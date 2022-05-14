export default function Card({ cardStep, cardQuestion, cardAnswer, cardIndex, children }){
    
    const text = cardStep === 0 ?  `Pergunta ${cardIndex + 1}` : cardStep === 1 ? cardQuestion : cardAnswer;

    return(
        <div className={`card ${cardStep}`} >
            <span>{text}</span>
            {children}
        </div>
    );
}