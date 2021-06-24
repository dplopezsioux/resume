import React from "react";
import { useLoader, Suspense, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { Stars } from "@react-three/drei";

import "./css/earth.css";

const EarthLoader = () => {
  return (
    <mesh>
      <Stars
        radius={100} // Radius of the inner sphere (default=100)
        depth={50} // Depth of area where stars should fit (default=50)
        count={5000} // Amount of stars (default=5000)
        factor={4} // Size factor (default=4)
        saturation={0} // Saturation 0-1 (default=0)
        fade // Faded dots (default=false)
      />
    </mesh>
  );
};

const Earth = () => {
  return (
    <div className="boxearth">
      <Canvas>
        <EarthLoader />
      </Canvas>
    </div>
  );
};

export default Earth;
