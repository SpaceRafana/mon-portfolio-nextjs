import {Link} from "react-scroll";

export default function Next({to, smooth, duration, offset}) {

    return (
        <Link to={to} smooth={smooth} duration={duration}
              style={{cursor: "pointer"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 56 56" style={{marginInline: 15}} className="btnNext">
                <g id="Go_to_next" data-name="Go to next" transform="translate(1783.526 961.286) rotate(180)">
                    {/*<g id="Ellipse_1" data-name="Ellipse 1" transform="translate(1783.526 961.286) rotate(-180)"
                       fill="none" stroke="#d6f42a" strokeWidth="2" >
                        <circle cx="28" cy="28" r="28" stroke="none"/>
                        <circle cx="28" cy="28" r="27" fill="none"/>
                    </g>*/}
                    <path id="Tracé_12" data-name="Tracé 12"
                          d="M203.387,443.606a1.888,1.888,0,0,1-1.467-3.076l9.172-11.33a1.888,1.888,0,0,1,1.459-.7h.009a1.888,1.888,0,0,1,1.456.686l9.351,11.33a1.888,1.888,0,1,1-2.913,2.4l-7.881-9.548-7.718,9.534A1.884,1.884,0,0,1,203.387,443.606Z"
                          transform="translate(1542.338 489.69)" fill="#d6f42a"/>
                    <path id="Tracé_13" data-name="Tracé 13"
                          d="M199.386,533.845H164.678a1.167,1.167,0,0,1,0-2.334h34.708a1.167,1.167,0,0,1,0,2.334Z"
                          transform="translate(1573.494 405.204)" fill="#d6f42a"/>
                    <path id="Tracé_14" data-name="Tracé 14"
                          d="M223.9,556.345H202.678a1.167,1.167,0,0,1,0-2.334H223.9a1.167,1.167,0,0,1,0,2.334Z"
                          transform="translate(1542.328 386.75)" fill="#d6f42a"/>
                </g>
            </svg>
        </Link>
    )
}