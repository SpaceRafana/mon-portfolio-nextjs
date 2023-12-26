import "../styles/bootstrap/bootstrap.min.css"
import "../styles/bootstrap/icomoon/style.css"
import "../styles/styles.css"
import localFont from "next/font/local";
const handjet = localFont({src: "../fonts/handjet/static/Handjet-Medium.ttf"})
const chakra = localFont({src: "../fonts/Chakra_Petch/ChakraPetch-Regular.ttf"})
const chakraSemibold = localFont({src: "../fonts/Chakra_Petch/ChakraPetch-SemiBold.ttf"})
const segoeUI = localFont({src: "../fonts/Segoe UI/segoeui.ttf"})

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <style jsx global>
                {`
                    :root {
                        --handjet-font: ${handjet.style.fontFamily};
                        --chakra-font-sb: ${chakraSemibold.style.fontFamily};
                        --chakra-font-r: ${chakra.style.fontFamily};
                        --segoeUI: ${segoeUI.style.fontFamily};
                    }
                `}
            </style>
            <Component {...pageProps} />
        </>
    )

}