import {Link} from "react-scroll";

export default function Btn({textBtn, to, id, icon, offset}) {
    //state

    //comportement

    return (
        <button className="MyBtn d-flex gap-2 align-items-center">
            <span className={icon + " fs-4"} style={{fontSize: 33}}/>
            {textBtn}
        </button>
    )
}