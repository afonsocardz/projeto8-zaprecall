import React from "react"
import Home from "./pages/Home"
import Zap from "./pages/Zap"
import "./Assets/css/reset.css"
import "./Assets/css/style.css"

export default function App (){
    const objCards = [{
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript",
        cardStep: 0,
        option: false,
        color:false
    },
    {
        question:"O React é __",
        answer: "uma biblioteca JavaScript para construção de interfaces",
        cardStep: 0,
        option: false,
        color:false
    },
    {
        question: "Componentes devem iniciar com __",
        answer: "letra maiúscula",
        cardStep: 0,
        option: false,
        color:false
    }];
    const [init, setInit] = React.useState(false);
    const [cards, setCards] = React.useState(objCards);

    return(
        <>
            { !init ?
            <Home setInit={setInit}/>:
            <Zap setCards={setCards} cards={cards}/>}
        </>
    );
}