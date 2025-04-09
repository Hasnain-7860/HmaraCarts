import React from 'react'
import { useAppContext } from '../Context/Appcontext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets'

const Productcategory = () => {
    const {products} = useAppContext()
    const {category} = useParams()

    const searchCategory = categories.find((item)=>item.path.toLocaleLowerCase()=== category)
    const filteredProducts = products.filter((product)=>product.category.toLocaleLowerCase()=== category)
  return (
    <div className='mt-16'>
        {searchCategory &&(
            <div className='flex flex-col items-end w-max'>
                <p className='text-2xl font-medium'>{searchCategory.text.toUpperCase()}</p>
                <div className='w-16 h-0.5 bg-green-400 rounded-full'></div>
            </div>
        )}
    </div>
  )
}

export default Productcategory