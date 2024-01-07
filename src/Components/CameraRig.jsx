import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";

function CameraRig({ children }) {
  const group = useRef(null);

  useFrame((state, delta) => {
    const isBreakPoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // set initial position
    let targetPostion = [-0.4, 0, 2];
    if (isBreakPoint) {
      targetPostion = [0, 0, 2];
    }
    if (isMobile) {
      targetPostion = [0, 0.2, 2.5];
    }
    easing.damp3(state.camera.position, targetPostion, 0.25, delta);

    // set the model rotation smoothly
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return (
    <group ref={group}>
      <perspectiveCamera
        position={[0, 0, 5]} // Adjust the distance of the camera from the scene
        fov={80} // Adjust the field of view
        near={0.1}
        far={100}
      />
      {children}
    </group>
  );
}

export default CameraRig;
