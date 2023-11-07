import { useState } from "react";
import {data } from"../../constants/data";
import CanvasScene from "../threeFolder/CanvasScene";

const Select=()=>{
  const[filterData,setFilterData]=useState([]);
  const[searchWard,setSearchWard]=useState("")
  const[isSymptom,setIsSymptom]=useState(false);
  const[symptomArr,setSymptomArr]=useState([]);
  const[error,setError]=useState(false);
  const[step,setStep]=useState(1)

  const handleChange=(e)=>{
    setError(false);
    const keyward=e.target.value
   setSearchWard(keyward);
    // console.log(e.target.value,"val")
    // console.log(searchWord,"word")
     
    const newFilderArr=keyward!== "" ? data.filter((val)=>val.title.toLowerCase().includes(keyward.toLowerCase())): []
     setFilterData(newFilderArr)
   
  }
     const onSearch=(ward)=>{
      setSearchWard(ward);
      setIsSymptom(true);
     }
     const addSymptom=()=>{
       if(isSymptom){
        // console.log(searchWard);
        symptomArr.push(searchWard);
        setSymptomArr([...symptomArr])
        // console.log(symptomArr,"sympArr");
        setIsSymptom(false);
        setSearchWard("");
        // setFilterData([])
        
       }else{
        setError(true);
        setIsSymptom(false);
       }
     }
return (
    <div className="select-container">
     <div className="step-container">
      <div className=" step step__one">1</div>
      <div className="step-container__border"></div>
      <div className="step"  style={{backgroundColor:step>=2?"#334772":"#FFFFFF", color:step>=2? "#FFFFFF":"#334772"}}>2</div>
      <div className="step-container__border"></div>

      <div className="step"  style={{backgroundColor:step===3?"#334772":"#FFFFFF",color:step===3? "#FFFFFF":"#334772"}}>3</div>

     </div>
     {step===1 && <p className="select-container__p">What are Your symptoms ?</p>}
     {step===2 && <div className='location-div'>For each of the symptoms try to show the location, if possible</div>}
     <div className="search-container">
      <div className="symptom-div">
      {step===1 && <p>My symptoms</p>}
      
        {symptomArr.length!==0 && <div>
          {symptomArr.map(val=>{
            return (
              <div className="mark-symptom-div" key={Math.random()}>
                <span>X</span>
                <span>{val}</span>
                </div>
            )
          })}
          </div>}
      </div>
     {step===1 ? <div className="searchBar">
      {error && <span className="error">Not valid symptom...</span>}

        <div className="input-div">
          
          <input  type="search" placeholder="search keywards" required
          value={searchWard} onChange={handleChange}/>
          <button onClick={addSymptom}>+</button>
        </div>
        
        
        {filterData.length !==0 &&  <div className="dataResult">
          
          {filterData.map((val,i)=>{
            return(
              <a className="dataItem"  key={i} onClick={()=>onSearch(val.title)}>
                {/* <a className="dataItem" href={val.link} target="_blank"  key={i}> */}

              <p>{val.title} </p>
            </a>
            )
          }
          )}
        </div> }
      </div> : <CanvasScene step={step} setStep={setStep}/>}

     </div>
     <div className="back-next">
      <button className="back-next__back"
      onClick={()=>{step>=2?setStep(step-1):setStep(1)}}>Back</button>
      <button className="back-next__next"
      onClick={()=>{step<=2?setStep(step+1):setStep(3)}}>Next</button>
     </div>
    </div>
)
}
export default Select

