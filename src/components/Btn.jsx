import {Link} from "react-scroll";

export default function Btn({textBtn, to, id, icon, offset}) {
    //state

    //comportement

    return (
        <Link to={to} id={id} smooth={"easeInOutCubic"} duration={1000} offset={offset}>
            <button className="MyBtn d-flex align-items-center">
                {textBtn}
                <span className={icon} style={{fontSize: 33}}/>
            </button>
        </Link>
    )
}