

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three"
const url=new URL("../../assets/models/woman/scene.gltf",import.meta.url);

export function ModelWoman(props) {
  const { nodes, materials } = useGLTF(url.href)
   const [click,setClick]=useState(false);
   const materialMy=new THREE.MeshStandardMaterial({color:"#CBAF55",wireframe:true})
  const handleClick=(e)=>{
    console.log(e.object,"obj")
    setClick(!click)




    e.object.material.color.set(new THREE.Color(click?"red" :"#aea397"))
    console.log(e.object.material.color,"color")
    // data.push(e.object);
    // console.log(data,"data")

}

  const onPointerOver=(e)=>{
    // e.object.scale.set(1.02,1,1.02)
    e.object.material.metalness=0.5;

  }

  const onPointerOut=(e)=>{
    // e.object.scale.set(1,1,1)
    e.object.material.metalness=0.2;

  }
  return (
    <group {...props} dispose={null}>
      <group scale={0.07}
      position={[0,-6,0]}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      onClick={handleClick}>
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush0_0.geometry} material={materialMy} >
          <meshStandardMaterial wireframe={true}/>
          </mesh>
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush1_0.geometry} material={materialMy} >
        <meshStandardMaterial  wireframe={true}/>

          </mesh>
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush3_0.geometry} material={materialMy} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush4_0.geometry} material={materialMy} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush6_0.geometry} material={materials.Tentativa_de_retopo_zbrush6} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush8_0.geometry} material={materials.Tentativa_de_retopo_zbrush8} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush9_0.geometry} material={materials.Tentativa_de_retopo_zbrush9} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush10_0.geometry} material={materials.Tentativa_de_retopo_zbrush10} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush11_0.geometry} material={materials.Tentativa_de_retopo_zbrush11} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush13_0.geometry} material={materials.Tentativa_de_retopo_zbrush13} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush14_0.geometry} material={materialMy} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush15_0.geometry} material={materialMy} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush16_0.geometry} material={materials.Tentativa_de_retopo_zbrush16} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush17_0.geometry} material={materials.Tentativa_de_retopo_zbrush17} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush18_0.geometry} material={materials.Tentativa_de_retopo_zbrush18} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush19_0.geometry} material={materials.Tentativa_de_retopo_zbrush19} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush20_0.geometry} material={materials.Tentativa_de_retopo_zbrush20} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush21_0.geometry} material={materials.Tentativa_de_retopo_zbrush21} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush23_0.geometry} material={materials.Tentativa_de_retopo_zbrush23} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush25_0.geometry} material={materials.Tentativa_de_retopo_zbrush25} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush26_0.geometry} material={materials.Tentativa_de_retopo_zbrush26} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush27_0.geometry} material={materials.Tentativa_de_retopo_zbrush27} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush28_0.geometry} material={materials.Tentativa_de_retopo_zbrush28} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush42_0.geometry} material={materials.Tentativa_de_retopo_zbrush42} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush30_0.geometry} material={materials.Tentativa_de_retopo_zbrush30} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush32_0.geometry} material={materials.Tentativa_de_retopo_zbrush32} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush33_0.geometry} material={materials.Tentativa_de_retopo_zbrush33} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush34_0.geometry} material={materials.Tentativa_de_retopo_zbrush34} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush35_0.geometry} material={materials.Tentativa_de_retopo_zbrush35} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush36_0.geometry} material={materials.Tentativa_de_retopo_zbrush36} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush37_0.geometry} material={materials.Tentativa_de_retopo_zbrush37} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush38_0.geometry} material={materialMy} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush39_0.geometry} material={materials.Tentativa_de_retopo_zbrush39} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush41_0.geometry} material={materials.Tentativa_de_retopo_zbrush41} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush66_0.geometry} material={materials.Tentativa_de_retopo_zbrush66} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush67_0.geometry} material={materials.Tentativa_de_retopo_zbrush67} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush43_0.geometry} material={materialMy} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush44_0.geometry} material={materials.Tentativa_de_retopo_zbrush44} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush45_0.geometry} material={materials.Tentativa_de_retopo_zbrush45} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush46_0.geometry} material={materialMy} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush47_0.geometry} material={materials.Tentativa_de_retopo_zbrush47} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush48_0.geometry} material={materials.Tentativa_de_retopo_zbrush48} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush49_0.geometry} material={materials.Tentativa_de_retopo_zbrush49} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush50_0.geometry} material={materials.Tentativa_de_retopo_zbrush50} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush52_0.geometry} material={materials.Tentativa_de_retopo_zbrush52} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush53_0.geometry} material={materials.Tentativa_de_retopo_zbrush53} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush54_0.geometry} material={materials.Tentativa_de_retopo_zbrush54} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush55_0.geometry} material={materials.Tentativa_de_retopo_zbrush55} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush56_0.geometry} material={materials.Tentativa_de_retopo_zbrush56} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush58_0.geometry} material={materials.Tentativa_de_retopo_zbrush58} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush59_0.geometry} material={materials.Tentativa_de_retopo_zbrush59} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush60_0.geometry} material={materials.Tentativa_de_retopo_zbrush60} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush61_0.geometry} material={materials.Tentativa_de_retopo_zbrush61} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush62_0.geometry} material={materials.Tentativa_de_retopo_zbrush62} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush73_0.geometry} material={materials.Tentativa_de_retopo_zbrush73} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush68_0.geometry} material={materials.Tentativa_de_retopo_zbrush68} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush69_0.geometry} material={materials.Tentativa_de_retopo_zbrush69} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush70_0.geometry} material={materials.Tentativa_de_retopo_zbrush70} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush71_0.geometry} material={materials.Tentativa_de_retopo_zbrush71} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush81_0.geometry} material={materials.Tentativa_de_retopo_zbrush81} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush82_0.geometry} material={materials.Tentativa_de_retopo_zbrush82} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush83_0.geometry} material={materials.Tentativa_de_retopo_zbrush83} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush84_0.geometry} material={materials.Tentativa_de_retopo_zbrush84} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush85_0.geometry} material={materials.Tentativa_de_retopo_zbrush85} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush87_0.geometry} material={materials.Tentativa_de_retopo_zbrush87} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush88_0.geometry} material={materials.Tentativa_de_retopo_zbrush88} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush89_0.geometry} material={materials.Tentativa_de_retopo_zbrush89} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush90_0.geometry} material={materials.Tentativa_de_retopo_zbrush90} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush91_0.geometry} material={materials.Tentativa_de_retopo_zbrush91} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush93_0.geometry} material={materials.Tentativa_de_retopo_zbrush93} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush95_0.geometry} material={materials.Tentativa_de_retopo_zbrush95} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush96_0.geometry} material={materials.Tentativa_de_retopo_zbrush96} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush97_0.geometry} material={materials.Tentativa_de_retopo_zbrush97} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush98_0.geometry} material={materials.Tentativa_de_retopo_zbrush98} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush99_0.geometry} material={materials.Tentativa_de_retopo_zbrush99} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush101_0.geometry} material={materials.Tentativa_de_retopo_zbrush101} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush102_0.geometry} material={materials.Tentativa_de_retopo_zbrush102} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush76_0.geometry} material={materials.Tentativa_de_retopo_zbrush76} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush77_0.geometry} material={materials.Tentativa_de_retopo_zbrush77} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush78_0.geometry} material={materials.Tentativa_de_retopo_zbrush78} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush79_0.geometry} material={materials.Tentativa_de_retopo_zbrush79} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush80_0.geometry} material={materials.Tentativa_de_retopo_zbrush2} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush57_0.geometry} material={materials.Tentativa_de_retopo_zbrush5} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush100_0.geometry} material={materials.Tentativa_de_retopo_zbrush100} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush94_0.geometry} material={materials.Tentativa_de_retopo_zbrush94} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush92_0.geometry} material={materials.Tentativa_de_retopo_zbrush31} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush74_0.geometry} material={materials.Tentativa_de_retopo_zbrush40} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush63_0.geometry} material={materials.Tentativa_de_retopo_zbrush63} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush65_0.geometry} material={materials.Tentativa_de_retopo_zbrush63} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush72_0.geometry} material={materials.Tentativa_de_retopo_zbrush72} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush75_0.geometry} material={materials.Tentativa_de_retopo_zbrush75} />
        <mesh geometry={nodes.Tentativa_de_retopo_zbrush_Tentativa_de_retopo_zbrush86_0.geometry} material={materials.Tentativa_de_retopo_zbrush7} />
      </group>
    </group>
  )
}

useGLTF.preload(url.href)
