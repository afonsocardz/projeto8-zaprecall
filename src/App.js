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
    },
    {
        question: "Podemos colocar __ dentro do JSX",
        answer: "expressões",
        cardStep: 0,
        option: false,
        color:false
    },
    {
        question: "O ReactDOM nos ajuda __",
        answer: "interagindo com a DOM para colocar componentes React na mesma",
        cardStep: 0,
        option: false,
        color:false
    },
    {
        question: "Usamos o npm para __",
        answer: "gerenciar os pacotes necessários e suas dependências",
        cardStep: 0,
        option: false,
        color:false
    },
    {
        question: "Usamos props para __",
        answer: "passar diferentes informações para componentes",
        cardStep: 0,
        option: false,
        color:false
    },
    {
        question: "Usamos estado (state) para __",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
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