import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";

export default function Room() {
  const gltf = useGLTF("../public/room/bed.gltf", true);
  const [modelGeometry, setModelGeometry] = useState();

  if (!modelGeometry) {
    const modelScene = gltf.scene.clone(true);
    setModelGeometry(modelScene);
  }

  return (
    <mesh attach="material" receiveShadow scale={[1, 1, 1]}>
      <primitive object={modelGeometry} dispose={null} />
    </mesh>
  );
}
