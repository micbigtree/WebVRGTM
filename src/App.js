import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Sky, PointerLockControls } from "@react-three/drei";

import Room from "./Room";
import Fallback from "./Fallback";

export default function App() {
  return (
    <Canvas
      style={{ height: 750, width: "100%" }}
      shadowMap
      gl={{ alpha: false }}
      camera={{ fov: 35 }}
    >
      <Suspense fallback={<Fallback />}>
        <Room />
      </Suspense>
      <Sky sunPosition={[100, 10, 100]} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <PointerLockControls />
    </Canvas>
  );
}
