import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { Stars, OrbitControls } from "@react-three/drei";

import "./css/earth.css";

const ObjEarth = () => {
  const [model, setModel] = useState(null);
  useEffect(() => {
    new GLTFLoader().load("/models/earth/scene.gltf", (val) => {
      val.scene.scale.set(0.05, 0.05, 0.05);
      setModel(val);
    });
  });

  return model ? <primitive object={model.scene} /> : null;
};
const Earth = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <ObjEarth />
    </mesh>
  );
};

const ObjSun = () => {
  const [model, setModel] = useState(null);
  useEffect(() => {
    new GLTFLoader().load("/models/sun/scene.gltf", (val) => {
      val.scene.scale.set(1, 1, 1);
      setModel(val);
    });
  });

  return model ? <primitive object={model.scene} /> : null;
};
const Sun = () => {
  return (
    <mesh position={[30, 30, -160]}>
      <directionalLight intensity={3} color="white" position={[30, 30, -160]} />
      <ObjSun />
    </mesh>
  );
};

const Space = () => {
  return (
    <mesh position={[-160, 10, -80]}>
      <Stars
        radius={100} // Radius of the inner sphere (default=100)
        depth={100} // Depth of area where stars should fit (default=50)
        count={5000} // Amount of stars (default=5000)
        factor={4} // Size factor (default=4)
        saturation={0} // Saturation 0-1 (default=0)
        fade // Faded dots (default=false)
      />
    </mesh>
  );
};

const SolarS = () => {
  return (
    <div className="boxearth">
      <Canvas camera={{ position: [0, 0, 20] }}>
        <Space />
        <ambientLight intensity={0.1} />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <Earth />
        <Sun />
      </Canvas>
    </div>
  );
};

export default SolarS;
