import React, { useState } from 'react'
import { assets } from '../assets/assets'
const InputField = ({type, placeholder, name, handleChange,  address})=>(
    <input className='w-full px-2 py-2.5 border border-gray-500/30 rounded  outline-none text-gray-500 focus:border-green-500 transition'
     type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required />
)

const AddAddress = () => {

    const[address,setAddresses]= useState({
        firstName:'',
        lastName:'',
        email:'',
        street:'',
        city:'',
        state:'',
        zipcode:'',
        country:'',
        phone:'',
    })

    const handleChange =()=>{
        const{name,value} =e.target;

        setAddresses((prevAddress)=>({
            ...prevAddress,
            [name]:value,
        }))
    }

const onSubmitHandler = async (e)=>{
    e.preventDefault();
}

  return (
    <div className='mt-16 pb-16 '>
        <p className='text-2xl md:text-3xl text-gray-500'>Add Shipping <span className='font-semibold text-green-500'>Address</span></p>
        <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
            <div className='flex-1 max-w-md'>
                <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-sm'>
                    <div className='grid grid-cols-2 gap-4'>
                        <InputField handleChangE={handleChange} address={address} name='firstName' type="text" placeholder="First Name"/>
                        <InputField handleChange={handleChange} address={address} name='lastName' type="text" placeholder="Last Name"/>
                    </div>
                    <InputField handleChange={handleChange} address={address} name='email' type="email" placeholder="Email address"/>
                    <InputField handleChange={handleChange} address={address} name='street' type="text" placeholder="Street"/>
                    <div className='grid grid-cols-2 gap-4'>
                    <InputField handleChange={handleChange} address={address} name='city' type="text" placeholder="City"/>
                    <InputField handleChange={handleChange} address={address} name='state' type="text" placeholder="state"/>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                    <InputField handleChange={handleChange} address={address} name='zipcode' type="number" placeholder="Zip code"/>
                    <InputField handleChange={handleChange} address={address} name='country' type="text" placeholder="Country"/>
                    </div>

                    <InputField handleChange={handleChange} address={address} name='phone' type="text" placeholder="Phone"/>

                    <button className='w-full mt-6 bg-green-500 text-white py-3 hover:bg-green-600 transition cursor-pointer uppercase'>Save address</button>

                </form>
            </div>
            <img className='md:mr-16 mb-16 md:mt-0' src={assets.add_address_iamge} alt="Add Address" />

        </div>

    </div>
  )
}

export default AddAddress