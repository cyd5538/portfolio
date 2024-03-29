import React from 'react'
import { menu } from '@/lib/menuData'
import { Home } from 'lucide-react'

const Nav = () => {
  return (
    <header className='z-40 w-full h-14 bg-white fixed justify-center items-center gap-12'>
      <nav className='container flex justify-between items-center h-14 pl-12 pr-12'>
        <h1 className='cursor-pointer text-xl hover:text-sky-500'>
          <Home size={25}/>
        </h1>
        <ul className='flex gap-4 sm:gap-8'>
          {menu.map(data => (
            <li className='hover:text-sky-500 cursor-pointer' key={data.id}>{data.name}</li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav
