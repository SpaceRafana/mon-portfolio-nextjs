import Image from "next/image";
import Logo from "../img/space-rafana-logo-1080.svg";

export default function Navbar() {
    //state

    //comportement

    //affichage
    return (
        <div className="navigation">
            <nav className="navlink">
                <div className="row d-flex align-items-center">
                    <div className="col-4 d-flex align-items-center">
                        <div className="">
                            <a href={"mailto: fanekena.f12@gmail.com"} className="buttonNav d-flex align-items-center">
                                <span className="icon-mail2 fs-4"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <Image src={Logo} style={{width: 63, height: 63}} alt="logo space rafana"/>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                        <div style={{display: "flex", alignItems: "center"}}>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}