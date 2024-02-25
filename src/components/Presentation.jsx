import {Element, Link} from "react-scroll";

import Competance from "./Competance";
import Btn from "./Btn";

import {lazy, Suspense} from "react";
const Avatar = lazy(() => import('./MonAvatar'))

export default function Presentation() {

    //state

    //comportement

    return (
        <Element name="presentation" className="presentation row">
            <div className="col-lg-6" style={{zIndex: 5}}>
                <div className="d-flex align-items-center">
                    <div style={{backgroundColor: "#D6F42A", width: 5, height: 25}}/>
                    <div className="salutation">
                        <span id="ig" style={{fontFamily: "var(--chakra-font-sb), sans serif"}}>Bonjour,</span>
                        <span className="ms-3" style={{fontFamily: "var(--chakra-font-r), sans serif"}}>moi c'est</span>
                    </div>
                </div>
                <div className="nom">Ra Fanekena</div>
                <div className="d-flex align-items-center mb-3" >
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
                    <Link to="services" smooth={"easeInOutCubic"} duration={1000}>
                        <Btn textBtn="découvrir" icon="icon-plus"/>
                    </Link>
                </div>
            </div>

            <div className="col-lg-6 monAvatar d-none d-lg-block">
                <Suspense fallback={
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh"
                    }}>
                        <span className="chakra">chargement <span className="icon-gears"/> ...</span>
                    </div>
                }>
                    <Avatar />
                </Suspense>
            </div>
        </Element>
    )
}