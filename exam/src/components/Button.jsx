import "./Style.css"

const Button=({width,height,variant,text})=>{
   return <button className={`${variant}`} style={{width:`${width}px`, height:`${height}px`}} >
    {text}</button>

    
}

export default Button