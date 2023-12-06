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
                <meta title="Portfolio Space Rafana" />
                <meta description="Lorem ipsum" />
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