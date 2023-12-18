import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import Services from "../components/Services";
import {useState} from "react";
import Head from "next/head";

export default function Index() {
    //state
    const [etat, setEtat] = useState("")

    //comportements

    return (
        <>
            <Head>
                <title>Space Rafana</title>
                <meta name="google-site-verification" content="ClrhYn2sjxEZYRtZjb9GgRIB2hc0cSt2R6F-3bcUvG0"/>
                <meta title="Portfolio Space Rafana" />
                <meta description="Développeur front-end et graphic designer. Construire la partie visuelle.
                Mettre de l'ésthetique et créativité." />
                <link rel="icon" href="/icon-250x250.png"/>
            </Head>

            <main className="App">
                <Navbar/>
                <Presentation />
                <Services etat={etat} setEtat={setEtat}/>
            </main>
        </>
    );
};