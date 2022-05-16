import React from "react";
import Logo from "../components/Logo/Logo";
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

    const [answers, setAnswers] = React.useState([]);

    return (
        <>
            <Logo logoType="logo-small">
                <img src={logoSmall} alt="Logo" />
                <span>Zap Recall</span>
            </Logo>
            <div className="cards-container">
                {cards.map((card, index) =>
                    <Card cardColor={card.color} cardStep={card.cardStep} cardQuestion={card.question} cardAnswer={card.answer} cardIndex={index} >
                        <Button cardIndex={index} cards={cards} setCards={setCards} answers={objAnswers} setAnswers={setAnswers} orderedAnswers={answers} />
                    </Card>)
                }
            </div>


            <Footer cards={cards} answers={objAnswers}>
                <div className="answers">
                    {answers.map(answer => <img src={answer} alt="icon" />)}
                </div>
            </Footer>
        </>
    );
}