export default function Footer({cards, answers, children}){
    const qtyAnswered = cards.filter(card => card.option !== false).length;
    const finalMsg = cards.every(card => card.option === answers[2].icon || card.option === answers[1].icon) ? "Você não esqueceu de nenhum flashcard!" : "Ainda faltam alguns...\nMas não desanime!";
    return(
        <div className="footer">
            {qtyAnswered === cards.length ? <span>{finalMsg}</span> : <></> }
            <span>{qtyAnswered}/{cards.length} Concluídos</span>
            {children}
        </div>
    );
}