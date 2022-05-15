import './style.css'

export default function Answer ({ type, value, color, icon, changeCard}){
    
    return (
        <div className={`button ${color}`} >
            {type === "img" ? <img src={value} alt="play"/> : <span onClick={() => changeCard(icon)}>{value}</span>}
        </div>
    );
}