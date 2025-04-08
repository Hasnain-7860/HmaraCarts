import React from 'react'
import MainBanner from '../Components/MainBanner'
import Categories from '../Components/Categories'
import BestSeller from '../Components/BestSeller'
import Bottombanner from '../Components/Bottombanner'
import Newsletter from '../Components/Newsletter'

const Home = () => {
  return (
    <div>
        <MainBanner/>
        <Categories/>
        <BestSeller/>
        <Bottombanner/>
        <Newsletter/>
    </div>
  )
}

export default Home