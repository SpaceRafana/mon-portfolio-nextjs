import Head from "next/head";
import {useState} from "react";

import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import Services from "../components/Services";

export default function App() {
    //state
    const [etat, setEtat] = useState("portfolio")

    return (
        <>
            <Head>
                <link rel="icon" href="/icon-250x250.png"/>
                <title>Space Rafana</title>
                <meta name="google-site-verification" content="ClrhYn2sjxEZYRtZjb9GgRIB2hc0cSt2R6F-3bcUvG0"/>
                <meta title="Portfolio Space Rafana" />
                <meta name="description" content="Développeur front-end et graphic designer. Construire la partie visuelle.
                    Mettre de l'ésthetique et créativité." />
            </Head>

            <main className="App">
                <Navbar/>
                <Presentation />
                <Services etat={etat} setEtat={setEtat}/>
            </main>
        </>
    )
}