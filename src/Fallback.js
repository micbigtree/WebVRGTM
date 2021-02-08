import React from "react";
import { Sphere } from "@react-three/drei";

export default function Fallback() {
  return (
    <Sphere>
      <meshBasicMaterial attach="material" color="hotpink" />
    </Sphere>
  );
}

//style="display: block; width: 1221px; height: 700px;"
