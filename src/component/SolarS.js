import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { Stars, OrbitControls } from "@react-three/drei";

import "./css/earth.css";

//

import { Icon } from "@iconify/react";
import icon3dModel from "@iconify-icons/file-icons/3d-model";
//

const ObjEarth = () => {
  const model = useLoader(GLTFLoader, "/models/earth/scene.gltf");
  return model ? <primitive object={model.scene} scale={0.05} /> : null;
};
const Earth = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <ObjEarth />
    </mesh>
  );
};

const ObjSun = () => {
  const model = useLoader(GLTFLoader, "/models/sun/scene.gltf");
  return model ? <primitive object={model.scene} scale={1} /> : null;
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
    <div className="mt-5 px-3 py-4 bg-light" id="featured-3 bg-secondary">
      <div className="pb-3 mb-4 border-bottom">
        <Icon icon={icon3dModel} width="50" height="50" />
        <span className="fs-4">
          <span> &#123; @react-three &#125;</span> React renderer for threejs.
        </span>

        <div className="boxearth container rounded-3 bg-dark">
          <Canvas camera={{ position: [0, 0, 20] }}>
            <Suspense fallback={null}>
              <Space />
              <ambientLight intensity={0.1} />
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
              />
              <Earth />
              <Sun />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default SolarS;
