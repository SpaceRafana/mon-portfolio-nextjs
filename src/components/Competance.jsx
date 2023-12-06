import {useState} from "react";

export default function Competance() {
    const [style,setStyle] = useState({
        border: "1px solid rgba(255, 255, 255, 0.50)",
        width: 18,
        height: 5,
        borderRadius: 100,
        marginRight: 18
    })
    return (
        <div className="Competance">
            <div style={style}/>
            <div className="me-3">React</div>
            <div style={style}/>
            <div className="me-3">Adobe Illustrator</div>
            <div style={style}/>
            <div className="me-3">Adobe Photoshop</div>
            <div style={style}/>
            <div className="me-3">Adobe XD</div>
        </div>
    )
}