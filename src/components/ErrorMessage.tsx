interface IProps{
    msg:string;
}

const ErrorMessage = ({msg}:IProps)=>{

       return msg? <span className="text-red-700 text-semibold text-sm">{msg}</span>
         :null
}
export default ErrorMessage  ;