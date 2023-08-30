"use client"

import { useState } from "react"
import SelectCity from "./SelectCity"
import CategoryIcons from "./CategoryIcons"

import art from './assets/art.png'
import agriculture from './assets/agriculture.png'
import education from './assets/education.png'
import construction from './assets/helmet.png'
import science from './assets/microscope.png'
import tv from './assets/video.png'
import all from './assets/all.png'

import { eventOngoingData } from "./data"

import CategoryList from "../categorylist/CategoryList"

const cityData = ['all', 'mumbai', 'delhi', 'lucknow', 'chennai', 'bangaluru']

const eventCategoryData = [
    {id:1, name: 'all', image: all},
    {id:2, name: 'art', image: art},
    {id:3, name: 'agriculture', image: agriculture},
    {id:4, name: 'education', image: education},
    {id:5, name: 'construction', image: construction},
    {id:6, name: 'science', image: science},
    {id:7, name: 'tv', image: tv},
]



const Selector = () => {

    const [city,setCity] = useState('all')
    const [click,setClick] = useState(false)

    
    const [clickCategory, setClickCategory] = useState('art')

    const handleCityClick =(item)=>{
        setCity(item)
        setClick(false)
    }

  return (
    <div className="min-h-screen w-full mt-12">
        <div>
            {/* city Selector */}
            <SelectCity city={city} setCity={setCity} click={click} setClick={setClick} handleCityClick={handleCityClick} cityData={cityData} />

            {/* event Icons  */}
            <CategoryIcons eventData={eventCategoryData} clickCategory={clickCategory} setClickCategory={setClickCategory} />
            {/* grid / flexbox of various events  */}
            <CategoryList eventOngoingData={eventOngoingData} clickCategory={clickCategory} city={city} />
        </div>
    </div>
  )
}

export default Selector