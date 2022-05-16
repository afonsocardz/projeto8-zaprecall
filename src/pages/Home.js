import Logo from "../components/Logo/Logo";
import LogoImg from "../Assets/imgs/logo.svg"

import "../Assets/css/style.css"


export default function Home({setInit}) {
    return (
        <div className="home">
            <Logo logoType="logo-main">
                <img src={LogoImg} alt="Logo"/>
                <span>ZapRecall</span>
            </Logo>
            <button onClick={() => setInit(true)}>Iniciar Recall!</button>
        </div>

    );
}