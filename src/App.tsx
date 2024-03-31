import ProductCard from './components/ProductCard'
import { formInputList, productList } from './components/data'
import { useState } from 'react'
import Button from './components/ui/Button'
import Input from './components/ui/Input'
import Modal from './components/ui/Modal'
import './App.css'
import { ChangeEvent } from 'react'
import { IProduct } from './components/interfaces'
import { FormEvent } from 'react'
import { productValidation } from './components/validation'
import ErrorMessage from './components/ErrorMessage'
import ColorCircle from './components/ColorCircle'
import { colors } from './components/data'
import Select from './components/ui/Select'
import { categories } from './components/data'
import{v4 as uuid} from 'uuid'
import { inputNames } from './components/Types'

const App = () => {


  // handle modal ------------------
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const [isOpenEditModal ,setIsOpenEditModal]=useState(false);

  const openEditModal = () => { setIsOpenEditModal(true) }
  const closeEditModal = () => { setIsOpenEditModal(false) }
  // default object ---------------------------------
  const defaultProductObject = {
    title: '',
    description: '',
    imgURL: '',
    price: '',
    colors:[],
    category: { name: '', imgURL: '' }

  }
  // state for inputs --------------------------------
  const [product, setProduct] = useState<IProduct>(defaultProductObject)
  // useState for errors 00-00-------
  const [errors, setErrors] = useState(defaultProductObject)
// temp  use state for colors ------------------------------
const [tempColor, setTempColor]=useState<string[]>([])
console.log(tempColor);
// useState to add new product -----------------------------------
const [products , setProducts] = useState<IProduct[]>(productList)
// use state to add a category to the product ----------------------
const [selectedCategory, setSelectedCategory] = useState(categories[0])
// use state to edit product ------------------------------
const [editProduct, setEditProduct] = useState<IProduct>(defaultProductObject)
// use state to save product index ------------------------------
const [productIndex, setProductIndex] = useState<number>(0)
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setProduct({
      ...product,

      [name]: value
    })

    setErrors({
      ...errors ,
      [name]:''
    })
  }


  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setEditProduct({
      ... editProduct,

      [name]: value
    })

    setErrors({
      ...errors ,
      [name]:''
    })
  }

  // form submit handler function -------------------------
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(product);
    const{title,description,imgURL ,price}=product;
    const errors = productValidation({ title, description, imgURL,  price  })

    const hasErrorMsg = Object.values(errors).some(value => value === '') && Object.values(errors).every(value => value === '');
    console.log(hasErrorMsg);

    if (!hasErrorMsg) {
      setErrors(errors);
      return
    }

    console.log('the product will send to the server');
    
    setProducts(prev => [ ...prev , {...product,id:uuid() , colors:tempColor , category:selectedCategory}])
    console.log(product);
    
    setProduct(defaultProductObject)
    setTempColor([])

  }

  const onSubmitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(product);
    const{title,description,imgURL ,price}= editProduct;
    const errors = productValidation({ title, description, imgURL,  price  })

    const hasErrorMsg = Object.values(errors).some(value => value === '') && Object.values(errors).every(value => value === '');
    console.log(hasErrorMsg);

    if (!hasErrorMsg) {
      setErrors(errors);
      return
    }

    console.log('the product will send to the server');
    
    // setProducts(prev => [ ...prev , {...product,id:uuid() , colors:tempColor , category:selectedCategory}])
    // console.log(product);
    const updatedProduct = [...products];

    updatedProduct[productIndex]=  {...editProduct , colors: tempColor.concat(editProduct.colors) };
    setProducts(updatedProduct)
    setEditProduct(defaultProductObject)
    setTempColor([])
    closeEditModal()

  }
  // to cancel and close the modal ----------------------------
  const onCancel = () => {
    setProduct(defaultProductObject)
    closeModal()

  }
  // render product list ----------------
  const renderProductList = products.map((product , idx ) => (
  <ProductCard key={product.id} product={product}  setEditProduct={setEditProduct} openEditModal={openEditModal} idx={idx} setProductIndex={setProductIndex} />))
  //render form inputs ----------------------------
  const renderFormInputs = formInputList.map(input =>
    <div className='flex flex-col mb-1 text-sm font-medium text-gray-700' key={input.id}>
      <label htmlFor="">{input.label}</label>
      <Input type={input.type} name={input.name} onChange={onChangeHandler} value={product[input.name as 'title' | 'description' | 'imgURL' | 'price']} />
      <ErrorMessage msg={errors[input.name as 'title' | 'description' | 'imgURL' | 'price']} />
    </div>)

// render colors ---------------------------------------------
const renderColors= colors.map(color=><ColorCircle  color={color} key={color}  onClick={()=>{
  if(tempColor.includes(color)){
    setTempColor(prev=>prev.filter(item=>item!==color))
    return
  }
  if(editProduct.colors.includes(color)){
    setTempColor(prev=>prev.filter(item=>item!==color))
    return
  }
  setTempColor(prev=>[...prev , color])} } />)

  const renderEditInputWithMsg = ( label:string , name:inputNames)=>{
    return(
      <div className='flex flex-col mb-1 text-sm font-medium text-gray-700' >
      <label htmlFor=''>{label}</label>
      <Input type='text' name={name} onChange={onChangeEditHandler} value={editProduct[name]} />
      <ErrorMessage msg={errors[name]} />
    </div>
    )
  }
  return (
    <>
      <main className='contaner mx-auto'>
        <Button className='bg-indigo-700 hover:bg-indigo-800' onClick={openModal}>ADD PRODUCT</Button>
        <div className=' container mx-auto border border-indigo-800 rounded-sm m-5 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 p-2'>
          {renderProductList}
        </div>
{/* for add product ------------------------ */}
        <Modal isOpen={isOpen} closeModal={closeModal} title='ADD PRODUCT'>

          <form className='space-y-2' onSubmit={onSubmitHandler}>
            {renderFormInputs}
            <Select selected={selectedCategory} setSelected={setSelectedCategory}/>

            <div className='flex items-center space-x-2 flex-wrap'>
            
              {renderColors}
              </div>

              <div className='flex items-center space-x-2 flex-wrap'>
              {tempColor.map(color=>(<span key={color} style={{backgroundColor:color}} className='p-1 m-1 rounded-md text-white '>{color}</span>))}
            </div>
            <div className='flex space-x-2 items-center  '>
              <Button className='bg-indigo-700 hover:bg-indigo-800' >ADD</Button>
              <Button className='bg-gray-700 hover:bg-gray-800' onClick={onCancel} >CANCEL</Button>

            </div>
          </form>

        </Modal>

        {/* for edit product ------------------------ */}
        <Modal isOpen={isOpenEditModal} closeModal={closeEditModal} title='Edit PRODUCT' >

          <form className='space-y-2' onSubmit={onSubmitEditHandler}>

         {renderEditInputWithMsg('Title' , 'title')}
          {renderEditInputWithMsg('Description' , 'description')}
          {renderEditInputWithMsg('Image URL' , 'imgURL')}
          {renderEditInputWithMsg('Price' , 'price')}
            {/* {renderFormInputs} */}
            {/* <Select selected={selectedCategory} setSelected={setSelectedCategory}/> */}

            <div className='flex items-center space-x-2 flex-wrap'>
            
              {renderColors}
              </div>

              <div className='flex items-center space-x-2 flex-wrap'>
              {tempColor.concat(editProduct.colors).map(color=>(<span key={color} style={{backgroundColor:color}} className='p-1 m-1 rounded-md text-white '>{color}</span>))}
            </div>
            <div className='flex space-x-2 items-center  '>
              <Button className='bg-indigo-700 hover:bg-indigo-800' >ADD</Button>
              <Button className='bg-gray-700 hover:bg-gray-800' onClick={onCancel} >CANCEL</Button>

            </div>
          </form>

        </Modal>

      </main>

    </>
  )
}

export default App
