export default function Checklist({title,descriptions}) {
    //state

    //comportement

    return (
        <div className="mb-4">
            <div>
                <h4 className="mt-0">{title}</h4>
                <p className="lineHeight" style={{color: "rgba(255, 255, 255, 0.78)"}}>
                    {descriptions}
                </p>
            </div>
            <div style={{backgroundColor: "var(--color)", width: 55, height: 13}}/>
        </div>
    )
}