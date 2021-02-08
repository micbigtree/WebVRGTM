import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { usePlane } from "use-cannon";

import MeterShape from "../public/meter/meter.glb";

export default function Meter() {
  const gltf = useGLTF(MeterShape, true);
  const [modelGeometry, setModelGeometry] = useState();

  if (!modelGeometry) {
    const modelScene = gltf.scene.clone(true);
    setModelGeometry(modelScene);
  }

  return (
    <>
      <mesh
        attach="material"
        receiveShadow
        scale={[0.25, 0.25, 0.25]}
        rotation={[0, -1.5, 0]}
        position={[2, 6, 0]}
      >
        <primitive object={modelGeometry} dispose={null} />
      </mesh>
    </>
  );
}
