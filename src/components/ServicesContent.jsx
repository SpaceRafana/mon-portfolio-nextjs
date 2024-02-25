import {Link} from "react-scroll"
import Btn from "./Btn";

export default function ServicesContent({setEtat}) {

    //comportement
    const handlePortfolio = () => {
        setEtat("portfolio")
    }

    const handleOne = () => {
        setEtat("one")
    }

    const handleTwo = () => {
        setEtat("two")
    }

    return (
        <>
            <div className="mb-4">
                <h2>Ce que je fait ?</h2>
                <p className="">
                    Concevoir du contenu riche en esthétique. <br/>Je communique à travers le visuel.
                    <br/>Graphic designer et développeur front-end
                </p>
                <div className="d-flex justify-content-center">
                    <Link to="detail" smooth={"easeInOutCubic"} duration={1000} onClick={handlePortfolio}>
                        <Btn textBtn="portfolio" icon="icon-folder-open"/>
                    </Link>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="box1 col-lg-6" style={{cursor: "pointer"}} >
                    <Link to="detail" smooth={"easeInOutCubic"} duration={1000} onClick={handleOne}>
                        <div className={"boxing1"}>
                            <div className="title">
                                <div className="text-start">
                                    <p className="mb-0 chakra-sb">Graphic design</p>
                                    <div style={{background: "var(--color)", width: 65, height: 15, marginTop: 5}}/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="box2 col-lg-6" style={{cursor: "pointer"}} >
                    <Link to="detail" smooth={"easeInOutCubic"} duration={1000} onClick={handleTwo}>
                        <div className={"boxing2"}>
                            <div className="title">
                                <div className="text-start lineHeight">
                                    <p className="mb-0 chakra-sb">Dev front-end</p>
                                    <div style={{background: "var(--color)", width: 65, height: 15, marginTop: 5}}/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}