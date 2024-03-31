import  { InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement>
{}

const Input = ({...rest}:IProps)=>{
    return(
        <input {...rest} className="border-1 border-gray-300 shadow-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
        rounded-md p-3 text-md" />
    )
}
export default Input  ;