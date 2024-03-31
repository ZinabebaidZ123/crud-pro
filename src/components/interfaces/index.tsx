import { inputNames } from "../Types";

export interface IProduct{
    id?:string | undefined;
    title:string ;
    description:string;
    imgURL:string;
    price:string;
    colors:string[];
    category:{name:string , imgURL:string}
}
export interface IFormInput{
    id:string | undefined;
    name:inputNames;
    label:string;
    type:string;
}
export interface ICategory{
    id:string | undefined;
    name:string;
    imgURL:string;
}