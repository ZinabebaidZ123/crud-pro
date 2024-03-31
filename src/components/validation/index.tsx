export const productValidation= (product:{title:string, description:string , imgURL:string,price:string})=>{

    const errors:{title:string, description:string , imgURL:string,price:string}={
        title:'',
        description:'',
        imgURL:'',
        price:''
    }
    const URLValidation = /^https?:\/\/.*\/([^\/?#]+)\.(jpg|jpeg|png|gif|bmp)(?:[?#]|$)/i;
    if(!product.title.trim()||product.title.length<10 || product.title.length>50){
    errors.title='Title is required and should be between 10 and 50 characters'
    }

    if(!product.description.trim()||product.description.length<10 || product.description.length>500){
    errors.description='Description is required and should be between 10 and 500 characters'
   }

   if(!product.imgURL.trim()|| !URLValidation){
     errors.imgURL='imgURL is required and must be valid'
   }

   if(!product.price.trim()||isNaN(Number(product.price))){
    errors.price='pricwe is required and should be a number'
        }

        return errors
}