import {Avatar} from "./3d/Avatar";
import {Canvas} from "@react-three/fiber";

export default function  MonAvatar() {
    return (
        <Canvas camera={{position: [0, 0, 1]}}>
            <Avatar/>
            <directionalLight position={[0, 3, 2]}/>
            <ambientLight intensity={3}/>
            <pointLight position={[2.5, 3, 2]} color={"purple"} intensity={8}/>
        </Canvas>
    )
}