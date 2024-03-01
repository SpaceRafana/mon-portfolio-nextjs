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
import magasinePub from "../../img/poster.jpg"
import screenMagasinePub from "../../img/affiche-catalogue.jpg"

import BoxProject from "./BoxProject";
import DetailProject from "./DetailProject";
import {useState} from "react";

export default function Portfolio() {
    //state
    const [detail, setDetail] = useState("portfolio")

    //comportement

    const allProject =
        <div className="bodyPortfolio">
            <h1 className="text-lg-center colorGreen">Mes Projets</h1>
            <div className="row my-5 PFContent">
                <BoxProject caption={WebDesign} titre="Web design" setDetail={setDetail} nom={"projet1"}/>
                <BoxProject caption={TmplPub} titre="Template de Bannière" setDetail={setDetail} nom={"projet2"}/>
                <BoxProject caption={CarteVisite} titre="Carte de visite" setDetail={setDetail} nom={"projet3"}/>
                <BoxProject caption={BoxMedicine} titre="Etiquetage & packaging" setDetail={setDetail} nom={"projet4"} />
                <BoxProject caption={ChipsPackaging} titre="Etiquetage & Mockups" setDetail={setDetail} nom={"projet5"} />
                <BoxProject caption={TmplPub2} titre="Template de Brochure" setDetail={setDetail} nom={"projet6"} />
                <BoxProject caption={magasinePub} titre="Affiche" setDetail={setDetail} nom={"projet7"} />
            </div>
        </div>

    return (
        <div className="portfolio">
            {
                detail==="portfolio" ? allProject
                : detail==="projet1" ? (
                        <DetailProject
                            date="14 Août 2023"
                            detail={detail}
                            setDetail={setDetail}
                            image1={WebDesign}
                            height1="350px"
                            image2={screenWebDesign}
                            height2="350px"
                            titre="Projet #1"
                            sousTitre="Web design"
                            textContent1="
                            Projet personnel que j'ai créé avec Adobe XD. Une maquette web concernant un thème de site photographie."
                            textContent2="
                            Avec Photoshop, j’ai créé sa mise en situation sur l’interface du navigateur web sur une version Mockup."
                            display="flex"
                            posX="start"
                        />)
                : detail==="projet2" ? (
                        <DetailProject
                            date="29 Novembre 2023"
                            detail={detail}
                            setDetail={setDetail}
                            image1={msTmplPub}
                            height1="350px"
                            image2={screenTmplPub}
                            height2="350px"
                            titre="Projet #2"
                            sousTitre="Bannière"
                            textContent1="
                            Ce projet est un design de template pour une bannière de publicité réseau sociaux créé avec
                            Adobe Illustrator."
                            textContent2="
                            Ici j’ai pris en exemple l’interface du réseau social Facebook pour illustrer comment le design
                             s’affichera en réel."
                            display="flex"
                            posX="start"
                        />)
                : detail==="projet3" ? (
                        <DetailProject
                            date="15 Avril 2023"
                            detail={detail}
                            setDetail={setDetail}
                            image1={CarteVisite}
                            height1="350px"
                            image2={screenCarteVisite}
                            height2="350px"
                            titre="Projet #3"
                            sousTitre="Carte de visite"
                            textContent1="
                            Ce projet a été conçu avec Adobe Illustrator qui est un outil indispensable pour le design
                            d’impression en papier. "
                            textContent2="
                            Sur cette image j’ai utilisé l’outil Blender (logiciel de conception 3d) que j’ai ajouter plus
                            de ma propre créativité en créant ce fond en abstraction un peu futuriste."
                            display="flex"
                            posX="start"
                        />)
                : detail==="projet4" ? (
                        <DetailProject
                            date="26 Septembre 2023"
                            detail={detail}
                            setDetail={setDetail}
                            image1={BoxMedicine}
                            height1="350px"
                            image2={screenBoxMedicine}
                            height2="350px"
                            titre="Projet #4"
                            sousTitre="Packaging"
                            textContent1="
                            Sur ce projet j’ai utilisé Adobe Illustrator en créant le design de l’étiquetage d’une boite
                            de médicament avec les zones de découpage et pliage."
                            textContent2="
                            Pour présenter comment est le design en réalité, j’ai utilisé Blender pour reconstruire la boite
                            en 3d avec l’étiquette dessus, et d’avoir l’effet réaliste possible."
                            display="flex"
                            posX="start"
                        />)
                : detail==="projet5" ? (
                        <DetailProject
                            date="27 Septembre 2023"
                            detail={detail}
                            setDetail={setDetail}
                            image1={ChipsPackaging}
                            height1="350px"
                            image2={screenChipsPackaging}
                            height2="350px"
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
                            display="flex"
                            posX="start"
                        />)
                : detail==="projet6" ? (
                        <DetailProject
                            date="22 Septembre 2023"
                            detail={detail}
                            setDetail={setDetail}
                            image1={msTmplPub2}
                            height1="350px"
                            image2={screenTmplPub2}
                            height2="350px"
                            titre="Projet #6"
                            sousTitre="Brochure"
                            textContent1="
                            Design de brochure créé avec Adobe Illustrator. J’ai conçu l’image de fond 3d avec Blender."
                            textContent2="
                            Mise en situation avec Photoshop sur un template de papier à brochure."
                            display="flex"
                            posX="start"
                        />)
                : detail==="projet7" ? (
                        <DetailProject
                            date="19 Decembre 2021"
                            detail={detail}
                            setDetail={setDetail}
                            image1={screenMagasinePub}
                            height1="350px"
                            image2={magasinePub}
                            height2="365px"
                            titre="Projet #5"
                            sousTitre="Affiche"
                            textContent1="Affiche publicitaire créer avec photoshop en utilisant masque d'écrêtage et
                            effet d'ombrage."
                            textContent2="
                            Mise en situation avec Photoshop sur un template de papier à brochure."
                            display="flex"
                            posX="center"
                        />)
                : null
            }
        </div>
    )
}