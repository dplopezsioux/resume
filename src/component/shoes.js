import { Canvas, useLoader } from "@react-three/fiber";
import React, { useRef, useState, Suspense } from "react";
import { proxy, useSnapshot } from "valtio";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import "./css/shoe.css";

const state = {
  current: null,
  items: {
    laces: "#ffffff",
    mech: "#ffffff",
    caps: "#ffffff",
    inner: "#ffffff",
    sole: "#ffffff",
    stripes: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff",
  },
};

function Shoe(props) {
  const group = useRef();
  //const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shoe.glb");

  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    ["map1.jpg", "map2.jpg", "map3.jpg", "map4.jpg", "map5.jpg"]
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces}>
        <meshBasicMaterial
          //map={colorMap} //cordones
          attach="material"
          color="#ffffff"
          opacity={1}
          transparent
        />
      </mesh>
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh}>
        <meshBasicMaterial
          map={normalMap} //surface shoe
          attach="material"
        />
      </mesh>
      <mesh geometry={nodes.shoe_2.geometry} material={materials.stripes}>
        <meshBasicMaterial
          map={colorMap}
          //attach="material"
          color="#ffffff" //Hojales
          opacity={1}
          transparent
        />
      </mesh>
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner}>
        <meshBasicMaterial
          map={normalMap}
          attach="material"
          color="#747474" //inside shoe
          opacity={1}
          transparent
        />
      </mesh>
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole}>
        <meshBasicMaterial
          map={aoMap}
          attach="material" //Suela shoe
          color="#D74CFF"
          opacity={1}
          transparent
        />
      </mesh>
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes}>
        <meshBasicMaterial
          //map={colorMap}
          attach="material" //vertical line
          color="#DADADA"
          opacity={1}
          transparent
        />
      </mesh>
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band}>
        <meshBasicMaterial
          map={colorMap}
          attach="material" //simple line
          color="#00ff00"
          opacity={1}
          transparent
        />
      </mesh>
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch}>
        <meshBasicMaterial
          attach="material"
          color="#A9BFD5" //back shoeeeee
          opacity={1}
          transparent
        />
      </mesh>
    </group>
  );
}

const Shoes = () => {
  return (
    <div className="boxshoe bg-dark">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />

        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <Suspense fallback={null}>
          <Shoe />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Shoes;
