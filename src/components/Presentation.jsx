import {Element} from "react-scroll";

import Competance from "./Competance";
import MonAvatar from "./MonAvatar";
import Btn from "./Btn";

export default function Presentation() {

    //state

    //comportement

    return (
        <Element name="presentation">
            <div className="presentation row">
                <div className="col-lg-7" style={{zIndex: 5}}>
                    <div>
                        <div className="d-flex align-items-center">
                            <div style={{backgroundColor: "#D6F42A", width: 5, height: 25}}/>
                            <div className="salutation">
                                <span id="ig" style={{fontFamily: "var(--chakra-font-sb), sans serif"}}>Bonjour,</span>
                                <span className="ms-3" style={{fontFamily: "var(--chakra-font-r), sans serif"}}>je suis</span>
                            </div>
                        </div>
                        <div className="nom">Ra Fanekena</div>
                        <div className="d-flex align-items-center mb-3" >
                            <svg className="iconWave" width="75" height="75"
                                 viewBox="0 0 111.65 46.029">
                                <g id="Groupe_3" data-name="Groupe 3" transform="translate(-374.5 -598.981)">
                                    <path id="Tracé_6" data-name="Tracé 6"
                                          d="M485.793,616.994V645.01H374.5V604.837c8.183-3.56,17.365-6.064,26.753-5.843C431.138,599.708,441.861,637.312,485.793,616.994Z"
                                          fill="#d6f42a"/>
                                    <path id="Tracé_7" data-name="Tracé 7"
                                          d="M456,607.561s14.268,12.128,27.11,12.128,26.4-6.421,26.4-6.421v-7.134A45.247,45.247,0,0,0,485.25,599C470.982,599,456,607.561,456,607.561Z"
                                          transform="translate(-23.356 -0.005)" fill="#a1b720"/>
                                </g>
                            </svg>
                            <h1 className="Dev">
                                Développeur front-end <span className="text-light">|</span> <span
                                style={{color: "#A1B720"}}>Graphic Designer</span>
                            </h1>
                        </div>

                        <Competance/>

                        <p className="col-10 colorWhite">
                            J'aime faire de la conception visuelle. Je suis passioné au travail artistique
                            dans le domaine du numérique.
                        </p>

                        <div className="d-flex gap-4">
                            <Btn to="services" textBtn="Découvrir" icon="ms-2 icon-plus-square"/>
                        </div>
                    </div>
                </div>

                <div className="col-lg monAvatar">
                    <MonAvatar />
                </div>
                {/*<div className="col-12 justify-content-center align-items-center d-flex" style={{zIndex: 6}}>
                    <div style={{background: "white", height: 1, width: 120}}/>
                        <Next to="services" smooth={"easeInOutCubic"} duration={1000}/>
                    <div style={{background: "white", height: 1, width: 120}}/>
                </div>*/}
            </div>
        </Element>
    )
}