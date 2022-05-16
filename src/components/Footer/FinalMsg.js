export default function FinalMsg({ finalMsg }) {
    return (
        <div className="final-msg">
            <div className="title">
                <img src={finalMsg.icon} alt="icon" />
                <span>{finalMsg.title}</span>
            </div>
            <span className="text">{finalMsg.text}</span>
        </div>
    );
}