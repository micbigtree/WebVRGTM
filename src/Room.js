import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { usePlane } from "use-cannon";

import RoomShape from "../public/room/bed.glb";

export default function Room() {
  const gltf = useGLTF(RoomShape, true);
  const [modelGeometry, setModelGeometry] = useState();

  if (!modelGeometry) {
    const modelScene = gltf.scene.clone(true);
    setModelGeometry(modelScene);
  }

  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 6, 0]
  }));

  return (
    <>
      <mesh
        attach="material"
        receiveShadow
        scale={[1, 1, 1]}
        position={[-2, 0, 10]}
      >
        <primitive object={modelGeometry} dispose={null} />
      </mesh>
      {/* <mesh ref={ref}>
        <planeBufferGeometry color={"none"} args={[1000, 1000]} />
      </mesh> */}
    </>
  );
}
