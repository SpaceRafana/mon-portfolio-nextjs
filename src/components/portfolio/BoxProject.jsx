import Image from "next/image";

export default function BoxProject({setDetail, nom, caption, titre}) {

    return (
        <div className="col-lg-4 mb-4" onClick={()=> setDetail(nom)}>
            <div style={{
                display: "flex",
                borderRadius: 18,
                border: (!caption ? "1px" : "0px") + " dashed white",
                height: 308,
                cursor: "pointer",
                boxShadow: "0 8px 3px rgba(15, 15, 15, 0.55)",
                position: "relative",
                overflow: "hidden"
            }}>
                <Image alt="" src={caption} style={{height: 308, objectFit: "cover"}}/>
                <div style={{
                    background: titre ? "rgba(25, 25, 25, 0.55)" : "",
                    position: "absolute",
                    top: 13,
                    left: 13,
                    padding: "8px 23px",
                    borderRadius: 8,
                }}>
                    <p className="mb-0">{titre}</p>
                </div>
            </div>
                {/*<img src={caption} alt={altImg} height="100%" width="100%"/>*/}

        </div>
    )
}