import {Link} from "react-scroll"

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
                <p className="offset-lg-3 col-lg-6">
                    {/*Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                    exerci.*/}
                    Mon occupation c'est de concevoir du contenu riche en esthétique et
                    créativité. Je communique à travers le visuel. Graphic designer et développeur
                    front-end
                </p>
                <div className="d-flex justify-content-center">
                    <Link to="detail" smooth={"easeInOutCubic"} duration={1000} onClick={handlePortfolio}>
                        <div className="MyBtn d-flex align-items-center">Portfolio <span className="ms-2 icon-folder-open"/></div>
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