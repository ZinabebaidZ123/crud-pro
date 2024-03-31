import { HTMLAttributes } from "react";
interface IProps extends HTMLAttributes<HTMLSpanElement>{
    color:string;
}

const ColorCircle = ({color , ...rest}:IProps)=>{
    return(
        <span className=" rounded-full w-5 h-5 cursor-pointer" style={{backgroundColor: color}} {...rest}/>
    )
}
export default ColorCircle  ;