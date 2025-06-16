import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppCon'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
    const {user,setUser,  setShowUserLogin, navigate,searchQuery,setSearchQuery,getCartCount} = useAppContext();

  const logout = async ()=>{
    setUser(null);
    navigate('/')
  }
  useEffect(()=>{
    if(searchQuery.length > 0){
        navigate("/products")
    }
  },[searchQuery])
  return (
    <nav className="flex items-center justify-between px-12 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

    <NavLink to='/' onClick={()=>setOpen(false)}>
        <h1 className='text-[35px] text-green-500 font-bold '>Hmara<span className='text-black'>Cart </span></h1>
    </NavLink>

    {/* Desktop Menu */}
    <div className="hidden sm:flex items-center gap-8">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>All Product</NavLink>
        <NavLink to='/Contact'>Contact</NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input onChange={(e)=> setSearchQuery(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
            <img className='w-4 h-4' src={assets.search_icon} alt="search" />
            {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg> */}
        </div>

        <div onClick={()=> navigate("/Cart")} className="relative cursor-pointer ">
            <img src={assets.nav_cart_icon} alt="cart" className='w-6 opacity-80' />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-green-500 w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
        </div>

        {!user ?(<button onClick={()=>setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-green-500 hover:bg-green-600 transition text-white rounded-full">
            Login
        </button>):(
            <div className='relative group'>
                <img className='w-10' src={assets.profile_icon} alt="" />
                <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-40 rounded-md text-sm z-40'>
                    <li onClick={()=>navigate("my-orders")} className='p-1.5 pl-3 hover:bg-green-500 cursor-pointer'>My Orders</li>
                    <li onClick={logout} className='p-1.5 pl-3 hover:bg-green-500 cursor-pointer'>Logout</li>
                </ul>
            </div>
        )}
    </div>
    <div className='flex items-center gap-6 sm:hidden'>
    <div onClick={()=> navigate("/Cart")} className="relative cursor-pointer">
            <img src={assets.nav_cart_icon} alt="cart" className='w-6 opacity-80' />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-green-500 w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
        </div>
        </div>
          
      {/* <img className='w-10' src={assets.profile_icon} alt="" /> */}


    <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
        {/* Menu Icon SVG */}
        <img src={assets.menu_icon} alt="" />        
    </button>

    {/* Mobile Menu */}
    { open && (
        <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-20`}>
      <NavLink to='/' onClick={()=>setOpen(false)}>Home</NavLink>
      <NavLink to='/products' onClick={()=>setOpen(false)}>All Product</NavLink>
      {user &&
      <NavLink to='/Contact' onClick={()=>setOpen(false)}>My Orders</NavLink>
    }
    <NavLink to='/Contact' onClick={()=>setOpen(false)}>Contact</NavLink>

    {!user ? (
         <button onClick={()=>{
            setOpen(false);
            setShowUserLogin(true);
         }}
          className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
         Login
     </button>
    ):( <button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
        Logout
    </button>)}
       
    </div>
    )}

</nav>
  )
}

export default Navbar