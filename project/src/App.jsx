import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Allproduct from './Pages/Allproduct'
import Productcategory from './Pages/Productcategory'
import Productdetails from './Pages/Productdetails'
import Cart from './Pages/Cart'
import { useAppContext } from './context/AppCon'
// import Caart from './Pages/Cart'



const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const {showUserLogin} = useAppContext()
  return (
    <div>
      {isSellerPath ? null: <Navbar/>}
      {showUserLogin ? <Login/> : null}
      <Toaster/>
      <div className={`${isSellerPath ?"":" py-20 px-6 md:px-16 lg:px-24 xl:px-32 "}`}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/products" element={<Allproduct/>}/>
          <Route path="/products/:category" element={<Productcategory/>}/>
          <Route path='/product/:category/:id' element={<Productdetails/> }/>
          {/* <Route path='/cart' element={<Caart/>}/> */}
          <Route path='/Cart' element={<Cart/>}/>

        </Routes>
      </div>
      {!isSellerPath && <Footer/>}
     
    </div>
  )
}

export default App