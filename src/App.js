import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Sky, PointerLockControls } from "@react-three/drei";
import { Physics } from "use-cannon";

import Room from "./Room";
import Fallback from "./Fallback";
import Player from "./Player";
import Meter from "./Meter";

export default function App() {
  return (
    <Canvas
      vr={true}
      style={{ height: 900, width: "100%" }}
      shadowMap
      gl={{ alpha: false }}
      camera={{
        position: [0, 6, 0],
        fov: 35
      }}
    >
      <Suspense fallback={<Fallback />}>
        <Physics gravity={[0, -30, 0]}>
          <Player />
          <Room />
          <Meter />
        </Physics>
      </Suspense>
      <Sky sunPosition={[100, 10, 100]} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[1, 10, 1]} />
      <PointerLockControls target={[0, 100, 0]} />
    </Canvas>
  );
}
