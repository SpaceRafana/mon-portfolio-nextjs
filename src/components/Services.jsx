import {Element, Link} from "react-scroll"

import Prev from "./Prev";
import Computor3D from "./Computor3D";
import SousCalque from "./SousCalque";
import ServicesContent from "./ServicesContent";
import Detail from "./Detail";
import {useState} from "react";

export default function Services({etat, setEtat}) {
    //state

    //comportement

    return (
        <Element name="services" id="servicesElement">
            <div className="Services">
                <div className="computor">
                    <Computor3D/>
                </div>
                <SousCalque/>
                <div className="d-flex justify-content-center align-items-center py-3" style={{position: "relative", bottom: "auto"}}>
                    <div style={{background: "white", height: 1, width: 120}}/>
                    <Prev to="presentation" smooth={"easeInOutCubic"} duration={1000} offset={-250}/>
                    <div style={{background: "white", height: 1, width: 120}}/>
                </div>
                <div className="d-flex justify-content-center"
                     style={{position: "relative", top: "10%"}}>
                    <div className="d-block">
                        <ServicesContent setEtat={setEtat}/>
                    </div>
                </div>
            </div>
            <Detail etat={etat}/>
        </Element>
    )
}