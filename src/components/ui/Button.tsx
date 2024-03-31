import { ReactNode } from "react";
import { ButtonHTMLAttributes } from "react";
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode;
    className?:string;
    width?:string;
}

const Button = ({children , className ,width='w-full' ,  ...rest}:IProps)=>{
    return(
        <button className ={`${className} ${width}  rounded-md  p-2 text-white`}{...rest}>{children}</button>
    )
}
export default Button  ;