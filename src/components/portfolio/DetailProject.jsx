import Image from "next/image";

export default function DetailProject({detail, setDetail, titre, sousTitre, textContent1, textContent2, image1, image2}) {
    //state

    //comportement

    return (
        <div className={(detail ? "fadeIn" : "") + " detailProject"}>
            <div className="d-flex align-items-center gap-5">
                <h1>{titre}</h1>
                <div className="MyBtn" onClick={() => setDetail("portfolio")}>
                    <span className="icon-arrow-left2 align-self-center d-flex"/>
                </div>
            </div>
            <div className="row gap-5">
                <div className="col-lg-4">
                    <h2 className="colorGreen">{sousTitre}</h2>
                    <p>{textContent1}</p>
                    <div className="" style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        borderRadius: 8,
                        height: 350,
                        border: !image2 ? "1px dashed white" : "",
                        boxShadow: "0 5px 5px rgb(35,35,35)",
                        overflow: "hidden"
                    }}>
                        <Image src={image2} alt="" style={{height: 350, objectFit: "contain"}} />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: 8,
                        boxShadow: "0 5px 5px rgb(35,35,35)",
                        marginBottom: 21,
                        height: 350,
                        overflow: "hidden"
                    }}>
                        <Image src={image1} alt="" style={{height: 350, objectFit: "cover"}} />
                    </div>
                    <h3>Mise en situation réel</h3>
                    <p>
                        {textContent2}
                    </p>
                </div>
            </div>

        </div>
    )
}