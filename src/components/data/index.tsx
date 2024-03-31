import { ICategory, IProduct } from "../interfaces"
// import {v4 as uuid} from 'uuid'
export const productList:IProduct[]=[
   {
    id:'1',
    title:'lorem ipsum lorem ipsum1',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Eos et ad maxime dolorem commodi vitae quaerat iusto dolorum1',
    imgURL:'https://img.freepik.com/free-vector/realistic-car-headlights-ad-composition-headlights-with-green-purple-illumination_1284-56577.jpg?size=626&ext=jpg&ga=GA1.2.959683368.1694282194&semt=sph',
    price:'5500$',
    colors:['#FF0000','#00FF00','#808080','#800000','#808000','#008000','#800080','#008080','#000080'],
    category:{name:'car',imgURL:'https://img.freepik.com/free-vector/realistic-car-headlights-ad-composition-headlights-with-green-purple-illumination_1284-56577.jpg?size=626&ext=jpg&ga=GA1.2.959683368.1694282194&semt=sph'}
    
   } ,
   {
    id:'2',
    title:'lorem ipsum lorem ipsum2',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Eos et ad maxime dolorem commodi vitae quaerat iusto dolorum2',
    imgURL:'https://img.freepik.com/free-vector/realistic-car-headlights-ad-composition-headlights-with-green-purple-illumination_1284-56577.jpg?size=626&ext=jpg&ga=GA1.2.959683368.1694282194&semt=sph',
    price:'5700$',
    colors:['#FF0000','#00FF00','#808080','#800000','#808000','#008000','#800080','#008080','#000080'],
    category:{name:'car',imgURL:'https://img.freepik.com/free-vector/realistic-car-headlights-ad-composition-headlights-with-green-purple-illumination_1284-56577.jpg?size=626&ext=jpg&ga=GA1.2.959683368.1694282194&semt=sph'}
    
   }
   ,
    {
     id:'3',
     title:'lorem ipsum lorem ipsum3',
     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Eos et ad maxime dolorem commodi vitae quaerat iusto dolorum3',
     imgURL:'https://img.freepik.com/free-vector/realistic-car-headlights-ad-composition-headlights-with-green-purple-illumination_1284-56577.jpg?size=626&ext=jpg&ga=GA1.2.959683368.1694282194&semt=sph',
     price:'5900$',
     colors:['#FF0000','#00FF00','#808080','#800000','#808000','#008000','#800080','#008080','#000080'],
     category:{name:'car',imgURL:'https://img.freepik.com/free-vector/realistic-car-headlights-ad-composition-headlights-with-green-purple-illumination_1284-56577.jpg?size=626&ext=jpg&ga=GA1.2.959683368.1694282194&semt=sph'}
     
    },
    {
        id:'4',
        title:'lorem ipsum lorem ipsum4',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Eos et ad maxime dolorem commodi vitae quaerat iusto dolorum4',
        imgURL:'https://img.freepik.com/free-vector/realistic-car-headlights-ad-composition-headlights-with-green-purple-illumination_1284-56577.jpg?size=626&ext=jpg&ga=GA1.2.959683368.1694282194&semt=sph',
        price:'6100$',
        colors:['#FF0000','#00FF00','#808080','#800000','#808000','#008000','#800080','#008080','#000080'],
        category:{name:'car',imgURL:'https://img.freepik.com/free-vector/realistic-car-headlights-ad-composition-headlights-with-green-purple-illumination_1284-56577.jpg?size=626&ext=jpg&ga=GA1.2.959683368.1694282194&semt=sph'}
        
       }
     
]

export const formInputList =[
    {
        id:'1',
        name:'title',
        label:'Title',
        type:'text',
    },
    {
        id:'2',
        name:'description',
        label:'Description',
        type:'text',
    },
    {
        id:'3',
        name:'imgURL',
        label:'ImageURL',
        type:'text',
    },
    {
        id:'4',
        name:'price',
        label:'Price',
        type:'text',
    },
]

export const colors:string[]=[
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#00FFFF',
    '#FF00FF',
    '#C0C0C0',
    '#808080',
    '#800000',
    '#808000',
    '#008000',
    '#800080',
    '#008080',
    '#000080',
]
export const categories:ICategory[] = [
    {
        id:'1',
        name:'car',
        imgURL:'https://img.freepik.com/free-vector/realistic-car-headlights-ad-composition-headlights-with-green-purple-illumination_1284-56577.jpg?size=626&ext=jpg&ga=GA1.2.959683368.1694282194&semt=sph'
    },
    {
        id:'2',
        name:'bike',
        imgURL:'https://img.freepik.com/free-vector/realistic-car-headlights-ad-composition-headlights-with-green-purple-illumination_1284-56577.jpg?size=626&ext=jpg&ga=GA1.2.959683368.1694282194&semt=sph'
    },
    {
        id:'3',
        name:'truck',
        imgURL:'https://img.freepik.com/free-vector/realistic-car-headlights-ad-composition-headlights-with-green-purple-illumination_1284-56577.jpg?size=626&ext=jpg&ga=GA1.2.959683368.1694282194&semt=sph'
    }
    ,
    {
        id:'4',
        name:'bus',
        imgURL:'https://img.freepik.com/free-vector/realistic-car-headlights-ad-composition-headlights-with-green-purple-illumination_1284-56577.jpg?size=626&ext=jpg&ga=GA1.2.959683368.1694282194&semt=sph'
    }
]