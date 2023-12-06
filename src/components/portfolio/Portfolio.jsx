import WebDesign from "../../img/presentation-web-design.png";
import screenWebDesign from "../../img/web-design-photographie.JPG"
import TmplPub from "../../img/template-pub-reseausociaux.jpg"
import msTmplPub from "../../img/FB-interface-with-project.jpg"
import screenTmplPub from "../../img/tmpl-pub.JPG"
import CarteVisite from "../../img/business-card.jpg"
import screenCarteVisite from "../../img/screen-business-card.JPG"
import BoxMedicine from "../../img/box-medicine.jpg"
import screenBoxMedicine from "../../img/medicine.JPG"
import ChipsPackaging from "../../img/mockup-chips.jpg"
import screenChipsPackaging from "../../img/etiquettage-chips.JPG"
import TmplPub2 from "../../img/design-pub.jpg"
import screenTmplPub2 from "../../img/tmpl-pub-2.JPG"
import msTmplPub2 from "../../img/mise-en-situation-tmpl-pub.jpg"

import BoxProject from "./BoxProject";
import DetailProject from "./DetailProject";
import {useState} from "react";
import Btn from "../Btn";

export default function Portfolio() {
    //state
    const [detail, setDetail] = useState("portfolio")

    //comportement
    console.log(detail)

    const allProject =
        <div className="bodyPortfolio">
            <h1 className="text-lg-center colorGreen">Portfolio</h1>
            <div className="row my-5 PFContent">
                <BoxProject caption={WebDesign} titre="Web design" setDetail={setDetail} nom={"projet1"}/>
                <BoxProject caption={TmplPub} titre="Template" setDetail={setDetail} nom={"projet2"}/>
                <BoxProject caption={CarteVisite} titre="Impression" setDetail={setDetail} nom={"projet3"}/>
                <BoxProject caption={BoxMedicine} titre="Etiquettage & packaging" setDetail={setDetail} nom={"projet4"} />
                <BoxProject caption={ChipsPackaging} titre="Mockups" setDetail={setDetail} nom={"projet5"} />
                <BoxProject caption={TmplPub2} titre="Brochure" setDetail={setDetail} nom={"projet6"} />
            </div>
        </div>

    return (
        <div className="portfolio">
            {
                detail==="portfolio" ? allProject
                : detail==="projet1" ? (
                        <DetailProject
                            detail={detail}
                            setDetail={setDetail}
                            image1={WebDesign}
                            image2={screenWebDesign}
                            titre="Projet #1"
                            sousTitre="Web design"
                            textContent1="
                            Projet personnel que j'ai créé avec Adobe XD. Une maquette web concernant un thème de site photographie."
                            textContent2="
                            Avec Photoshop, j’ai créé sa mise en situation sur l’interface du navigateur web sur une version Mockup."
                        />)
                : detail==="projet2" ? (
                        <DetailProject
                            detail={detail}
                            setDetail={setDetail}
                            image1={msTmplPub}
                            image2={screenTmplPub}
                            titre="Projet #2"
                            sousTitre="Cover Template"
                            textContent1="
                            Ce projet est un design de template pour une post de réseau sociaux créé avec Adobe Illustrator,
                            que ce soit pour une publication publicitaire ou d’information."
                            textContent2="
                            Ici j’ai pris en exemple l’interface du réseau social Facebook pour illustrer comment le design
                             s’affichera en réel."
                        />)
                : detail==="projet3" ? (
                        <DetailProject
                            detail={detail}
                            setDetail={setDetail}
                            image1={CarteVisite}
                            image2={screenCarteVisite}
                            titre="Projet #3"
                            sousTitre="Carte de visite"
                            textContent1="
                            Ce projet a été conçu avec Adobe Illustrator qui est un outil indispensable pour le design
                            d’impression en papier. "
                            textContent2="
                            Sur cette image j’ai utilisé l’outil Blender (logiciel de conception 3d) que j’ai ajouter plus
                            de ma propre créativité en créant ce fond en abstraction un peu futuriste."
                        />)
                : detail==="projet4" ? (
                        <DetailProject
                            detail={detail}
                            setDetail={setDetail}
                            image1={BoxMedicine}
                            image2={screenBoxMedicine}
                            titre="Projet #4"
                            sousTitre="Packaging"
                            textContent1="
                            Sur ce projet j’ai utilisé Adobe Illustrator en créant le design de l’étiquetage d’une boite
                            de médicament avec les zones de découpage et pliage."
                            textContent2="
                            Pour présenter comment est le design en réalité, j’ai utilisé Blender pour reconstruire la boite
                            en 3d avec l’étiquette dessus, et d’avoir l’effet réaliste possible."
                        />)
                : detail==="projet5" ? (
                        <DetailProject
                            detail={detail}
                            setDetail={setDetail}
                            image1={ChipsPackaging}
                            image2={screenChipsPackaging}
                            titre="Projet #5"
                            sousTitre="Mockups chips"
                            textContent1="
                            Ici en peu dire aussi que c’est un design d’étiquetage. Créé avec Adobe Illustrator pour un
                            design de paquet de chips."
                            textContent2="
                            Le plus important dans le Mockup c’est de voir le design sur l’objet physique en réel pour
                            bien constater si le design est-il parfait et adapté à l’objet. Cette fois ci j’ai utilisé
                            Photoshop avec l’effet dispersion pour donner l’effet réaliste de froissement du design en
                            rapport avec le froissement du sachet de chips. "
                        />)
                : detail==="projet6" ? (
                        <DetailProject
                            detail={detail}
                            setDetail={setDetail}
                            image1={msTmplPub2}
                            image2={screenTmplPub2}
                            titre="Projet #6"
                            sousTitre="Brochure"
                            textContent1="
                            Design de brochure créé avec Adobe Illustrator. J’ai conçu l’image de fond 3d avec Blender."
                            textContent2="
                            Mise en situation avec Photoshop sur un template de papier à brochure."
                        />)
                : null
            }
        </div>
    )
}