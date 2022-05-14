import React from "react";
import Logo from "../components/Logo";
import logoSmall from "../Assets/imgs/logo-pequeno.png"
import start from "../Assets/imgs/start.svg"
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";


export default function Zap({ cards, setCards }) {

    const objAnswers = [
        {
            text: "Difícil",
            color: "red"
        },
        {
            text: "Médio",
            color: "yellow"
        },
        {
            text: "Fácil",
            color: "green"
        }
    ];
    const [answers, setAnswers] = React.useState(objAnswers);    

    return (
        <>
            <Logo>
                <img src={logoSmall} alt="Logo" />
                <h3>Zap Recall</h3>
            </Logo>

            {cards.map((card, index) =>
                <Card cardStep={card.cardStep} cardQuestion={card.question} cardAnswer={card.answer} cardIndex={index}>
                    <Button cardIndex={index} cards={cards} setCards={setCards}/>
                </Card>)
            }
        </>
    );
}