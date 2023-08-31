import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-[10rem] w-full bg-[#1d1d1d] mt-12 px-12'>
        <div className='flex justify-between items-center gap-10 h-full'>
            
            <div>
                    <h1 className='font-serif font-bold text-lg md:text-3xl cursor-pointer text-slate-100'><Link href='/'>EVENTONN</Link></h1>
            </div>
            <div className='text-sm md:text-lg'>
                <h4 className='text-slate-200'>
                    Created by Gaurav Singh
                </h4>
                <p className='text-slate-400'>images and logo from unsplash and flaticon</p>
            </div>
        </div>
    </div>
  )
}

export default Footer