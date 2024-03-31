interface IProps{
    imgURL:string;
    className?:string;
}

const Image = ({imgURL , className}:IProps)=>{
    return(
        <img src={imgURL} className={className} />
    )
}
export default Image  ;