import "./style.css"

export default function Logo(props) {
    return (
        <div  className="logo">
            <div className={props.logoType}>
                {props.children}
            </div>
        </div>

    );
}