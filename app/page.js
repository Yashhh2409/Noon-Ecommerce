import AddBanner from '@/components/AddBanner'
import Deals from '@/components/Deals'
import NewsLetter from '@/components/NewsLetter'
import ProductCategories from '@/components/ProductCategories'
import RamadanSlider from '@/components/RamadanSlider'
import Recommended from '@/components/Recommended'
import BestDeals from '@/components/BestDeals'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="bg-white">
      <NewsLetter />
      <ProductCategories />
      <Deals />
      <Recommended />
      <AddBanner />
      <BestDeals />
      {/* <RamadanSlider /> */}
      </div>
    </div>
  )
}

export default page
