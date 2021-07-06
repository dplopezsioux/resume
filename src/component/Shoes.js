import { Canvas, events, useLoader, useThree } from "@react-three/fiber";
import React, { useRef, useState, Suspense } from "react";
import { proxy, useSnapshot } from "valtio";
import { useGLTF, OrbitControls, ContactShadows } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
3;
import { GithubPicker } from "react-color";

import "./css/shoe.css";

const state = proxy({
  current: null,
  items: {
    laces: "#FF0000",
    mech: "#C8C8C8",
    caps: "#ff00ff",
    inner: "#737373",
    sole: "#FF0000",
    stripes: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff",
  },
  texture: {
    laces: "blueholes",
    mech: "plants",
    caps: "blueholes",
    inner: "blueholes",
    sole: "blueholes",
    stripes: "blueholes",
    band: "blueholes",
    patch: "blueholes",
  },
  cPosition: { cPosition: [1, 0.5, 1.6] },
});

function Shoe(props) {
  const group = useRef();
  const snap = useSnapshot(state);
  const [hovered, setHovered] = useState(null);
  const { nodes, materials } = useGLTF("/models/shoes/shoe.glb");

  const [blueholes, leather, plants, plastic, stone] = useLoader(
    TextureLoader,
    [
      "models/shoes/blueholes.jpg",
      "models/shoes/leather.jpg",
      "models/shoes/plants.jpg",
      "models/shoes/plastic.jpg",
      "models/shoes/default.jpg",
    ]
  );

  const mapLoad = (param) => {
    switch (param) {
      case "blueholes":
        return blueholes;
      case "leather":
        return leather;
      case "plastic":
        return plastic;
      case "plants":
        return plants;
      case "stone":
        return stone;
      default:
        return stone;
    }
  };

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={(e) => {
        e.stopPropagation(), setHovered(e.object.material.name);
      }}
      onPointerOut={(e) => {
        e.intersections.length === 0 && setHovered(null);
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        state.current = e.object.material.name;
      }}
      onPointerMissed={() => {
        state.current = null;
      }}
      position={[0, 0, 0]}
    >
      <mesh geometry={nodes.shoe.geometry} material={materials.laces}>
        <meshBasicMaterial
          name="laces"
          attach="material"
          map={null}
          color={snap.items.laces}
          opacity={1}
          transparent
        />
      </mesh>
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh}>
        <meshBasicMaterial
          name="mesh"
          color={snap.items.mesh}
          map={mapLoad(snap.texture.mesh)} //surface shoe
          opacity={1}
          attach="material"
          transparent
        />
      </mesh>
      <mesh geometry={nodes.shoe_2.geometry} material={materials.stripes}>
        <meshBasicMaterial
          map={stone}
          name="stripes"
          //attach="material"
          color={snap.items.stripes} //Hojales
          opacity={1}
          transparent
        />
      </mesh>
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner}>
        <meshBasicMaterial
          name="inner"
          map={stone}
          attach="material"
          color={snap.items.inner} //inside shoe
          opacity={1}
          transparent
        />
      </mesh>
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole}>
        <meshBasicMaterial
          name="sole"
          map={stone}
          attach="material" //Sole
          color={snap.items.sole}
          opacity={1}
          transparent
        />
      </mesh>
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes}>
        <meshBasicMaterial
          name="stripes"
          map={stone}
          attach="material" //vertical line
          color={snap.items.stripes}
          opacity={1}
          transparent
        />
      </mesh>
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band}>
        <meshBasicMaterial
          name="band"
          map={stone}
          attach="material" //simple line
          color={snap.items.band}
          opacity={1}
          transparent
        />
      </mesh>
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch}>
        <meshBasicMaterial
          name="patch"
          map={stone}
          attach="material"
          color={snap.items.patch} //back shoeeeee
          opacity={1}
          transparent
        />
      </mesh>
    </group>
  );
}

const TextureE = (event) => {
  const { eventHandle } = event;
  return (
    <div>
      <button className="btn btn-primary btn-sm" onClick={eventHandle}>
        blueholes
      </button>
      <button className="btn btn-primary btn-sm" onClick={eventHandle}>
        leather
      </button>
      <button className="btn btn-primary btn-sm" onClick={eventHandle}>
        plants
      </button>
      <button className="btn btn-primary btn-sm" onClick={eventHandle}>
        stone
      </button>
      <button className="btn btn-primary btn-sm" onClick={eventHandle}>
        plastic
      </button>
    </div>
  );
};

function SelecElemnt() {
  const snap = useSnapshot(state);

  return (
    <div className="container text-center text-light p-3">
      <GithubPicker
        color={snap.items[snap.current]}
        onChange={(color) => {
          state.items[(state.items[snap.current] = color.hex)];
        }}
      />
      <TextureE
        eventHandle={(e) => {
          state.texture[(state.texture[snap.current] = e.target.outerText)];
          console.log(state);
        }}
      />
      {snap.current == null ? "Select part" : snap.current}
    </div>
  );
}

const Shoes = () => {
  return (
    <div className="container text-center h3 bg-dark text-uppercase">
      <div className="row">
        <div className="col-sm-2 col-md-3">
          <SelecElemnt />
        </div>
        <div className="col-sm-10 offset-sm-2 col-md-9 offset-md-0">
          <div className="boxshoe">
            <Canvas camera={{ position: [1, 0.5, 1.6] }}>
              <ambientLight intensity={0.5} />
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
              />
              <Suspense fallback={null}>
                <Shoe />
              </Suspense>
              <ContactShadows
                color="#ffffff"
                position={[0, -0.6, 0]}
                width={10}
                height={10}
                far={20}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoes;
