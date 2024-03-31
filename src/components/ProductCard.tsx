import Image from "./ui/Image";
import Button from "./ui/Button";
import { IProduct } from "./interfaces";
import { txtSlicer } from "./utils/Functions";
import ColorCircle from "./ColorCircle";
import { colors } from "./data";
interface IProps{
   product:IProduct;
   setEditProduct:(product:IProduct)=>void;
   openEditModal:()=>void;
   idx:number;
   setProductIndex:(idx:number)=>void;
}

const ProductCard = ({product , setEditProduct , openEditModal , idx , setProductIndex}:IProps)=>{
   const {title,description,imgURL,price ,colors,category}=product;
   const renderColors= colors.map(color=><ColorCircle  color={color} key={color}  />)

   const onEdit = ()=>{
      setEditProduct(product);
      setProductIndex(idx);
      openEditModal();
      
   }
    return(


        <div className="border border-white rounded-md p-2 flex flex-col max-w-sm md:max-w-lg mx-auto md:mx-0  ">
     <Image  imgURL={imgURL}/>

            <h3 className="font-bold">{title}</h3>

            <p className="my-2">{txtSlicer(description)}</p>

                 <div  className="flex items-center  space-x-2 " >
                    {/* <span className="bg-indigo-700 rounded-full w-5 h-5 cursor-pointer"/>
                    <span className="bg-red-500 rounded-full w-5 h-5 cursor-pointer"/>
                    <span className="bg-yellow-400 rounded-full w-5 h-5 cursor-pointer"/> */}
                    {renderColors}
                    </div>
                 <div className="flex items-center justify-between  my-3">
                   
                 <span className="my-2">{price}</span>

                 <Image  imgURL={imgURL} className="rounded-full w-10 h-10"/>

                  
                 </div>


                 <div className="flex items-center justify-between space-x-2 ">
               <Button className="bg-indigo-700" width="w-full" onClick={onEdit}>EDIT</Button>
               <Button className="bg-red-700" width="w-full">DELETE</Button>
                 </div>
        </div>
    )
}
export default ProductCard  ;