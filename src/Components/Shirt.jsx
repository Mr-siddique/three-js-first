import React from 'react';
import {easing} from "maath"
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useTexture, useGLTF } from '@react-three/drei';
import _logoTexture from "../assets/public/threejs.png"
import _fullTexture from "../assets/public/threejs.png"
import _shirt from "../assets/public/shirt_baked.glb";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { useEffect } from "react";
function Shirt() {
    const {nodes, materials} = useGLTF(_shirt);
    const logoTexture = useTexture(_logoTexture);
    const fullTexture = useTexture(_fullTexture);
  return (
    <group>
        <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        // material-rougness={1}
        dispose={null}
        >

        </mesh>
    </group>
  );
}

export default Shirt;