import {Element} from "react-scroll"
import Navbar from "../../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import flecheBas from "../../img/fleche-bas.svg"
import image1 from "../../img/mockup-chips---Copie.jpg"
import image2 from "../../img/etape-1.jpg"
import image2_2 from "../../img/masque-de-fusion.jpg"
import image3 from "../../img/etape-3.jpg"
import Prev from "../../components/Prev";
import Next from "../../components/Next";

export default function Index() {
    return (
        <>
            <Head>
                <link rel="icon" href="/icon-250x250.png"/>
                <title>Space Rafana</title>
                <meta title="Mockup et étiquetage de produit avec Photoshop"/>
                <meta description="Mettre en situation un design d'étiquette de produit avec photoshop pour exprimer et
                visualiser son esthétique, "/>
            </Head>
            <main className="App">
                <Navbar/>
                <Element name="intro">
                    <div className="presentation">
                        <div style={{marginTop: "10%"}}>
                            <h1 className="">
                                <b>Mockup</b> et <b>étiquetage</b> en Photoshop.
                            </h1>
                            <div className="row">
                                <div className="col-lg-6">
                                    <p>
                                        Il est important de noter qu'en créant un design d'étiquette de produit, il est
                                        important de prendre en compte l'esthétique en réel, qui est l'essence du
                                        travail du designer. Sur ce tutoriel Photoshop, nous allons voir comment créer
                                        un mockup et visualiser notre design d'étiquetage sur un packaging réel. Nous
                                        prendrons l'exemple d'étiquetage d'un template d'emballage de chips.<br/><br/>
                                        Commençons ! ;-)
                                    </p>
                                    <div className="d-flex mb-4 ms-5">
                                        <div className="d-flex align-items-center me-3">
                                            <div className="icon-gears fs-4"/>
                                            <div className="handjet ms-2 fs-5">Adobe Photoshop</div>
                                        </div>
                                    </div>
                                    <div className="mb-4" style={{background: "white", height: 1}} />
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="handjet fs-5 colorGreen">Parcourir les étapes</div>
                                        <Next to="developpement" smooth="easeInOutCubic" duration={1000}/>
                                    </div>
                                </div>
                                <div className="col-lg-6 overflow-hidden d-lg-flex d-none justify-content-end">
                                    <Image src={image1} alt="" height={354} style={{borderRadius: 8}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Element>
                <Element name="developpement">
                    <div className="presentation py-3" style={{
                        backgroundColor: "rgba(2,2,2,0.3)", overflowY: "auto",
                        backdropFilter: "blur(8px)", overflowX: "hidden"
                    }}>
                        <div className="d-flex justify-content-center align-items-center" style={{position: "relative", bottom: "auto"}}>
                            <div style={{background: "white", height: 1, width: 120}}/>
                            <Prev to="presentation" smooth={"easeInOutCubic"} duration={1000} offset={-250}/>
                            <div style={{background: "white", height: 1, width: 120}}/>
                        </div>

                        <h2>Ouvrir le template de chips sur photoshop, puis importé le design d'étiquette.</h2>

                        <div className="row">
                            <p>
                                Avant toute chose, il est important de comprendre la conception d'un mockup(mise en
                                situation réelle), qui repose sur deux calques essentiels.
                            </p>
                            <div className="col-lg-6">
                                <h3>Template</h3>
                                <p>
                                    Le calque en image du template ou modèle neutre de l'objet, qu'il s'agisse par exemple
                                    d'une boîte, d'un sac, d'un t-shirt, d'un mug etc. Le modèle est généralement utilisé
                                    pour placer l'étiquette.<br/>
                                    Si vous souhaitez vous entraîner sur ce tutoriel ou réaliser un véritable projet,
                                    mais que vous n'avez pas de modèle, vous pouvez le <a
                                    href="https://spacerafana.gumroad.com/I/mockup" target="_blank" title="Templates"
                                    className="colorGreen text-decoration-underline">
                                    téléchager ici</a>.
                                </p>
                                <h3>Etiquette</h3>
                                <p className="mb-4">
                                    Afin de créer un aperçu réaliste, il convient d'intégrer le design d'étiquette sur le
                                    template.<br/><br/>
                                    On a deux calques à présent qui constituent le template et le design d'étiquette.
                                </p>
                            </div>
                            <div
                                className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center justify-content-lg-end">
                                <Image src={image2} alt="" width={485} style={{borderRadius: 8}}/>
                            </div>
                        </div>

                        <div className="row">
                            <h2 className="">
                                <b>Outil sélection</b> et <b>masque de fusion</b>.
                            </h2>
                            <p className="col-lg-12">
                                L'outil de sélection est un des outils spécifiques à Photoshop qui permet de sélectionner
                                une zone dans une image et d'effectuer des modifications sur cette zone.
                                Sur le calque d'image du modèle de chips, on va sélectionner la partie de l'emballage
                                à l'aide de l'outil.<br/><br/>
                            </p>
                            <div className="col-lg-6">
                                <p>
                                    Après avoir sélectionné la zone. Il faut créer un masque de fusion sur le calque
                                    d'étiquette. <br/>L'activation du masque de fusion se trouve dans la fenêtre du
                                    calque à l'extrémité bas.<br/>
                                    NB: ne pas désactiver la sélection jusqu'à ce que le masque de fusion est créé au
                                    calque de l'étiquette.<br/><br/>
                                    De ce fait, un masque de fusion a été créer sur l'étiquette à partir de la sélection
                                    effectuer sur le modèle pour pouvoir faire les modifications qu'à la limite de cette
                                    zone.
                                </p>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
                                <Image src={image2_2} width={454} alt="" style={{borderRadius: 8}}/>
                            </div>
                        </div>

                        <div className="row">
                            <h2>
                                Paramétrage de <b>mode de fusion</b> à "<b>densité linéaire +</b>"
                            </h2>
                            <p className="col-lg-12 mb-5">
                                C'est quoi les modes de fusion? Les modes de fusion dans Photoshop permettent de mélanger
                                les pixels de couleur entre le calque supérieur et le calque inférieur.
                                Afin d'obtenir l'effet souhaité, il est essentiel que le calque supérieur soit modifié
                                , mais aucun cas le calque inférieur<br/>
                            </p>
                            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-start mb-4">
                                <Image src={image3} alt="" height={485} style={{borderRadius: 8}}/>
                            </div>
                            <p className="col-lg-6">
                                Le paramétrage de mode de fusion se trouve dans la fenêtre de calque à côté du réglage
                                d'opacité, qui est un menu déroulant par défaut "Normal".<br/><br/>
                                Alors pour finir, on va changer la valeur de fusion par défaut "Normal" du calque de
                                l'étiquette par "Densité linéaire +". Pour obtenir un résultat réaliste, les couleurs de
                                l'étiquette(calque supérieur) seront fusionnées avec les ombres et les zones claires et
                                sombres du template(calque inférieur).
                            </p>
                        </div>
                    </div>
                </Element>
            </main>
        </>
    )

}