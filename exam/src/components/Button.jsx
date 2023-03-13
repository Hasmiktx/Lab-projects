import "./Style.css"

const Button=({width,height,variant,text})=>{
   return <Button className={`${variant}`} style={{width:`${width}px`, height:`${height}px`}} >
    {text}</Button>

    
}

export default Button