import Checklist from "./Checklist";

export default function GraphicDesign() {
    //state

    //comportement

    return (
        <div className="GraphicDesign">
            <h2 className="text-capitalize mb-4">Graphic design</h2>
            <div className="d-flex justify-content-between">
                <div className="col-lg-5">
                    <Checklist
                        title="Design UI"
                        descriptions="Illustrator | Photoshop | XD"/>
                    <Checklist
                        title="Infographie"
                        descriptions="Illustrator | Photoshop"/>
                    <Checklist
                        title="Etiquettage/Packaging"
                        descriptions="Illustrator | Photoshop"/>
                </div>
            </div>
        </div>
    )
};