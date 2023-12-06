/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/models/avatar.glb 
*/

import React, {useRef} from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'
import {useFrame} from "@react-three/fiber";

export function Avatar(props) {
    //state
    const group = useRef()
    const {nodes, materials, animations} = useGLTF('models/avatar.glb')
    const {actions} = useAnimations(animations, group)

    //comportement
    useFrame(() => {
        actions["standing"].play()
    })

    return (
        <group ref={group} {...props} dispose={null} rotation-y={-0.3} position-y={-Math.PI / 2}>
            <group name="Scene">
                <group name="Armature">
                    <primitive object={nodes.Hips}/>
                    <skinnedMesh morphTargetInfluences={[0]} name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry}
                                 material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton}/>
                    <skinnedMesh morphTargetInfluences={[0]} name="Wolf3D_Hair" geometry={nodes.Wolf3D_Hair.geometry}
                                 material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton}/>
                    <skinnedMesh morphTargetInfluences={[0]} name="Wolf3D_Outfit_Bottom"
                                 geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                                 material={materials.Wolf3D_Outfit_Bottom}
                                 skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}/>
                    <skinnedMesh morphTargetInfluences={[0]} name="Wolf3D_Outfit_Footwear"
                                 geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                                 material={materials.Wolf3D_Outfit_Footwear}
                                 skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}/>
                    <skinnedMesh morphTargetInfluences={[0]} name="Wolf3D_Outfit_Top"
                                 geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top}
                                 skeleton={nodes.Wolf3D_Outfit_Top.skeleton}/>
                    <skinnedMesh morphTargetInfluences={[0]} name="EyeLeft" geometry={nodes.EyeLeft.geometry}
                                 material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton}/>
                    <skinnedMesh morphTargetInfluences={[0]} name="EyeRight" geometry={nodes.EyeRight.geometry}
                                 material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton}/>
                    <skinnedMesh morphTargetInfluences={[0]} name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry}
                                 material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton}/>
                    <skinnedMesh morphTargetInfluences={[0]} name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry}
                                 material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton}/>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('models/avatar.glb')
