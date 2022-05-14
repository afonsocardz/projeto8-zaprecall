import Logo from "../components/Logo";
import LogoImg from "../Assets/imgs/logo.png"


export default function Home({setInit}) {
    return (
        <>
            <Logo>
                <img src={LogoImg} alt="Logo"/>
                <h2>Zap Recall</h2>
            </Logo>
            <button onClick={() => setInit(true)}>Começa ai!</button>
        </>

    );
}