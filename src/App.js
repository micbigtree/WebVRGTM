import React from "react";
import { Canvas } from "react-three-fiber";
import { Sky, PointerLockControls } from "@react-three/drei";

export default function App() {
  return (
    <Canvas
      style={{ height: 750, width: "100%" }}
      shadowMap
      gl={{ alpha: false }}
      camera={{ fov: 35 }}
    >
      <Sky sunPosition={[100, 10, 100]} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <PointerLockControls />
    </Canvas>
  );
}

//style="display: block; width: 1221px; height: 700px;"
