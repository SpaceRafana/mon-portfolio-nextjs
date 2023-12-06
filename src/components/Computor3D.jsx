import {useRef} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import {Model} from "./3d/Model";

export default function Computor3D() {
    const ref = useRef()

    return (
        <Canvas shadows camera={{position: [0,0,7]}}>
            <Model />
            <directionalLight position={[0,0,5]}/>
            <ambientLight/>
        </Canvas>
    )
}