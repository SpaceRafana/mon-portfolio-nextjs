import Image from "next/image";

export default function DetailProject({
                                          detail,
                                          setDetail,
                                          titre,
                                          sousTitre,
                                          textContent1,
                                          textContent2,
                                          image1,
                                          image2,
                                          height1,
                                          height2,
                                          date,
                                          display,
                                          posX
                                      })
{
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
                    <h3>Date : {date}</h3>
                    <p>{textContent1}</p>
                    <div className="" style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: `${posX}`,
                        borderRadius: 8,
                        height: 350,
                        border: !image2 ? "1px dashed white" : "",
                        boxShadow: "19px 13px 5px rgba(15, 15, 15, 0.55)",
                        overflow: "hidden"
                    }}>
                        <Image src={image2} rel="noreferrer" alt="capture d'écran" style={{height: `${height2}`, objectFit: "contain"}} />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div style={{
                        display: `${display}`,
                        alignItems: "center",
                        borderRadius: 8,
                        boxShadow: "19px 13px 5px rgba(15, 15, 15, 0.55)",
                        marginBottom: 21,
                        height: 350,
                        overflow: "hidden"
                    }}>
                        <Image src={image1} rel="noreferrer" alt="capture d'écran" style={{height: `${height1}`, objectFit: "cover"}} />
                    </div>
                    <h3>Mise en situation</h3>
                    <p>
                        {textContent2}
                    </p>
                </div>
            </div>

        </div>
    )
}