export default function Answer ({type, value, color}){
    return (
        <div className={`button ${color}`}>
            {type === "img" ? <img src={value} alt="play"/> : <span>{value}</span>}
        </div>
    );
}