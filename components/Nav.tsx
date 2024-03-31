"use client";

import React, { useState } from 'react'
import { menu } from '@/lib/menuData'
import { Home, Menu, X } from 'lucide-react'
import Link from 'next/link'

const Nav = () => {
  const [menuopen, setMenuopen] = useState<boolean>(false);  

  return (
    <header className='z-50 w-full h-14 bg-white fixed left-0 top-0 justify-center items-center gap-12'>
      <nav className='container flex justify-between items-center h-14 sm:px-12 px-4'>
        <h1 className='cursor-pointer font-bold text-xl hover:text-sky-500 opacity-100'>
          <Link href={"#Home"}><Home size={25}/></Link>
        </h1>
        <ul className='sm:flex gap-4 sm:gap-8 hidden'>
          {menu.map(data => (
            <li className='hover:text-sky-500 cursor-pointer font-bold opacity-100' key={data.id}>
              <Link href={`#${data.name}`}>
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
        <div onClick={() => setMenuopen(!menuopen)} className='sm:hidden flex cursor-pointer p-2 bg-sky-500 rounded-lg text-white hover:bg-sky-600 transition duration-500 delay-100'>
          {menuopen ? <X />  : <Menu /> } 
          {menuopen ? <ResponsiveNavbar /> : null }
        </div>
      </nav>
    </header>
  )
}

const ResponsiveNavbar = () => {
  return (
    <div className='absolute top-14 left-0 w-full h-[600px] bg-sky-900 py-4 px-2'>
      <ul className='flex flex-col gap-4 sm:gap-4'>
        {menu.map(data => (
          <li className='flex' key={data.id}>
            <Link href={`#${data.name}`} className='py-2 rounded-md hover:bg-sky-600 w-full px-2 cursor-pointer font-bold opacity-100'>
              {data.name}
            </Link>
          </li>
        ))}
      </ul>
    </div> 
  )
}

export default Nav
