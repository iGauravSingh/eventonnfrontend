"use client"

import Link from 'next/link'

import { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";




const Navbar = () => {

    const [menuOpenStatus, setMenuOpenStatus] = useState(false)

  return (
    <nav>
            <div className='w-full absolute z-10'>
        <div className='h-[5rem] border-b-2 border-l-2 border-r-2 flex flex-col justify-center w-[90%] mx-auto'>
            <div className='flex items-center justify-between px-8'>
                {/* logo  */}
                <div>
                    <h1 className='font-serif font-bold text-3xl cursor-pointer text-slate-100'><Link href='/'>EVENTONN</Link></h1>
                </div>

                {/* nav Links  */}

                    {/* nav links for mobile BURGUR  */}
                    
                <div className='md:hidden' onClick={()=> setMenuOpenStatus(prev=> !prev)}>
                    {menuOpenStatus ? <RxCross1 size={35} color='#f1f5f9' /> : <RxHamburgerMenu size={35} color='#f1f5f9' />}
                </div>
                    

                    {/* nav links for mid screen */}
                    <div className='hidden md:block '>
                        <div className='flex items-center gap-6 font-serif font-medium text-lg text-slate-100'>
                            <Link className='hover:text-slate-400' href='/'>HOME</Link>
                            <Link className='hover:text-slate-400' href='/about'>ABOUT</Link>
                            <Link className='hover:text-slate-400' href='/faq'>FAQ</Link>

                            {/* Sign in or Logo  */}
                            <Link className='hover:text-slate-400' href='/signin'>SIGN IN</Link>
                        </div>
                    </div>

            </div>
        </div>
    </div>
    {
    menuOpenStatus 
    ?
    <div className='absolute w-full h-screen bg-[#1d1d1d] text-slate-200 z-10 left-0 top-[5rem] flex flex-col text-center gap-4'>
                    <Link className="mt-8 text-3xl font-semibold tracking-wide" href='/' onClick={()=>setMenuOpenStatus(prev=> !prev)}>HOME</Link>
                    <Link className="text-3xl font-semibold tracking-wide" href='/' onClick={()=>setMenuOpenStatus(prev=> !prev)}>ABOUT</Link>
                    <Link className="text-3xl font-semibold tracking-wide" href='/' onClick={()=>setMenuOpenStatus(prev=> !prev)}>FAQ</Link>

                    {/* Sign in or Logo  */}
                    <Link className="text-3xl font-semibold tracking-wide" href='/' onClick={()=>setMenuOpenStatus(prev=> !prev)}>SIGN IN</Link>
    </div>
    :
    ''
    }
    </nav>
  )
}

export default Navbar