import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three"
import { useThree } from '@react-three/fiber';
const url=new URL("../../assets/models/man/scene.gltf",import.meta.url);

const color=new THREE.Color("#D19477");
const scaleMy=[0.29, 0.39, 0.29]
const scaleBig=[0.3,0.39,0.35]
const data=[];





export function Model(props) {
   console.log("man rerender")

    const { nodes, materials,scene} = useGLTF(url.href)
    // const{mouse,camera,viewport,scene:cinema,renderer}=useThree();
    const meshRef=useRef();
    // console.log(nodes,"nod",materials,"mat")
    
    const[click,setClick]=useState(false);
    
    
    const handleClick=(e)=>{
        console.log(e.object,"obj")
        setClick(!click)

    

        
        e.object.material.color.set(new THREE.Color(click?"green" :null))
        console.log(e.object.material.color,"color")
        data.push(e.object);
        // console.log(data,"data")
    
    }

    const onPointerOver=(e)=>{
        //   const scale = (e.obcect.scale = THREE.MathUtils.lerp(e.object.scale, 1.2, 0.1))
        e.object.scale.set(...scaleBig)
        e.object.material.metalness=0.5;
    }
    const onPointerOut=(e)=>{
        e.object.scale.set(...scaleMy)
        e.object.material.metalness=0;
    }

   
    
      useEffect(()=>{
        if(props.selectBody){
            console.log(props.selectBody,"sBody")
            scene.traverse(o=>{
                if(o.isMesh){
                    
                    o.material.color.set(new THREE.Color("green"));
                    
                }
            })  
            
            
        }
        
      },[props.selectBody])

     useEffect(()=>{
        if(props.btn){
          console.log(data,"data");
        //  for (let node in nodes ){
        //      if(nodes[node].children.length){
        //         console.log(nodes[node].children[0].material?.color.g,"mat.color.g")
                

        //      }
                
             
        //  }
          
         const id= data.filter(ob => +(ob.material.color.g)*100 === 21.586050010324415)
          console.log(id,"id")
        
        const uniqueIdsSet = new Set(id.map(obj => obj.id));
           console.log(uniqueIdsSet,"uniq")
          props.setBtn(false) ;
          props.setSelectBody(false);
          
          }
          

        },[props.btn])
     
    

      
    return (
      <group {...props} dispose={null} 
      ref={meshRef}
      scale={2.5}
      
      position={[0,-6,0]}
     onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      onClick={handleClick}
      
      >
       
        <mesh geometry={nodes.Object_4.geometry}  scale={[0.29, 0.39, 0.29]}
        // onPointerOver={onPointerOver}
        // onPointerOut={onPointerOut}
        
        >
           <meshStandardMaterial {...materials['Material.022']} wireframe={true} />
            </mesh>
        <mesh geometry={nodes.Object_6.geometry} scale={[0.29, 0.39, 0.29]}
        //    onPointerOver={onPointerOver}
        //    onPointerOut={onPointerOut}
        

        > 
        <meshStandardMaterial {...materials['Material.022']}  wireframe={true}/>

        </mesh>
        <mesh geometry={nodes.Object_8.geometry}  scale={[0.29, 0.39, 0.29]}
        //  onPointerOver={onPointerOver}
        //  onPointerOut={onPointerOut}
        

        >
        <meshStandardMaterial {...materials['Material.022']}  wireframe={true}/>

        </mesh>
        <mesh geometry={nodes.Object_10.geometry}  scale={[0.29, 0.39, 0.29]}
        //   onPointerOver={onPointerOver}
        //   onPointerOut={onPointerOut}
        

        >
        <meshStandardMaterial {...materials['Material.022']}  wireframe={true}/>
           
        </mesh>
        <mesh geometry={nodes.Object_12.geometry}  scale={[0.29, 0.39, 0.29]}
                

        >
        <meshStandardMaterial {...materials['Material.022']}  wireframe={true}/>

        </mesh>
        <mesh geometry={nodes.Object_14.geometry}  scale={[0.29, 0.39, 0.29]} 
                

        >
            <meshStandardMaterial {...materials['Material.022']}  wireframe={true}/>
            </mesh>
        <mesh geometry={nodes.Object_16.geometry}  scale={[0.29, 0.39, 0.29]}
                        

        >
            <meshStandardMaterial {...materials['Material.022']}  wireframe={true}/>
            </mesh>
        <mesh geometry={nodes.Object_18.geometry}  scale={[0.29, 0.39, 0.29]} 
                        

        >
            <meshStandardMaterial {...materials['Material.022']}  wireframe={true}/>
        </mesh>
        <mesh geometry={nodes.Object_20.geometry}  scale={[0.29, 0.39, 0.29]} 
                        

        >
            <meshStandardMaterial {...materials['Material.022']}  wireframe={true}/>
        </mesh>
        <mesh geometry={nodes.Object_22.geometry}  scale={[0.29, 0.39, 0.29]} 
                        

        >
            <meshStandardMaterial {...materials['Material.022']}  wireframe={true}/>
        </mesh>
        <mesh geometry={nodes.Object_24.geometry}  scale={[0.29, 0.39, 0.29]} 
                        

        >
            <meshStandardMaterial {...materials['Material.022']}  wireframe={true}/>
        </mesh>
        <mesh geometry={nodes.Object_26.geometry}  scale={[0.29, 0.39, 0.29]} 
                        

        >
            <meshStandardMaterial {...materials['Material.022']}  wireframe={true}/>
        </mesh>
        <mesh geometry={nodes.Object_28.geometry}  scale={[0.29, 0.39, 0.29]} 
                        

        >
            <meshStandardMaterial {...materials['Material.022']}  wireframe={true}/>
        </mesh>
        <mesh geometry={nodes.Object_30.geometry}  scale={[0.29, 0.39, 0.29]}
                    

        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_32.geometry}  scale={[0.29, 0.39, 0.29]} 
        
                


        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_34.geometry}  scale={[0.29, 0.39, 0.29]} 
        
                


        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_36.geometry}  scale={[0.29, 0.39, 0.29]} 
        
                


        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_38.geometry}  scale={[0.29, 0.39, 0.29]} 
        
                


        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_40.geometry}  scale={[0.29, 0.39, 0.29]} 
        
        


        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_42.geometry}  scale={[0.29, 0.39, 0.29]} 
        

                        

        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_44.geometry}  scale={[0.29, 0.39, 0.29]} 
                    

        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_46.geometry}  scale={[0.29, 0.39, 0.29]} 
                        

        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_48.geometry}  scale={[0.29, 0.39, 0.29]} 
                        

        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_50.geometry}  scale={[0.29, 0.39, 0.29]} 
        

        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_52.geometry}  scale={[0.29, 0.39, 0.29]} 
                        

        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_54.geometry}  scale={[0.29, 0.39, 0.29]} 
                        

        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_56.geometry}  scale={[0.29, 0.39, 0.29]} 
                        

        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_58.geometry}  scale={[0.29, 0.39, 0.29]} 
                    

        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_60.geometry}  scale={[0.29, 0.39, 0.29]}
                        

        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_62.geometry}  scale={[0.29, 0.39, 0.29]} 
                        

        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_64.geometry}  scale={[0.29, 0.39, 0.29]} 
                       

        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_66.geometry}  scale={[0.29, 0.39, 0.29]} 
                       
        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_68.geometry}  scale={[0.29, 0.39, 0.29]}
                       

        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_70.geometry}  scale={[0.29, 0.39, 0.29]} 
                       
        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_72.geometry}  scale={[0.29, 0.39, 0.29]} 
                       
        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_74.geometry}  scale={[0.29, 0.39, 0.29]} 
                      
        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_76.geometry} scale={[0.29, 0.39, 0.29]} 
                      
        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_78.geometry}  scale={[0.29, 0.39, 0.29]} 
                       
        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_80.geometry}  scale={[0.29, 0.39, 0.29]} 
                       
        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_82.geometry}  scale={[0.29, 0.39, 0.29]} 
                       

        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_84.geometry}  scale={[0.29, 0.39, 0.29]} 
                       
        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_86.geometry}  scale={[0.29, 0.39, 0.29]} 
                      
        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_88.geometry}  scale={[0.29, 0.39, 0.29]} 
                       

        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_90.geometry} scale={[0.29, 0.39, 0.29]} 
                      
        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_92.geometry}  scale={[0.29, 0.39, 0.29]} 
                       

        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_94.geometry}  scale={[0.29, 0.39, 0.29]} 
                        
        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_96.geometry}  scale={[0.29, 0.39, 0.29]}
                      
        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_98.geometry}  scale={[0.29, 0.39, 0.29]} 
                      

        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
        <mesh geometry={nodes.Object_100.geometry}  scale={[0.29, 0.39, 0.29]} 
                      
        >
            <meshStandardMaterial {...materials['Material.022']}/>
        </mesh>
       
      </group>
      
    )
  }
  
  useGLTF.preload(url.href)
  