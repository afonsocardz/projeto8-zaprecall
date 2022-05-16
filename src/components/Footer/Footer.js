import "./style.css"
import sad from "../../Assets/imgs/sad.png"
import party from "../../Assets/imgs/party.png"
import FinalMsg from "./FinalMsg";

export default function Footer({ cards, answers, children }) {
    const message = {

        bad: {
            text: "Ainda faltam alguns...\nMas não desanime!",
            title: "Putz...",
            icon: sad
        },
        party: {
            text: "Você não esqueceu de nenhum flashcard!",
            title: "Parabéns!",
            icon: party
        }
    };

    const qtyAnswered = cards.filter(card => card.option !== false).length;
    const finalMsg = cards.every(card => card.option === answers[2].icon || card.option === answers[1].icon) ? message.party : message.bad;
    console.log(finalMsg);
    return (
        <div className="footer">
            {qtyAnswered === cards.length ? <FinalMsg finalMsg={finalMsg} /> : <></>}
            <span>{qtyAnswered}/{cards.length} Concluídos</span>
            {children}
        </div>
    );
}