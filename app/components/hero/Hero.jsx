"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import chair from './chair.jpg'

const headingData = ['business confernce', 'party celebration' , 'art shows' , 'sports meet']


const headVariant = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1.5,
            delay: .75,
            ease: [0, 0.71, 0.2, 1.01], 
        }
    }
}

const pointVariant = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01], 
        }
    }
}


const Hero = () => {

    const [items,setItems] = useState(headingData[0])
    const [count,setCount] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=> {
            if(count < headingData.length-1){
                setCount(prev=> prev + 1)
                setItems(headingData[count])
                //console.log(count)
                
            } else {
                setCount(0)
                setItems(headingData[count])
            }
        },4000)
        return ()=> clearInterval(interval)
    },[count])

  return (
    <div className='relative'>
        <div className='bg-cover h-screen w-full blur-sm grayscale ' style={{backgroundImage: `url(${chair.src})`}}>
            
        </div>
        <div className='absolute w-full h-full flex flex-col justify-center items-center top-0 text-slate-100'>
            <motion.h1
            variants={headVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className='text-3xl md:text-5xl font-serif font-bold'>DISCOVER YOUR EVENTS</motion.h1>
            <motion.p
            key={count}
            variants={pointVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className='mt-8 text-2xl md:4xl font-serif font-medium capitalize'>{items}</motion.p>
        </div>
    </div>
  )
}

export default Hero