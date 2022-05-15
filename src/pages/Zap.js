import React from "react";
import Logo from "../components/Logo";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import logoSmall from "../Assets/imgs/logo-pequeno.png";
import question from "../Assets/imgs/question.svg";
import wrong from "../Assets/imgs/wrong.svg";
import right from "../Assets/imgs/right.svg";


export default function Zap({ cards, setCards }) {

    const objAnswers = [
        {
            text: "Não lembrei",
            color: "red",
            icon: wrong
        },
        {
            text: "Quase não lembrei",
            color: "yellow",
            icon: question
        },
        {
            text: "Zap!",
            color: "green",
            icon: right
        }
    ];
    //const [answers, setAnswers] = React.useState(objAnswers);    

    return (
        <>
            <Logo>
                <img src={logoSmall} alt="Logo" />
                <h3>Zap Recall</h3>
            </Logo>

            {cards.map((card, index) =>
                <Card cardStep={card.cardStep} cardQuestion={card.question} cardAnswer={card.answer} cardIndex={index}>
                    <Button cardIndex={index} cards={cards} setCards={setCards} answers={objAnswers} />
                </Card>)
            }

            <Footer cards={cards} answers={objAnswers}>
                {cards.map(card => <img src={card.option} alt="icon"/>)}
            </Footer>
        </>
    );
}