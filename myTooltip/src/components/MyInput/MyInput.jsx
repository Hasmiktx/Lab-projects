import { useState } from "react";

const MyInput=({children,type,name})=>{
    const[value,setValue]= useState("");
    const onChange=(e)=>{
        setValue(e.target.value)
    }
    return <div className="input_div">
        <input type={type}  name={name} value={value} onChange={(e)=>onChange(e)} />
        {children}
    </div>
}

export default MyInput;