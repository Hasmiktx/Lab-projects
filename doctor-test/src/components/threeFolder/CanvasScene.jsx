import { Suspense, useState } from 'react'


import { OrbitControls, PerspectiveCamera} from '@react-three/drei'
import { Canvas} from '@react-three/fiber'



import { Model } from './Model';
import { ModelWoman } from './ModelWoman';

function CanvasScene({step,setStep}) {
  console.log("canvas rerender")
  
    const [btn, setBtn] = useState(false);
    const[selectBody,setSelectBody]=useState(false);

  

  return (
    <>
    <div><button onClick={()=>{
      setBtn(true)
      console.log(btn,"submit")
      }}>Submit</button> </div>
    <div className='canvas-include-div'>
    
    {/* <div><button onClick={()=>{
      setBtn(true)
      console.log(setBtn,"submit")
      }}>Submit</button> </div> */}

      <Suspense fallback={<span>Loading...</span>}>
      <Canvas className='canvas'>
      
        
      {/* <color args={["#008081"]} attach="background" /> */}
      

      


       <PerspectiveCamera makeDefault fov={50} position={[3, 10, 10]} />

        <OrbitControls
          autoRotate={false}

          target={[0, 0.35, 0]} 
        />
        <directionalLight/>
        <ambientLight/>
        
        
        {/* <gridHelper/>
        <axesHelper args={[5,5,5]}/> */}
      
      {step===2 &&  <Model btn={btn} setBtn={setBtn} selectBody={selectBody} setSelectBody={setSelectBody} setStep={setStep}/>}
      {step===3 && <ModelWoman/>}

        

      </Canvas>
      <div className='canvas-include-div__check' onClick={()=>setSelectBody(true)}>
       <input type='checkbox'
       checked={selectBody}
        onChange={()=>setSelectBody(!selectBody)}
       />
      Select all body parts</div>
      </Suspense>
      
    </div>
    </>
  )
}

export default CanvasScene

