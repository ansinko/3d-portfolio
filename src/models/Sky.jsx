import {useRef} from 'react';

import skyScene from '../assets/3d/sky.glb';
import {useGLTF} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";


function Sky({isRotating}) {
    const skyRef = useRef();
    const sky = useGLTF(skyScene)

    useFrame((_, delta) => {
        if (isRotating) {
            skyRef.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene}></primitive>
        </mesh>
    );
}

export default Sky;