"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const CategoryList = ({ eventOngoingData , clickCategory, city }) => {
    const router = useRouter()
    let newData = eventOngoingData

    if(clickCategory === 'all' && city === 'all'){
        newData = eventOngoingData
    } else if (clickCategory !== 'all' && city === 'all'){
        newData = eventOngoingData.filter(item=> item.category === clickCategory)
    } else if(clickCategory !== 'all' && city !== 'all'){
        newData = eventOngoingData.filter(item => item.category === clickCategory && item.city === city)
        if(!newData.length){
            return (
                <h3 className='text-center text-3xl font-serif font-bold'>No {clickCategory} event in {city}.</h3>
            )
        }
    } 
    
    const handleClick =(id)=> {
        router.push(`/events/${id}`)
    }

  return (
    <div className=' mt-12 px-8 md:px-12 pb-12'>
        <div className='flex flex-wrap gap-6 items-center justify-center'>

            {/* card  */}
            {newData.map(item=> 
                <div key={item.id} className='flex flex-col justify-center items-center cursor-pointer' onClick={()=> handleClick(item.id)}>
                    {/* image name date card  */}
                    <div>
                        <Image className='w-[25rem] h-[20rem] grayscale hover:grayscale-0 ' src={item.image} alt={item.name} />
                    </div>
                    <div className='w-[25rem] bg-[#1d1d1d] text-slate-200'>
                        <div className='text-center'>
                            <h4 className='text-xl font-serif font-semibold pt-2'>{item.name}</h4>
                        </div>
                        <div className='flex justify-center pb-4'>
                            <p className='text-lg font-medium font-serif'>{item.dateStart} to {item.dateEnd}</p>
                        </div>
                    </div>
                </div>
                )}
        </div>
    </div>
  )
}

export default CategoryList




// let newData ='all'
// if(clickCategory !== 'all'){
//     newData = eventOngoingData.filter(data=> data.category === clickCategory && data.city === city)
//     if(!newData.length){
//         return(
//             <h3 className='text-center text-3xl font-serif font-bold'>No {clickCategory} event in {city}.</h3>
//         )
//     }
// } else {
//     newData = eventOngoingData
// }